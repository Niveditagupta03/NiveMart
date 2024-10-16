from sqlalchemy import Column, Enum as SQLEnum, String, Float, Integer
from sqlalchemy.dialects.postgresql import UUID as PG_UUID
from nivemart.database import Base
import uuid
from enum import Enum
from sqlalchemy import DateTime
from datetime import datetime

created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)


# Enum for product types
class ProductType(str, Enum):
    WESTERN = "western"
    CASUAL = "casual"
    FANCY_FORMAL = "fancyFormal"
    FORMALS = "formals"
    OUTING = "outing"

# Product model for SQLAlchemy
class Product(Base):
    __tablename__ = 'products'
    
    id = Column(PG_UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    photo = Column(String, nullable=False)
    description = Column(String, nullable=True)
    price = Column(Float, nullable=False)
    stock = Column(Integer, nullable=False)
    type = Column(SQLEnum(ProductType), nullable=False)  