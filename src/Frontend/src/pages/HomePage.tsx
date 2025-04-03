// pages/HomePage.tsx
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Embed Streamlit App in an iframe */}
      <iframe 
        src="http://localhost:8501"  // Change this to Streamlit's port
        width="100%" 
        height="800px"
        style={{ border: "none" }} 
        title="Chatbot UI"
      ></iframe>
    </div>
  );
};

export default HomePage;
