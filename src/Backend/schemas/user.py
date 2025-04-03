from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserOut(BaseModel):
    id: int  # Add id to the output schema
    email: EmailStr
    
    class Config:
        from_attributes = True  # ✅ Updated for Pydantic v2
