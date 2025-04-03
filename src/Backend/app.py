import streamlit as st
import requests

# FastAPI backend URL
BACKEND_URL = "http://127.0.0.1:8000/chatbot"

st.title("Open-Source RAG Knowledge Assistant")

st.sidebar.header("Upload Documents")
uploaded_file = st.sidebar.file_uploader("Upload a file", type=["txt", "pdf", "docx"])

if uploaded_file:
    files = {"file": uploaded_file}
    response = requests.post(f"{BACKEND_URL}/upload/", files=files)
    if response.status_code == 200:
        st.sidebar.success("File processed successfully!")
    else:
        st.sidebar.error("File processing failed!")

user_input = st.text_input("Ask a question:")
if st.button("Submit"):
    if user_input.strip():
        response = requests.post(f"{BACKEND_URL}/query/", data={"user_input": user_input})
        if response.status_code == 200:
            st.write("Response:", response.json().get("response", "No response"))
        else:
            st.error("Failed to get response from chatbot.")
    else:
        st.warning("Please enter a question.")
