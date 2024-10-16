import os
import shutil
from typing import List
from uuid import UUID, uuid4
import uuid
from fastapi import APIRouter, Depends, Form, HTTPException, Request, UploadFile, File
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from nivemart.database import get_session
from nivemart.product.model import Product as ProductModel, ProductType
from nivemart.product.schema import Product as ProductSchema, ProductCreate
from . import product_router

IMAGE_UPLOAD_DIR = "static"
ALLOWED_TYPES = [
    ProductType.WESTERN,
    ProductType.CASUAL,
    ProductType.FANCY_FORMAL,
    ProductType.FORMALS,
    ProductType.OUTING,
]

@product_router.post("/", response_model=ProductSchema)
async def create_product(
    request: Request,
    name: str = Form(...),
    price: float = Form(...),
    stock: int = Form(...),
    type: ProductType = Form(...),
    image: UploadFile = File(...),
    description: str = Form(None),
    db: Session = Depends(get_session)
):
    try:
        # Check if the product type is allowed
        if type not in ALLOWED_TYPES:
            raise HTTPException(status_code=400, detail="Invalid product type.")

        image_extension = os.path.splitext(image.filename)[1]
        image_filename = f"{uuid4()}{image_extension}"
        image_path = os.path.join(IMAGE_UPLOAD_DIR, image_filename)

        # Save the uploaded image
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        # Create a new product
        new_product = ProductModel(
            id=uuid4(),
            name=name,
            description=description,
            photo=image_filename,
            price=price,
            stock=stock,
            type=type,
        )

        db.add(new_product)
        db.commit()
        db.refresh(new_product)

        photo_url = f"http://{request.headers['host']}/api/v1/product/image/{new_product.id}"

        return {**new_product.__dict__, "photo": photo_url}

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Internal Server Error")


@product_router.get("/get_all_products", response_model=List[ProductSchema])
async def get_all_products(request: Request, db: Session = Depends(get_session)):
    try:
        products = db.query(ProductModel).all()
        response = []

        for product in products:
            product_dict = product.__dict__.copy()
            product_dict["photo"] = f"http://{request.headers['host']}/api/v1/product/image/{product.id}"
            response.append(product_dict)

        return response

    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error")


# General function to list products by type
async def list_products_by_type(request: Request, product_type: ProductType, db: Session):
    products = db.query(ProductModel).filter(ProductModel.type == product_type).all()
    for product in products:
        # Construct the photo URL correctly
        product.photo = f"http://{request.headers['host']}/api/v1/product/image/{product.id}"
    return products


@product_router.get("/western", response_model=List[ProductSchema])
async def list_western_products(request: Request, db: Session = Depends(get_session)):
    return await list_products_by_type(request, ProductType.WESTERN, db)

@product_router.get("/casual", response_model=List[ProductSchema])
async def list_casual_products(request: Request, db: Session = Depends(get_session)):
    return await list_products_by_type(request, ProductType.CASUAL, db)

@product_router.get("/fancy_formal", response_model=List[ProductSchema])
async def list_fancy_formal_products(request: Request, db: Session = Depends(get_session)):
    return await list_products_by_type(request, ProductType.FANCY_FORMAL, db)

@product_router.get("/formals", response_model=List[ProductSchema])
async def list_formals_products(request: Request, db: Session = Depends(get_session)):
    return await list_products_by_type(request, ProductType.FORMALS, db)

@product_router.get("/outing", response_model=List[ProductSchema])
async def list_outing_products(request: Request, db: Session = Depends(get_session)):
    return await list_products_by_type(request, ProductType.OUTING, db)


@product_router.delete("/{product_id}", status_code=204)
async def delete_product(product_id: UUID, db: Session = Depends(get_session)):
    try:
        product = db.query(ProductModel).filter(ProductModel.id == product_id).first()

        if product is None:
            print(f"Attempted to delete product with ID {product_id}, but it was not found.")
            raise HTTPException(status_code=404, detail="Product not found")

        print(f"Found product for deletion: {product}")

        db.delete(product)
        db.commit()

        print(f"Successfully deleted product with ID {product_id}.")
        return

    except Exception as e:
        print(f"An error occurred while trying to delete product {product_id}: {str(e)}")
        db.rollback()
        raise HTTPException(status_code=500, detail="Internal Server Error")


@product_router.get("/image/{product_id}", response_class=FileResponse)
async def get_product_image(product_id: UUID, db: Session = Depends(get_session)):
    product = db.query(ProductModel).filter(ProductModel.id == product_id).first()

    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    image_path = os.path.join(IMAGE_UPLOAD_DIR, product.photo)

    if not os.path.exists(image_path):
        raise HTTPException(status_code=404, detail="Image not found")

    return FileResponse(image_path)


# IMAGE_UPLOAD_DIR = "static"
# ALLOWED_TYPES = [ProductType.WESTERN, ProductType.CASUAL, ProductType.FANCY_FORMAL, ProductType.FORMALS, ProductType.OUTING]

# @product_router.post("/", response_model=ProductSchema)
# async def create_product(
#     request: Request,
#     name: str = Form(...),
#     price: float = Form(...),
#     stock: int = Form(...),
#     type: ProductType = Form(...),
#     image: UploadFile = File(...),
#     description: str = Form(None),
#     db: Session = Depends(get_session)
# ):
#     try:
#         image_extension = os.path.splitext(image.filename)[1]
#         image_filename = f"{uuid4()}{image_extension}"
#         image_path = os.path.join(IMAGE_UPLOAD_DIR, image_filename)

