from logging import config
from sqlalchemy import create_engine
from sqlalchemy.engine import Engine
from sqlalchemy.orm import Session
from sqlalchemy.ext.declarative import declarative_base
from nivemart.config import config


Base = declarative_base()

engine: Engine

def init_engine():
    global engine
    engine = create_engine(config.sqlalchemy_url)

def dispose_engine():
    global engine
    engine.dispose()

def get_session():
    global engine
    with Session(engine) as session:
        yield session
