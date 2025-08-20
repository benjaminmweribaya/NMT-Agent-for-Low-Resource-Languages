from pydantic_settings import BaseSettings
from typing import List
import os

class Settings(BaseSettings):
    app_name: str = "NMT Agent API"
    environment: str = "development"
    secret_key: str = os.getenv("SECRET_KEY", "dev-secret-change-me")
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24 * 7

    database_url: str = os.getenv(
        "DATABASE_URL",
        "postgresql+psycopg2://postgres:postgres@localhost:5432/nmt",
    )

    cors_origins: List[str] = (
        os.getenv("CORS_ORIGINS", "http://localhost:5173,http://localhost:8080")
        .split(",")
        if os.getenv("CORS_ORIGINS")
        else ["*"]
    )

settings = Settings()
