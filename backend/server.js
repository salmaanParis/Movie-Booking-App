const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const morgan = require('morgan'); // Logging library

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(morgan('dev')); // Log HTTP requests to the console

// Routes
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/bookings', bookingRoutes); // Booking-related routes

app.get('/api/test', (req, res) => {
  res.send('server is working now>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'); // Respond with a test string
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Something broke!',
  });
});

// Start the server
const PORT = process.env.PORT || 3000; // Default to port 3000 if not specified
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Shutting down gracefully...');
  // Close database connections if any, then exit
  process.exit();
});
