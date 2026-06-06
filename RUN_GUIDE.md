# Nive-Mart Run Guide

This guide explains how to set up, configure, and run the **Nive-Mart** application (both backend and frontend).

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:
1. **Python** (version 3.12 or higher)
2. **Node.js** (version 18 or higher) and **npm**
3. **Docker** (optional, but recommended for running PostgreSQL) or a local **PostgreSQL** installation

---

## 1. Backend Setup & Configuration

### Option A: Standard Virtual Environment & `pip` (Recommended)

Since `poetry` is not installed on your system, you can use Python's built-in virtual environment manager (`venv`) along with `pip`:

1. **Open PowerShell/Terminal** in the root `NiveMart` directory.
2. **Create a virtual environment**:
   ```powershell
   python -m venv .venv
   ```
3. **Activate the virtual environment**:
   ```powershell
   .venv\Scripts\activate
   ```
4. **Install the dependencies**:
   ```powershell
   pip install -r requirements.txt
   ```
5. **Run migrations**:
   ```powershell
   alembic upgrade head
   ```
6. **Start the server**:
   ```powershell
   uvicorn nivemart:app --reload
   ```

---

### Option B: Installing Poetry

If you prefer to use `poetry`, you can install it globally via `pip` first, then run the project:

1. **Install Poetry**:
   ```powershell
   pip install poetry
   ```
2. **Install project dependencies**:
   ```powershell
   poetry install
   ```
3. **Run migrations**:
   ```powershell
   poetry run alembic upgrade head
   ```
4. **Start the server**:
   ```powershell
   poetry run uvicorn nivemart:app --reload
   ```

---

## 2. PostgreSQL Database Setup

The backend connects to a database at `localhost:5434`. Make sure your database is running before running migrations or starting the app.

If you have **Docker** installed, you can start a PostgreSQL container using:
```powershell
docker run --name nivemart-db -p 5434:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_DB=nivemart -d postgres
```

---

## 3. Frontend Setup & Configuration

1. **Navigate to the frontend folder**:
   ```powershell
   cd nivemart-ui
   ```
2. **Install Node dependencies**:
   ```powershell
   npm install
   ```
3. **Start the Vite development server**:
   ```powershell
   npm run dev
   ```
The frontend will be running at `http://localhost:5173`.
