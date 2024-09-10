from pydantic import BaseModel


class OAuthRequestBody (BaseModel):
    code:str
