from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.types import Uuid
from sqlalchemy.schema import Column
from nivemart.database import Base
import uuid


class Product(Base):
    __tablename__ = "products"
    id: Mapped[uuid.UUID] = mapped_column(Uuid, primary_key=True, default=uuid.uuid4)
    name: Mapped[str]
    description: Mapped[str]
    image_url: Mapped[str]
    price: Mapped[float]
    stock: Mapped[int]
