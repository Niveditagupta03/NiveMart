from fastapi import APIRouter



product_router = APIRouter(prefix="/product", tags=["Product"])

from . import routes

