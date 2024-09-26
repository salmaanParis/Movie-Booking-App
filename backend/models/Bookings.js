const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    seatNumber: {
        type: Number,
        required: true,
    },
    movie: {
        type: String,
        required: true,
    },
    timeSlot: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true, // Ensure this is set to true
    },
});

module.exports = mongoose.model('Booking', bookingSchema);
