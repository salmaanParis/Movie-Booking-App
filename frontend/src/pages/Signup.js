import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../services/api';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Make the signup request to the backend
      const response = await api.post('/users/signup', { name, email, password });

      // Assuming the backend sends user info
      if (response.status === 201) {
        // Redirect to the "/login" page after successful signup
        navigate('/login');
      } else {
        setError('Failed to register. Please try again.');
      }
    } catch (err) {
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <img src="image1.jpg" alt="Background" className="background-image" />
      <div className="auth-box">
        <h2>Sign Up</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error */}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <div className="terms">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />
              <span className="checkmark"></span>
            </label>
            <span className="terms-text">Agree to our terms and conditions</span>
          </div>
          <button type="submit" disabled={!agreeTerms}>Sign Up</button>
          <p>Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
      <style>
        {`
          .auth-container {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }

          .background-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(50%);
          }

          .auth-box {
            position: relative;
            background: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            text-align: center;
          }

          .auth-box h2 {
            margin-top: 0;
          }

          .auth-box label {
            display: block;
            margin-bottom: 10px;
          }

          .auth-box input {
            width: 90%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          .auth-box button {
            background: #FF4D4D;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s;
          }

          .auth-box button:disabled {
            background: gray;
            cursor: not-allowed;
          }

          .auth-box button:hover:enabled {
            background: #FF7E7E;
          }

          .auth-box p {
            margin-top: 10px;
          }

          .auth-box a {
            color: #FF4D4D;
          }

          .auth-box a:hover {
            text-decoration: underline;
          }

          .terms {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
          }

          .terms .terms-text {
            font-size: 15px;
            margin-left: 22px; /* Adding space between the checkbox and the text */
            margin-top: 4px;
          }

          .checkbox-container {
            position: relative;
            display: inline-block;
          }

          .checkbox-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 16px;
            width: 17px;
            background-color: white;
            border-radius: 3px;
            margin-right: 5px; /* Adding space between the checkbox and the text */
          }

          .checkbox-container input:checked ~ .checkmark {
            background-color: #2196F3; /* Change this to your desired color */
          }
          
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }

          .checkbox-container input:checked ~ .checkmark:after {
            display: block;
          }

          .checkbox-container .checkmark:after {
            left: 6px;
            top: 2px;
            width: 5px;
            height: 9px;
            border: solid white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
          }
        `}
      </style>
    </div>
  );
};

export default Signup;





