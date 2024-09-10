set dotenv-load

dev:
    uvicorn nivemart:app --reload

generate_migration MESSAGE:
    poetry run alembic revision --autogenerate -m "{{ MESSAGE }}"
  
migrate:
    poetry run alembic upgrade head