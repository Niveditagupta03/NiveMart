from fastapi import APIRouter
from .auth import auth_router
from .product import product_router

router = APIRouter(prefix="/api/v1")
router.include_router(auth_router)
router.include_router(product_router)
