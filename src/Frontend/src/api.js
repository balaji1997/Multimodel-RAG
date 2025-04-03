import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/auth'; // Adjust for your backend URL

// Signup function
export const signup = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Signup error:', error.response?.data || error.message);
        throw error;
    }
};

// Login function
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        throw error;
    }
};
