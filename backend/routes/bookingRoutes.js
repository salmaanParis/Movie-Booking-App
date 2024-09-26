const express = require('express');
const router = express.Router();
const Bookings = require('../models/Bookings');
const { sendConfirmationEmail } = require('../mailer'); // Import the sendConfirmationEmail function

router.post('/', async (req, res) => {
  try {
    const { seatNumber, movie, totalAmount, email, timeSlot } = req.body; // Ensure email and timeSlot are included

    // Validate required fields
    if (!seatNumber || !movie || !totalAmount || !email || !timeSlot) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required.',
      });
    }

    // Define a GET route for fetching bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Bookings.find(); // Fetch all bookings from the database
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

    // Create a new booking instance
    const newBooking = new Bookings({
      email,
      seatNumber,
      movie,
      timeSlot, // Add timeSlot if it's provided in the request
      totalAmount, // Ensure this is passed
    });

    // Save the booking to the database
    const savedBooking = await newBooking.save();

    // Send confirmation email after saving the booking
    try {
      await sendConfirmationEmail(email, {
        seatNumber,
        movie,
        totalAmount,
        timeSlot,
      });
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      // You may choose to log this or handle it according to your needs
    }

    // Respond with the saved booking data
    res.status(201).json({
      success: true,
      data: savedBooking,
    });
  } catch (error) {
    // Handle any errors that occur during the booking process
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});


// In bookingRoutes.js
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Bookings.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.json({ success: true, message: 'Booking canceled successfully' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});




module.exports = router;

