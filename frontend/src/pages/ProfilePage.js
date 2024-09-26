import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ProfilePage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showReview, setShowReview] = useState({}); // To manage review visibility for each booking

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await api.get('/bookings');
        setBookings(response.data.data);
      } catch (err) {
        setError('Failed to fetch bookings.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    try {
      await api.delete(`/bookings/${bookingId}`);
      setBookings(bookings.filter(booking => booking._id !== bookingId));
    } catch (err) {
      console.error('Failed to cancel booking:', err);
    }
  };

  const handleReview = (bookingId) => {
    // Toggle review visibility
    setShowReview(prevState => ({
      ...prevState,
      [bookingId]: !prevState[bookingId],
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="profile-page">
      <h1>Your Bookings</h1>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id} className="booking-item">
              <h2>Movie: {booking.movie}</h2>
              <p>Seat Number: {booking.seatNumber}</p>
              <p>Total Amount: ${booking.totalAmount}</p>
              <p>Time Slot: {booking.timeSlot}</p>
              <p>Email: {booking.email}</p>
              <button onClick={() => handleCancel(booking._id)}>Cancel Ticket</button>
              <button onClick={() => handleReview(booking._id)}>Add Review</button>

              {showReview[booking._id] && (
                <div className="review-section">
                  <textarea placeholder="Write your review here..." className="review-textarea"></textarea>
                  <button className="submit-review">Submit Review</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
      
      {/* Internal CSS */}
      <style jsx="true">{`
        .profile-page {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .booking-item {
          border: 1px solid #ccc;
          padding: 15px;
          margin: 10px 0;
          border-radius: 8px;
        }

        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
          margin-right: 10px;
        }

        button:hover {
          background-color: #0056b3;
        }

        .review-section {
          margin-top: 15px;
        }

        .review-textarea {
          width: 100%;
          height: 100px;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .submit-review {
          background-color: #28a745;
        }

        .submit-review:hover {
          background-color: #218838;
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;


