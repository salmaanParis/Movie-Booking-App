import React, { useState } from 'react';
import Slider from 'react-slick';

const MovieCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  };

  // Sample movie data
  const movies = [
    { title: 'Movie 1', description: 'A great movie', genre: 'Action', rating: 'PG-13', year: '2023', imgSrc: 'image2.jpg' },
    { title: 'Movie 2', description: 'Another great movie', genre: 'Comedy', rating: 'PG', year: '2022', imgSrc: 'image2.jpg' },
    { title: 'Movie 3', description: 'An amazing movie', genre: 'Drama', rating: 'R', year: '2021', imgSrc: 'image2.jpg' },
    { title: 'Movie 4', description: 'A thrilling movie', genre: 'Horror', rating: 'PG-13', year: '2020', imgSrc: 'image2.jpg' },
    { title: 'Movie 5', description: 'A fantastic movie', genre: 'Sci-Fi', rating: 'PG', year: '2024', imgSrc: 'image2.jpg' },
    { title: 'Movie 6', description: 'A fun movie', genre: 'Animation', rating: 'G', year: '2023', imgSrc: 'image2.jpg' },
    { title: 'Movie 7', description: 'An epic movie', genre: 'Adventure', rating: 'PG-13', year: '2022', imgSrc: 'image2.jpg' },
    { title: 'Movie 8', description: 'A romantic movie', genre: 'Romance', rating: 'PG', year: '2021', imgSrc: 'image2.jpg' }
  ];

  return (
    <section className="movie-cards">
      <h2>Popular Movies</h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div
            key={index}
            className="card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={movie.imgSrc} alt={movie.title} />
            <div className={`popup ${hoveredIndex === index ? 'show' : ''}`}>
              <div className="popup-content">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
                <p><strong>Year:</strong> {movie.year}</p>
                <button className="popup-button">Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style>
        {`
          .movie-cards {
            padding: 20px;
            background-color: #f4f4f4;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

           body {
            background-color: #1c1c1c; /* Dark background for the body */
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .card {
            width: 220px;
            height: 450px;
            overflow: hidden;
            position: relative;
            border-radius: 12px;
            transition: transform 0.4s, box-shadow 0.4s;
            cursor: pointer;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            background: #fff;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          }

          .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-bottom: 4px solid #fff;
            transition: opacity 0.4s;
          }

          .card:hover img {
            opacity: 0.8;
          }

          .popup {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 20px;
            box-sizing: border-box;
            text-align: left;
            transform: translateY(100%);
            transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
            border-top: 3px solid #ff5722;
            border-radius: 0 0 12px 12px;
            opacity: 0;
          }

          .popup.show {
            transform: translateY(0);
            opacity: 1;
          }

          .popup-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }

          .popup-content h3 {
            margin: 0;
            font-size: 18px;
            font-weight: bold;
          }

          .popup-content p {
            margin: 5px 0;
            font-size: 14px;
          }

          .popup-button {
            margin-top: 10px;
            padding: 10px 20px;
            background: #ff5722;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s, transform 0.3s;
          }

          .popup-button:hover {
            background: #e64a19;
            transform: scale(1.05);
          }
        `}
      </style>
    </section>
  );
};

export default MovieCards;



