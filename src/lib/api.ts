export const API_BASE = "http://localhost:8000/api/v1";
export function authHeader() {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}
