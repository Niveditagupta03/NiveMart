from typing import Optional
from pydantic import BaseModel, UUID4, HttpUrl
from enum import Enum

# Enum for product types
class ProductType(str, Enum):
    WESTERN = "western"
    CASUAL = "casual"
    FANCY_FORMAL = "fancyFormal"
    FORMALS = "formals"
    OUTING = "outing"

# Base model for products
class BaseProduct(BaseModel):
    id: Optional[UUID4] = None
    name: str
    description: Optional[str] = None
    photo: Optional[HttpUrl] = None  
    price: float
    stock: int
    type: ProductType  

    class Config:
        from_attributes = True  


class Product(BaseProduct):
    id: UUID4

    class Config:
        from_attributes = True  

# Model for creating a new product
class ProductCreate(BaseProduct):
    pass

# Model for updating an existing product
class ProductUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    photo: Optional[HttpUrl] = None  # Use HttpUrl for URL validation
    price: Optional[float] = None
    stock: Optional[int] = None
    type: Optional[ProductType] = None  # Optional enum for type validation

    class Config:
        from_attributes = True  # Use from_attributes for compatibility with SQLAlchemy
