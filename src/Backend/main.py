from fastapi import FastAPI
from database import engine, Base
from routers import route
from chatbot import router as chatbot_router  # Import chatbot router

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

# Include chatbot routes
app.include_router(chatbot_router, prefix="/chatbot")

@app.get("/")
def root():
    return {"message": "Welcome to the FastAPI backend with Chatbot integration!"}
