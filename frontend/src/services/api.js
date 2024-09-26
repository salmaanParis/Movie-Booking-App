// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movie-booking-app-taupe.vercel.app/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

