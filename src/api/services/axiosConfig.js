// src/api/config/axiosConfig.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;