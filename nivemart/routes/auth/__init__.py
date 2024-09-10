from fastapi import APIRouter

auth_router = APIRouter(prefix="/auth", tags=["Auth"])

from . import routes
