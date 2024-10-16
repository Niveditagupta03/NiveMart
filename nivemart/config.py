from pydantic_settings import BaseSettings


class Config(BaseSettings):
    oauth_client_id: str
    oauth_client_secret: str
    oauth_redirect_url: str
    sqlalchemy_url: str
    jwt_secret: str

    class Config:
        env_file = ".env"


config = Config()
print(config.sqlalchemy_url)

