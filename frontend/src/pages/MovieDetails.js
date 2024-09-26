import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import api from '../services/api';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/users/movies/${id}`);
        setMovie(response?.data?.movie);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const handleBookTickets = () => {
    navigate('/booking', { state: { movieName: movie?.name } });
  };
  
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie?.name}</h1>
      <img src={movie?.image} alt="movie poster" className="movie-image" />
      <p><strong>Name:</strong> {movie?.name}</p>
      <p><strong>Category:</strong> {movie?.category}</p>
      <p><strong>Languages:</strong> {movie?.languages.join(', ')}</p>
      <p><strong>Cast:</strong> {movie?.cast}</p>
      <p><strong>Description:</strong> {movie?.description}</p>
      
      <button className="book-tickets-button" onClick={handleBookTickets}>
        Book Tickets
      </button>

      <style>
        {`
          .movie-details {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 800px;
            margin: auto;
            color: #333;
            box-sizing: border-box;
          }

          .movie-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
          }

          h1 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          p {
            font-size: 1.2rem;
            margin-bottom: 10px;
          }

          .book-tickets-button {
            padding: 10px 20px;
            font-size: 1.2rem;
            color: white;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .book-tickets-button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default MovieDetails;





