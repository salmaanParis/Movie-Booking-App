// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http:movie-booking-app-delta.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

//baseURL: 'http:movie-booking-app-delta.vercel.app',

//baseURL: 'http://localhost:3000/api',