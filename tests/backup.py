# import os
# import shutil
# import uuid
# from typing import List, Optional
# from uuid import UUID
# from fastapi import APIRouter, Depends, HTTPException, Request, UploadFile, File, Form
# from fastapi.responses import FileResponse
# from fastapi.staticfiles import StaticFiles
# from sqlalchemy.orm import Session
# from nivemart import routes
# from nivemart.database import get_session
# from nivemart.product.model import Product
# from nivemart.product.schema import Product as ProductSchema, ProductType, ProductUpdate
# from . import product_router
# from fastapi import UploadFile, File

# IMAGE_UPLOAD_DIR = "static"

# # Ensure the upload directory exists
# os.makedirs(IMAGE_UPLOAD_DIR, exist_ok=True)



# @product_router.get("/all_products", response_model=List[ProductSchema])
# async def list_products(
#     request: Request, 
#     product_type: ProductType,  
#     db: Session = Depends(get_session)
# ):
#     # Fetch products based on the type passed
#     products = db.query(Product).filter(Product.type == product_type).all()
#     base_url = f"http://{request.headers['host']}/static/"
    
#     for product in products:
#         if product.photo and not product.photo.startswith("http"):
#             product.photo = base_url + os.path.basename(product.photo)
    
#     return products

# async def create_product(image: UploadFile = File(...)):
#     file_location = f"static/{image.filename}"
#     with open(file_location, "wb") as f:
#         f.write(await image.read())
#     return {"info": f"file '{image.filename}' saved at '{file_location}'"}



# @product_router.get("/{id}", response_model=ProductSchema)
# def get_product(id: UUID, db: Session = Depends(get_session)):
#     product = db.query(Product).filter(Product.id == id).first()
#     if not product:
#         raise HTTPException(status_code=404, detail="Product not found")
#     return product


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
#         # Save the image with a unique filename
#         image_extension = os.path.splitext(image.filename)[1]  # Get file extension
#         image_filename = f"{uuid.uuid4()}{image_extension}"  # Use unique name
#         image_path = os.path.join(IMAGE_UPLOAD_DIR, image_filename)

#         # Save the image to the static folder
#         with open(image_path, "wb") as buffer:
#             shutil.copyfileobj(image.file, buffer)

#         # Construct the URL for accessing the image
#         photo_url = f"http://{request.headers['host']}/static/{image_filename}"

#         # Debugging: Print filename and URL
#         print(f"Image saved as: {image_filename}")
#         print(f"Image URL: {photo_url}")

#         new_product = Product(
#             id=uuid.uuid4(),  # Product ID is different and automatically generated
#             name=name,
#             description=description,
#             photo=photo_url,  # Save the URL in the photo field
#             price=price,
#             stock=stock,
#             type=type,
#         )

#         db.add(new_product)
#         db.commit()
#         db.refresh(new_product)

#         return new_product

#     except Exception as e:
#         db.rollback()
#         raise HTTPException(status_code=500, detail="Internal Server Error")

# @product_router.get("/image/{product_id}")
# async def get_image(product_id: str, db: Session = Depends(get_session)):
#     # Fetch the product based on the product ID
#     product = db.query(Product).filter(Product.id == product_id).first()
    
#     if not product or not product.photo:
#         raise HTTPException(status_code=404, detail="Image not found")
    
#     # Extract the image filename from the photo URL
#     image_name = os.path.basename(product.photo)
#     image_path = os.path.join(IMAGE_UPLOAD_DIR, image_name)
    
#     if not os.path.exists(image_path):
#         raise HTTPException(status_code=404, detail="Image not found")
    
#     return FileResponse(image_path)

# @product_router.put("/{product_id}", response_model=ProductSchema)
# async def update_product(
#     product_id: UUID,
#     product_update: ProductUpdate,
#     db: Session = Depends(get_session)
# ):
#     product = db.query(Product).filter(Product.id == product_id).first()
#     if not product:
#         raise HTTPException(status_code=404, detail="Product not found")

#     for key, value in product_update.dict(exclude_unset=True).items():
#         # Convert HttpUrl to str if it's not None
#         if key == "photo" and value is not None:
#             value = str(value)
#         setattr(product, key, value)

#     db.commit()
#     db.refresh(product)
#     return product


# @product_router.delete("/{id}", response_model=dict)
# def delete_product(id: UUID, db: Session = Depends(get_session)):
#     product = db.query(Product).filter(Product.id == id).first()
#     if not product:
#         raise HTTPException(status_code=404, detail="Product not found")

