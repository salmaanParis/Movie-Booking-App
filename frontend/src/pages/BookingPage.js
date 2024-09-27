import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../services/api'; // Use your Axios instance for API calls

const BookingPage = () => {
  const location = useLocation();
  const { movieName } = location.state || {}; // Retrieve movieName from state

  // Define seat status and their colors
  const seatStatuses = {
    available: { heading: "Available Seats", color: "#28a745" },
    fastFilling: { heading: "Fast Filling Seats", color: "#ffc107" },
    housefull: { heading: "Housefull Seats", color: "#dc3545" },
  };

  const [seats, setSeats] = useState(generateSeatStatus());
  const [selectedTime, setSelectedTime] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [seatNumbers, setSeatNumbers] = useState([]);
  const [bookingStatus, setBookingStatus] = useState('');
  const [totalAmount, setTotalAmount] = useState(ticketQuantity * 10);
  const [showSeats, setShowSeats] = useState(false);
  const [email, setEmail] = useState(''); // New email state
  const pricePerSeat = 10; // Price per seat

  // Function to generate seat status
  function generateSeatStatus() {
    return Array(50).fill('Available').map((_, index) => {
      if (index < 5) return 'Housefull'; // Example of Housefull seats
      if (index < 15) return 'Fast Filling'; // Example of Fast Filling seats
      return 'Available'; // Default to Available
    });
  }

  // Handle ticket quantity change
  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(value, 5)); // Ensure value is between 1 and 5
    setTicketQuantity(newQuantity);
    setTotalAmount(newQuantity * pricePerSeat);
  };

  const handleBookTicket = async (index) => {
    if (seats[index] === 'Available') {
        const updatedSeats = [...seats];
        updatedSeats[index] = 'Booked';
        setSeats(updatedSeats);
        const seatNum = index + 1; // Seat number is index + 1
        setSeatNumbers((prev) => [...prev, seatNum]);
        setBookingStatus('Processing your booking...');

        // Simulate loading
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Save the booking to the backend
        const bookingData = {
            email: email,
            seatNumber: seatNum, // Include seat number
            movie: movieName || 'Unknown Movie', // Include movie name
            timeSlot: selectedTime,
            totalAmount: ticketQuantity * pricePerSeat,
        };
        console.log(`Calculated Total Amount: ${totalAmount}`); // Debugging log
        console.log(bookingData); // Debugging log

        console.log('Sending email to:', email);
// console.log('Booking details:', bookingDetails);


        try {
            await api.post('/bookings', bookingData); // Use your Axios instance here
            setBookingStatus(`Ticket booked! Your seat number is ${seatNum}. An email confirmation has been sent to ${email}.`);
        } catch (error) {
            console.error('Failed to save booking', error.response ? error.response.data : error.message);
            setBookingStatus('Failed to save booking. Please try again later.');
        }
    } else if (seats[index] === 'Fast Filling') {
        setBookingStatus('This seat is fast filling. Try booking soon!');
    } else {
        setBookingStatus("Sorry, this seat is not available.");
    }
};


  // Handle confirm booking
  const handleConfirmBooking = () => {
    setShowSeats(true);
  };

  return (
    <div className="booking-page">
      <h1 className="page-title">Booking for: {movieName || 'Unknown Movie'}</h1>

      <div className="selection-container">
        <div className="time-slot">
          <h3>Select Time Slot</h3>
          <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="time-select">
            <option value="">--Select a Time--</option>
            {['12:00 PM', '3:00 PM', '6:00 PM'].map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="ticket-quantity">
          <h3>Select Ticket Quantity</h3>
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(ticketQuantity - 1)} disabled={ticketQuantity <= 1}>-</button>
            <span>{ticketQuantity}</span>
            <button onClick={() => handleQuantityChange(ticketQuantity + 1)} disabled={ticketQuantity >= 5}>+</button>
          </div>
          <p className="total-amount">Total Amount: ${totalAmount}</p>
        </div>

        <div className="email-input">
          <h3>Confirm Email</h3>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />
        </div>
      </div>

      <button onClick={handleConfirmBooking}>Show Seats</button>

      {showSeats && (
        <>
          <div className="status-section">
            {Object.keys(seatStatuses).map(status => (
              <h3 key={status} style={{ color: seatStatuses[status].color }}>{seatStatuses[status].heading}</h3>
            ))}
          </div>

          <p>Seats Availability</p>
          <div className="screen">SCREEN</div>
          <div className="seat-grid">
            {seats.map((seat, index) => (
              <div
                key={index}
                className={`seat ${seat.toLowerCase()}`}
                style={{ color: seatStatuses[seat.replace(' ', '').toLowerCase()]?.color || '#333' }}
                onClick={() => handleBookTicket(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </>
      )}

      <p className="confirmation">{bookingStatus}</p>

      <div className="payment-section">
        {bookingStatus.includes('Ticket booked!') && (
          <div>
            <h3>Payment Options</h3>
            <button onClick={() => alert('Payment Successful!')}>Pay Now</button>
          </div>
        )}
      </div>

      <style>
        {`
          .booking-page {
            font-family: 'Arial', sans-serif;
            padding: 120px;
            max-width: 800px;
            margin: auto;
            background-color: #f8f9fa;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }

          .page-title {
            font-size: 2rem;
            margin-bottom: 20px;
            text-align: center;
          }

          .selection-container {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
            flex-direction: column;
          }

          .time-slot, .ticket-quantity, .email-input {
            padding: 0 10px;
            margin-bottom: 15px;
          }

          .seat-grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            grid-gap: 10px;
            margin: 20px 0;
          }

          .seat {
            padding: 10px;
            border: 1px solid #ccc;
            text-align: center;
            cursor: pointer;
            border-radius: 5px;
          }

          .seat.available { background-color: #28a745; color: white; }
          .seat.fastfilling { background-color: #ffc107; }
          .seat.housefull { background-color: #dc3545; color: white; }

          .confirmation {
            margin-top: 20px;
            font-size: 1.2rem;
            text-align: center;
          }

          .payment-section {
            text-align: center;
          }

          .screen {
            margin: 20px 0;
            text-align: center;
            background-color: #333;
            color: white;
            padding: 5px;
            font-size: 1.2rem;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default BookingPage;







