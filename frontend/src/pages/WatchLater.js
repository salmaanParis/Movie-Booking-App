import React, { useState } from 'react';

const WatchLater = () => {
  // Dummy data for Watch Later
  const initialMovies = [
    { id: 1, title: 'Movie A', description: 'A movie you want to watch later', imgSrc: 'image2.jpg' },
    { id: 2, title: 'Movie B', description: 'Another movie you might like', imgSrc: 'image2.jpg' },
  ];

  const [movies, setMovies] = useState(initialMovies);

  const handleRemove = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <section className="watch-later">
      <h2>Watch Later</h2>
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
          <p>No movies in Watch Later.</p>
        )}
      </div>
      <style>
        {`
          .watch-later {
            padding: 20px;
            background-color: #1c1c1c;
            color: white;
          }

          .movies-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .movie-card {
            background: #333;
            border-radius: 8px;
            padding: 10px;
            text-align: center;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .movie-card img {
            width: 100px;
            height: auto;
            border-radius: 8px;
          }

          .movie-card h3 {
            margin: 0;
            font-size: 16px;
            color: #fff;
            flex-grow: 1;
          }

          .movie-card p {
            font-size: 14px;
            color: #ccc;
          }

          .remove-button {
            background: #ff5722;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px;
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

export default WatchLater;
