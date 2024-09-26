import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const MovieListing = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/users/movies');
        setMovies(response?.data?.movies);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="movie-listing">
      <div className="content">
        {movies?.map((item) => (
          <div key={item?._id} className="movie-card" onClick={() => handleMovieClick(item?._id)}>
            <img src={item?.image} alt="movie poster" className="movie-image" />
            <p className="movie-title">{item?.name}</p>
            <p className="movie-category">Category: {item?.category}</p>
            <p className="movie-languages">Languages: {item?.languages.join(', ')}</p>
          </div>
        ))}
      </div>
      <style>
        {`
          .movie-listing {
            font-family: Arial, sans-serif;
            padding: 50px;
            max-width: 1200px;
            margin: auto;
            color: #333;
            box-sizing: border-box;
          }

          .content {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            margin-top: 40px; /* Increased top margin */
          }

          .movie-card {
            cursor: pointer;
            transition: transform 0.2s;
            text-align: center;
          }

          .movie-card:hover {
            transform: scale(1.05);
          }

          .movie-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .movie-title {
            margin-top: 10px;
            font-size: 1rem;
            font-weight: bold;
          }

          .movie-category, .movie-languages {
            font-size: 0.9rem;
            color: #666;
            margin-top: 5px;
          }

          @media (max-width: 1200px) {
            .content {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 768px) {
            .content {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 480px) {
            .content {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MovieListing;



