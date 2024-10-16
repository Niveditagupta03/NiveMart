from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from nivemart.database import init_engine, dispose_engine
from nivemart.routes import router

@asynccontextmanager
async def lifespan(_: FastAPI):
    init_engine()
    yield
    dispose_engine()

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(router)