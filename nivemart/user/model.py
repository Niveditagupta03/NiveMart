from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.types import Uuid
from nivemart.database import Base
import uuid


class User(Base):
    __tablename__ = "users"
    id: Mapped[uuid.UUID] = mapped_column(Uuid, primary_key=True, default=uuid.uuid4)
    name: Mapped[str]
    email: Mapped[str] = mapped_column(unique=True)
