import React, { useState } from 'react';

// Simulated function to send an email
const sendEmailConfirmation = (seatNumber) => {
  console.log(`Sending email confirmation for seat number ${seatNumber}`);
  // Simulate email sending
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const BookingPage = () => {
  // Generate seat availability status: Available, Fast Filling, Housefull
  const generateSeatStatus = () => {
    return Array(50).fill('Available').map((status, index) => {
      if (index < 5) return 'Housefull'; // Example of Housefull seats
      if (index < 15) return 'Fast Filling'; // Example of Fast Filling seats
      return 'Available'; // Default to Available
    });
  };

  const [seats, setSeats] = useState(generateSeatStatus());
  const [seatNumber, setSeatNumber] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');

  const handleBookTicket = async (index) => {
    if (seats[index] === 'Available') {
      const updatedSeats = [...seats];
      updatedSeats[index] = 'Booked';
      setSeats(updatedSeats);
      const seatNum = index + 1;
      setSeatNumber(seatNum);
      setBookingStatus('Ticket booked! Your seat number is ' + seatNum);

      // Simulate email confirmation
      await sendEmailConfirmation(seatNum);
      setBookingStatus('Ticket booked! Your seat number is ' + seatNum + '. An email confirmation has been sent.');
    } else if (seats[index] === 'Fast Filling') {
      setBookingStatus('This seat is fast filling. Try booking soon!');
    } else {
      setBookingStatus("Sorry, this seat is not available.");
    }
  };

  return (
    <div className="booking-page">
      <h1>Movie Name: "The Great Adventure"</h1>
      <h2>Price per Seat: $10</h2>
      <p>Seats Availability</p>
      <div className="screen">SCREEN</div>
      <div className="seat-grid">
        {seats.map((seat, index) => (
          <div
            key={index}
            className={`seat ${seat.toLowerCase()}`}
            onClick={() => handleBookTicket(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <p className="confirmation">{bookingStatus}</p>
      <style>
        {`
          .booking-page {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 600px;
            margin: auto;
            color: #333;
            box-sizing: border-box;
          }
          .screen {
            text-align: center;
            background-color: #333;
            color: white;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            font-weight: bold;
          }
          .seat-grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            gap: 10px;
            margin-top: 20px;
          }
          .seat {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .seat.available:hover {
            background-color: #d4edda;
          }
          .seat.fast-filling {
            background-color: #ffeeba;
          }
          .seat.fast-filling:hover {
            background-color: #fdfd96;
          }
          .seat.housefull {
            background-color: #f8d7da;
            cursor: not-allowed;
          }
          .seat.housefull:hover {
            background-color: #f8d7da;
          }
          .seat.booked {
            background-color: #f8d7da;
            cursor: not-allowed;
          }
          .seat.booked:hover {
            background-color: #f8d7da;
          }
          .confirmation {
            margin-top: 20px;
            font-weight: bold;
          }
          .seat-grid > div {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default BookingPage;


