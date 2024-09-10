import uuid
from pydantic import BaseModel, UUID4


class BaseProduct(BaseModel):
    name: str
    description: str
    image_url: str
    price: float
    stock: int


class Product(BaseProduct):
    id: UUID4