#     db.delete(product)
#     db.commit()
#     return {"detail": "Product deleted"}


@product_router.get("/western", response_model=List[ProductSchema])
async def list_western_products(request: Request, db: Session = Depends(get_session)):
    products = db.query(Product).filter(Product.type == ProductType.WESTERN).all()
    base_url = f"http://{request.headers['host']}/images/"
    for product in products:
        if product.photo and not product.photo.startswith("http"):
            product.photo = base_url + os.path.basename(product.photo)
    return products

@product_router.get("/casual", response_model=List[ProductSchema])
async def list_casual_products(request: Request, db: Session = Depends(get_session)):
    products = db.query(Product).filter(Product.type == ProductType.CASUAL).all()
    base_url = f"http://{request.headers['host']}/images/"
    for product in products:
        if product.photo and not product.photo.startswith("http"):
            product.photo = base_url + os.path.basename(product.photo)
    return products
@product_router.get("/fancy_formal", response_model=List[ProductSchema])
async def list_fancy_formal_products(request: Request, db: Session = Depends(get_session)):
    products = db.query(Product).filter(Product.type == ProductType.FANCY_FORMAL).all()
    base_url = f"http://{request.headers['host']}/images/"
    for product in products:
        if product.photo and not product.photo.startswith("http"):
            product.photo = base_url + os.path.basename(product.photo)
    return products

@product_router.get("/formals", response_model=List[ProductSchema])
async def list_formals_products(request: Request, db: Session = Depends(get_session)):
    products = db.query(Product).filter(Product.type == ProductType.FORMALS).all()
    base_url = f"http://{request.headers['host']}/images/"
    for product in products:
        if product.photo and not product.photo.startswith("http"):
            product.photo = base_url + os.path.basename(product.photo)
    return products

@product_router.get("/outing", response_model=List[ProductSchema])
async def list__products(request: Request, db: Session = Depends(get_session)):
    products = db.query(Product).filter(Product.type == ProductType.OUTING).all()
    base_url = f"http://{request.headers['host']}/images/"
    for product in products:
        if product.photo and not product.photo.startswith("http"):
            product.photo = base_url + os.path.basename(product.photo)
    return products

# @product_router.get("/", response_model=List[ProductSchema])
# async def list_products(
#     request: Request, 
#     db: Session = Depends(get_session),
#     product_type: ProductType = None  # Optional filter
# ):
#     query = db.query(Product)
#     if product_type:
#         query = query.filter(Product.type == product_type)
    
#     products = query.all()
#     base_url = f"http://{request.headers['host']}/images/"
#     for product in products:
#         if product.photo and not product.photo.startswith("http"):
#             product.photo = base_url + os.path.basename(product.photo)
#     return products

import os
import shutil
import uuid
from typing import List
from uuid import UUID
from fastapi import APIRouter, Depends, HTTPException, Request, UploadFile, File, Form
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session
from nivemart.database import get_session
from nivemart.product.model import Product
from nivemart.product.schema import Product as ProductSchema, ProductType, ProductUpdate
from . import product_router


IMAGE_UPLOAD_DIR = "static"

# Ensure the upload directory exists
os.makedirs(IMAGE_UPLOAD_DIR, exist_ok=True)

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
        # Save the image with a unique filename
        image_extension = os.path.splitext(image.filename)[1]
        image_filename = f"{uuid.uuid4()}{image_extension}"
        image_path = os.path.join(IMAGE_UPLOAD_DIR, image_filename)

        # Save the image to the static folder
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        # Construct the URL for accessing the image
        photo_url = f"http://{request.headers['host']}/static/{image_filename}"

        new_product = Product(
            id=uuid.uuid4(),
            name=name,
            description=description,
            photo=photo_url,
            price=price,
            stock=stock,
            type=type,
        )

        db.add(new_product)
        db.commit()
        db.refresh(new_product)

        return new_product

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Internal Server Error")

@product_router.get("/western", response_model=List[ProductSchema])
async def list_western_products(
    request: Request, 
    db: Session = Depends(get_session)
):
    products = db.query(Product).filter(Product.type == ProductType.WESTERN).all()
    return products


@product_router.get("/casual", response_model=List[ProductSchema])
async def list_casual_products(
    request: Request, 
    db: Session = Depends(get_session)
):
    # Fetch all casual products
    products = db.query(Product).filter(Product.type == ProductType.CASUAL).all()
    for product in products:
        if product.photo and not product.photo.startswith("http"):
            base_url = f"http://{request.headers['host']}/static/"
            product.photo = base_url + os.path.basename(product.photo)
    
    return products

