from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from nivemart.auth.google import OAuthRequestBody
from nivemart.database import get_session
from nivemart.config import config
from nivemart.user.model import User
from . import auth_router
import requests
import logging
import jwt


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def exchange_code_for_token(code, client_id, client_secret, redirect_uri):
    token_url = "https://oauth2.googleapis.com/token"
    data = {
        "code": code,
        "client_id": client_id,
        "client_secret": client_secret,
        "redirect_uri": redirect_uri,
        "grant_type": "authorization_code",
    }
    response = requests.post(token_url, data=data)
    response.raise_for_status()
    return response.json()



@auth_router.post("/oauth")
def login(body: OAuthRequestBody, session: Session = Depends(get_session)):
    try:
        logger.info(f"Authorization code: {body.code}")
        logger.info(f"config: {config.model_dump()}")

        token_response = exchange_code_for_token(
            body.code,
            config.oauth_client_id,
            config.oauth_client_secret,
            config.oauth_redirect_url,
        )

        logger.info(f"Token response data: {token_response}")

        if "id_token" not in token_response:
            logger.error("id_token not found in the response")
            raise Exception("id_token not found in the response")

        user_info = jwt.decode(
            token_response["id_token"], options={"verify_signature": False}
        )

        logger.info(f"User info: {user_info}")

        user_email = user_info.get("email")
        user_name = user_info.get("name")
        profile_picture_url = user_info.get("picture", "")

        if not user_email or not user_name:
            logger.error("Missing email or name in user info")
            raise Exception("Missing email or name in user info")

        existing_user = session.query(User).filter(User.email == user_email).first()

        if existing_user:
            return jwt.encode(
                {
                    "id": str(existing_user.id),
                    "email": existing_user.email,
                    "name": existing_user.name,
                    "profile_picture_url": profile_picture_url,
                },
                config.jwt_secret,
            )
        else:
            new_user = User(email=user_email, name=user_name)
            session.add(new_user)
            session.commit()

            return jwt.encode(
                {
                    "id": str(new_user.id),
                    "email": new_user.email,
                    "name": new_user.name,
                    "profile_picture_url": profile_picture_url,
                },
                config.jwt_secret,
            )

    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error",
        )
