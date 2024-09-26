// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movie-booking-app-delta.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