#         with open(image_path, "wb") as buffer:
#             shutil.copyfileobj(image.file, buffer)

#         # Use the new endpoint for photo URL
#         new_product = ProductModel(
#             id=uuid4(),
#             name=name,
#             description=description,
#             photo=image_filename,  # Store only the filename
#             price=price,
#             stock=stock,
#             type=type,
#         )

#         db.add(new_product)
#         db.commit()
#         db.refresh(new_product)

#         photo_url = f"http://{request.headers['host']}/api/v1/product/image/{new_product.id}"

#         return {**new_product.__dict__, "photo": photo_url}

#     except Exception as e:
#         db.rollback()
#         raise HTTPException(status_code=500, detail="Internal Server Error")

# @product_router.get("/", response_model=List[ProductSchema])
# async def get_all_products(request: Request, db: Session = Depends(get_session)):
#     try:
#         products = db.query(ProductModel).all()  # Fetch all products
#         response = []
        
#         for product in products:
#             product_dict = product.__dict__.copy()  # Copy product attributes
#             product_dict["photo"] = f"http://{request.headers['host']}/api/v1/product/image/{product.id}"  # Construct photo URL
#             response.append(product_dict)  # Add to response list

#         return response  # Return the list of products with photo URLs

#     except Exception as e:
#         raise HTTPException(status_code=500, detail="Internal Server Error")
    
# @product_router.get("/western", response_model=List[ProductSchema])
# async def list_western_products(request: Request, db: Session = Depends(get_session)):
#     products = db.query(ProductModel).filter(ProductModel.type == ProductType.WESTERN).all()
#     base_url = f"http://{request.headers['host']}/images/"
#     for product in products:
#         if product.photo and not product.photo.startswith("http"):
#             product.photo = base_url + os.path.basename(product.photo)
#     return products

# @product_router.get("/casual", response_model=List[ProductSchema])
# async def list_casual_products(request: Request, db: Session = Depends(get_session)):
#     products = db.query(ProductModel).filter(ProductModel.type == ProductType.CASUAL).all()
#     base_url = f"http://{request.headers['host']}/images/"
#     for product in products:
#         if product.photo and not product.photo.startswith("http"):
#             product.photo = base_url + os.path.basename(product.photo)
#     return products
# @product_router.get("/fancy_formal", response_model=List[ProductSchema])
# async def list_fancy_formal_products(request: Request, db: Session = Depends(get_session)):
#     products = db.query(ProductModel).filter(ProductModel.type == ProductType.FANCY_FORMAL).all()
#     base_url = f"http://{request.headers['host']}/images/"
#     for product in products:
#         if product.photo and not product.photo.startswith("http"):
#             product.photo = base_url + os.path.basename(product.photo)
#     return products

# @product_router.get("/formals", response_model=List[ProductSchema])
# async def list_formals_products(request: Request, db: Session = Depends(get_session)):
#     products = db.query(ProductModel).filter(ProductModel.type == ProductType.FORMALS).all()
#     base_url = f"http://{request.headers['host']}/images/"
#     for product in products:
#         if product.photo and not product.photo.startswith("http"):
#             product.photo = base_url + os.path.basename(product.photo)
#     return products

# @product_router.get("/outing", response_model=List[ProductSchema])
# async def list__products(request: Request, db: Session = Depends(get_session)):
#     products = db.query(ProductModel).filter(ProductModel.type == ProductType.OUTING).all()
#     base_url = f"http://{request.headers['host']}/images/"
#     for product in products:
#         if product.photo and not product.photo.startswith("http"):
#             product.photo = base_url + os.path.basename(product.photo)
#     return products

    
# @product_router.delete("/{product_id}", status_code=204)
# async def delete_product(product_id: UUID, db: Session = Depends(get_session)):
#     try:
#         # Fetch the product by ID
#         product = db.query(ProductModel).filter(ProductModel.id == product_id).first()

#         if product is None:
#             print(f"Attempted to delete product with ID {product_id}, but it was not found.")
#             raise HTTPException(status_code=404, detail="Product not found")

#         print(f"Found product for deletion: {product}")

#         # Attempt to delete the product
#         db.delete(product)
#         db.commit()  # Commit the transaction

#         print(f"Successfully deleted product with ID {product_id}.")
#         return  # No content response

#     except Exception as e:
#         # Log the error message for debugging
#         print(f"An error occurred while trying to delete product {product_id}: {str(e)}")
#         db.rollback()  # Rollback in case of error
#         raise HTTPException(status_code=500, detail="Internal Server Error")


# @product_router.get("/image/{product_id}", response_class=FileResponse)
# async def get_product_image(product_id: UUID, db: Session = Depends(get_session)):
#     product = db.query(ProductModel).filter(ProductModel.id == product_id).first()

#     if not product:
#         raise HTTPException(status_code=404, detail="Product not found")

#     image_path = os.path.join(IMAGE_UPLOAD_DIR, product.photo)

#     if not os.path.exists(image_path):
#         raise HTTPException(status_code=404, detail="Image not found")

#     return FileResponse(image_path)

