// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Ensure this matches your backend server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

