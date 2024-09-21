import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FavoriteMovies = () => {
  // Dummy data for Favorite Movies
  const [movies, setMovies] = useState([
    { id: 1, title: 'Movie X', description: 'One of your favorite movies', imgSrc: 'image2.jpg' },
    { id: 2, title: 'Movie Y', description: 'Another favorite of yours', imgSrc: 'image2.jpg' },
  ]);

  const handleRemove = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <section className="favorite-movies">
      <h2>Favorite Movies</h2>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.imgSrc} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <button onClick={() => handleRemove(movie.id)} className="remove-button">Remove</button>
            </div>
          ))
        ) : (
          <p>No favorite movies.</p>
        )}
      </div>
      <Link to="/">Back to Home</Link>
      <style>
        {`
          .favorite-movies {
            padding: 20px;
            background-color: #1c1c1c;
            color: white;
          }

          .movies-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }

          .movie-card {
            background: #333;
            border-radius: 8px;
            padding: 10px;
            text-align: center;
            width: 200px;
            position: relative;
          }

          .movie-card img {
            width: 100%;
            height: auto;
            border-radius: 8px;
          }

          .movie-card h3 {
            margin: 10px 0 5px;
          }

          .movie-card p {
            font-size: 14px;
            color: #ccc;
          }

          .remove-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #ff5722;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 5px 10px;
            cursor: pointer;
            transition: background 0.3s;
          }

          .remove-button:hover {
            background: #e64a19;
          }

          a {
            display: inline-block;
            margin-top: 20px;
            color: #ff5722;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </section>
  );
};

export default FavoriteMovies;
