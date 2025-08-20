from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings
from .database import Base, engine
from .api.v1.routes import auth as auth_routes
from .api.v1.routes import translate as translate_routes

tags_metadata = [
    {
        "name": "auth",
        "description": "Register/Login with email/password. OAuth providers will be added later. Includes API key management.",
    },
    {
        "name": "translation",
        "description": "Text translation endpoints. Currently a placeholder implementation.",
    },
]

app = FastAPI(
    title=settings.app_name,
    version="0.1.0",
    openapi_tags=tags_metadata,
    description="API for the NMT Agent for Low-Resource Languages. Milestone 1 scaffolding.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables at startup (simple bootstrap, replace with Alembic migrations later)
@app.on_event("startup")
def on_startup():
    Base.metadata.create_all(bind=engine)

api_v1 = FastAPI()

# Mount v1 routers
from fastapi import APIRouter
api_router = APIRouter(prefix="/api/v1")
api_router.include_router(auth_routes.router)
api_router.include_router(translate_routes.router)
app.include_router(api_router)
