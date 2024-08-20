import axios from 'axios';

// Create an Axios instance with default settings
const API = axios.create({
  baseURL: "http://localhost:8000/", // Base URL of the Django backend
  withCredentials: false, // Whether to send cookies with requests, set to true if you need cookies
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default API;