# Add similar endpoints for other product types as needed...

@product_router.get("/{id}", response_model=ProductSchema)
def get_product(id: UUID, db: Session = Depends(get_session)):
    product = db.query(Product).filter(Product.id == id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@product_router.get("/image/{product_id}")
async def get_image(product_id: UUID, db: Session = Depends(get_session)):
    product = db.query(Product).filter(Product.id == product_id).first()
    
    if not product or not product.photo:
        raise HTTPException(status_code=404, detail="Image not found")
    
    image_name = os.path.basename(product.photo)
    image_path = os.path.join(IMAGE_UPLOAD_DIR, image_name)
    
    if not os.path.exists(image_path):
        raise HTTPException(status_code=404, detail="Image not found")
    
    return FileResponse(image_path)

@product_router.put("/{product_id}", response_model=ProductSchema)
async def update_product(
    product_id: UUID,
    product_update: ProductUpdate,
    db: Session = Depends(get_session)
):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    for key, value in product_update.dict(exclude_unset=True).items():
        setattr(product, key, value)

    db.commit()
    db.refresh(product)
    return product

@product_router.delete("/{id}", response_model=dict)
def delete_product(id: UUID, db: Session = Depends(get_session)):
    product = db.query(Product).filter(Product.id == id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(product)
    db.commit()
    return {"detail": "Product deleted"}


{
    "id": "62ffc7d6-b505-4e54-a5d8-784396ad0639",
    "name": "tanvi",
    "description": "string",
    "photo": "http://127.0.0.1:8000/static/46a0c0ee-2faa-4084-aceb-715e1c278944.jpg",
    "price": 0,
    "stock": 0,
    "type": "fancyFormal"
  }
]
in static file image is saving by this name = 46a0c0ee-2faa-4084-aceb-715e1c278944
curl -X 'GET' \
  'http://127.0.0.1:8000/api/v1/product/image/62ffc7d6-b505-4e54-a5d8-784396ad0639' \
  -H 'accept: application/json'
Request URL
http://127.0.0.1:8000/api/v1/product/image/62ffc7d6-b505-4e54-a5d8-784396ad0639



# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


IMAGE_UPLOAD_DIR = "static"

# Ensure the upload directory exists
os.makedirs(IMAGE_UPLOAD_DIR, exist_ok=True)

class PhotoUrlModel(BaseModel):
    photo: HttpUrl

async def create_product_internal(
    request: Request,
    name: str,
    price: float,
    stock: int,
    type: ProductType,
    image: UploadFile,
    description: str = None,
    db: Session = Depends(get_session)
):
    """
    Internal function to create a product and save its image.

    Args:
        request: The FastAPI request object.
        name: The name of the product.
        price: The price of the product.
        stock: The available stock for the product.
        type: The product type.
        image: The uploaded image file.
        description: Optional description of the product.
        db: The database session.

    Returns:
        The newly created product object.
    """
    try:
        # Validate that the uploaded file is an image
        if not image.filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            raise HTTPException(status_code=400, detail="Invalid image type.")

        # Save the image with a unique filename
        image_extension = os.path.splitext(image.filename)[1]
        image_filename = f"{uuid.uuid4()}{image_extension}"
        image_path = os.path.join(IMAGE_UPLOAD_DIR, image_filename)

        # Save the image to the static folder
        with open(image_path, "wb") as buffer:
            shutil.copyfileobj(image.file, buffer)

        # Construct the URL for accessing the image
        photo_url = f"http://{request.url.hostname}:{request.url.port}/static/{image_filename}"

        new_product = Product(
            id=uuid.uuid4(),
            name=name,
            description=description,
            photo=photo_url,
            price=price,
            stock=stock,
            type=type,
        )

        db.add(new_product)
        db.commit()
        db.refresh(new_product)

        return new_product

    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Internal Server Error: " + str(e))

# POST APIs for different product types
@product_router.post("/casual/", response_model=ProductSchema)
async def create_casual_product(
    request: Request,
    name: str = Form(...),
    price: float = Form(...),
    stock: int = Form(...),
    image: UploadFile = File(...),
    description: str = Form(None),
    db: Session = Depends(get_session)
):


    return await create_product_internal(request, name, price, stock, ProductType.CASUAL, image, description, db)

@product_router.post("/western/", response_model=ProductSchema)
async def create_western_product(
    request: Request,
    name: str = Form(...),
    price: float = Form(...),
    stock: int = Form(...),
    image: UploadFile = File(...),
    description: str = Form(None),
    db: Session = Depends(get_session)
):
    return await create_product_internal(request, name, price, stock, ProductType.WESTERN, image, description, db)

@product_router.post("/formal/", response_model=ProductSchema)
async def create_formal_product(
    request: Request,
    name: str = Form(...),
    price: float = Form(...),
    stock: int = Form(...),
    image: UploadFile = File(...),
    description: str = Form(None),
    db: Session = Depends(get_session)
):
    return await create_product_internal(request, name, price, stock, ProductType.FORMALS, image, description, db)

@product_router.post("/fancy_formal/", response_model=ProductSchema)
async def create_fancy_formal_product(
    request: Request,
    name: str = Form(...),
    price: float = Form(...),
    stock: int = Form(...),
    image: UploadFile = File(...),
    description: str = Form(None),
    db: Session = Depends(get_session)
):
    return await create_product_internal(request, name, price, stock, ProductType.FANCY_FORMAL, image, description, db)

@product_router.post("/outing/", response_model=ProductSchema)
async def create_outing_product(
    request: Request,
    name: str = Form(...),
    price: float = Form(...),
    stock: int = Form(...),
    image: UploadFile = File(...),
    description: str = Form(None),
    db: Session = Depends(get_session)
):
    return await create_product_internal(request, name, price, stock, ProductType.OUTING, image, description, db)

# GET all products

@product_router.get("/all_products", response_model=List[ProductSchema])
async def list_products(request: Request, db: Session = Depends(get_session)):
    products = db.query(Product).all()
    base_url = f"http://{request.headers['host']}/static/"
    
    for product in products:
        if product.photo and not product.photo.startswith("http"):
            product.photo = base_url + os.path.basename(product.photo)    
    return products


@product_router.get("/api/v1/product/{product_id}", response_model=ProductSchema)
async def get_product(product_id: UUID, request: Request, db: Session = Depends(get_session)):
    # Fetch the product from the database using the correct ID variable
    product = db.query(Product).filter(Product.id == product_id).first()  # Use product_id instead of id
    
    if product:
        # Ensure the photo URL is absolute
        if product.photo and not product.photo.startswith("http"):
            product.photo = f"http://{request.headers['host']}/static/{os.path.basename(product.photo)}"
        return product
    raise HTTPException(status_code=404, detail="Product not found")



# DELETE product by ID
@product_router.delete("/{id}", response_model=dict)
def delete_product(id: UUID, db: Session = Depends(get_session)):
    product = db.query(Product).filter(Product.id == id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(product)
    db.commit()
    return {"detail": "Product deleted"}

# UPDATE product by ID
@product_router.put("/{product_id}", response_model=ProductSchema)
async def update_product(
    product_id: UUID,
    product_update: ProductUpdate,
    db: Session = Depends(get_session)
):
    try:
        logger.info(f"Updating product {product_id} with data: {product_update.dict()}")
        
        product = db.query(Product).filter(Product.id == product_id).first()

        if not product:
            logger.error(f"Product with ID {product_id} not found.")
            raise HTTPException(status_code=404, detail="Product not found")

        for key, value in product_update.dict(exclude_unset=True).items():
            if key == "photo":
                try:
                    PhotoUrlModel(photo=value)  # Validate URL format
                except ValidationError as e:
                    logger.error(f"Invalid photo URL format: {e}")
                    raise HTTPException(status_code=422, detail="Invalid photo URL format")
            
            setattr(product, key, value)

        db.commit()
        db.refresh(product)

        logger.info(f"Product with ID {product_id} updated successfully.")
        return product

    except Exception as e:
        db.rollback()
        logger.error(f"Error updating product with ID {product_id}: {e}")
        logger.error(traceback.format_exc())
        raise HTTPException(status_code=500, detail="Error updating product")

@product_router.get("/image/{product_id}")
async def get_image(product_id: UUID, db: Session = Depends(get_session)):
    product = db.query(Product).filter(Product.id == product_id).first()
    
    if not product or not product.photo:
        raise HTTPException(status_code=404, detail="Image not found")
    
    image_name = os.path.basename(product.photo)
    image_path = os.path.join(IMAGE_UPLOAD_DIR, image_name)
    
    if not os.path.exists(image_path):
        raise HTTPException(status_code=404, detail="Image not found")
    
    return FileResponse(image_path)