import axios from 'axios';

// Determine API URL based on environment
const getAPIURL = (): string => {
  // Development: local backend
  if (import.meta.env.DEV) {
    return import.meta.env.VITE_API_URL || 'http://localhost:8000';
  }

  // Production: use environment variable or Render backend
  return import.meta.env.VITE_API_URL || 'https://safemap-3wfm.onrender.com';
};

const API_URL = getAPIURL();

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export default api;
