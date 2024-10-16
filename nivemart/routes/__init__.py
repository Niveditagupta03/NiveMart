import os
from fastapi import APIRouter, FastAPI
from fastapi.staticfiles import StaticFiles
from .auth import auth_router
from .product import product_router


app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")




router = APIRouter(prefix="/api/v1")
router.include_router(auth_router)
router.include_router(product_router)

app.include_router(router)

