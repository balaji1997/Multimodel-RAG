from fastapi import FastAPI
from database import engine, Base
from routers import route

# Create the database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update this to match your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include authentication routes
app.include_router(route.router)

@app.get("/")
def root():
    return {"message": "Welcome to the FastAPI backend!"}
