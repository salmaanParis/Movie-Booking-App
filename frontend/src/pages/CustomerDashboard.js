import React, { useState } from 'react';

// Define styles for a more professional UI
const styles = {
  dashboard: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
    marginLeft: '10px',
  },
  buttonCancel: {
    backgroundColor: '#ff6f61',
    color: 'white',
  },
  buttonSubmit: {
    backgroundColor: '#4caf50',
    color: 'white',
  },
  buttonLogout: {
    backgroundColor: '#f44336',
    color: 'white',
    width: '100%',
    padding: '12px 0',
    fontSize: '16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonLogoutHover: {
    backgroundColor: '#c62828',
  },
  textarea: {
    width: '100%',
    height: '120px',
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  select: {
    marginLeft: '10px',
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  reviews: {
    marginTop: '20px',
  },
  reviewItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

function CustomerDashboard() {
  const [tickets, setTickets] = useState([
    { id: 1, movie: 'Movie A', date: '2024-09-01' },
    { id: 2, movie: 'Movie B', date: '2024-09-02' },
  ]);
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState('');
  const [currentRating, setCurrentRating] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const handleCancel = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { review: currentReview, rating: currentRating }]);
    setCurrentReview('');
    setCurrentRating(1);
  };

  const handleLogout = () => {
    alert('Logged out!');
    // Implement actual logout logic here
  };

  return (
    <div style={styles.dashboard}>
      <header style={styles.header}>
        <h1>Customer Dashboard</h1>
      </header>
      
      <div style={styles.section}>
        <h2>Booked Tickets</h2>
        <ul style={{ padding: '0', listStyleType: 'none' }}>
          {tickets.map(ticket => (
            <li key={ticket.id} style={{ marginBottom: '10px' }}>
              {ticket.movie} - {ticket.date}
              <button
                style={{ ...styles.button, ...styles.buttonCancel }}
                onClick={() => handleCancel(ticket.id)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.section}>
        <h2>Write a Review</h2>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            style={styles.textarea}
            value={currentReview}
            onChange={(e) => setCurrentReview(e.target.value)}
            placeholder="Write your review here..."
            required
          />
          <br />
          <label>
            Rating:
            <select
              style={styles.select}
              value={currentRating}
              onChange={(e) => setCurrentRating(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </label>
          <br />
          <button style={{ ...styles.button, ...styles.buttonSubmit }} type="submit">Submit Review</button>
        </form>
        <div style={styles.reviews}>
          <h3>Reviews</h3>
          <ul style={{ padding: '0', listStyleType: 'none' }}>
            {reviews.map((review, index) => (
              <li key={index} style={styles.reviewItem}>
                {review.review} - {review.rating} stars
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        style={isHovering ? { ...styles.buttonLogout, ...styles.buttonLogoutHover } : styles.buttonLogout}
        onClick={handleLogout}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        Logout
      </button>
    </div>
  );
}

export default CustomerDashboard;
