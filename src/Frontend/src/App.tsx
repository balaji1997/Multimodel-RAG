// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/login.tsx';
import ForgetPassword from './pages/forgetpassword.tsx';
import SignupPage from './pages/signup.tsx';
import HomePage from './pages/HomePage.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div> {/* Added a wrapping div for styling if needed */}
        
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;