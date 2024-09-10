from fastapi import APIRouter, HTTPException, status, Depends, File, UploadFile
from typing import List
from sqlalchemy.orm import Session
from nivemart.database import get_session
from nivemart.product.schema import BaseProduct, Product
import os
import uuid

product_router = APIRouter()

UPLOAD_DIR = "nimart/product/public/"  # Directory where files will be stored

# Ensure the upload directory exists
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@product_router.post("/", response_model=Product)
async def create_product(
    product: BaseProduct,
    image: UploadFile = File(...),  # Accept file upload
    db: Session = Depends(get_session)
):
    # Save the image
    image_filename = f"{uuid.uuid4()}_{image.filename}"
    image_path = os.path.join(UPLOAD_DIR, image_filename)
    
    try:
        with open(image_path, "wb") as buffer:
            buffer.write(await image.read())
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to save image")

    # Create the database product entry
    db_product = Product(
        name=product.name,
        description=product.description,
        image_url=image_path,  # Store the file path or URL
        price=product.price,
        stock=product.stock
    )
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product
