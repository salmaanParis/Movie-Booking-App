import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const MovieListing = () => {
  const navigate = useNavigate();

  // Full list of movies (added more movies here)
  const sections = [
    { 
      title: "New Movies", 
      items: [
        { name: "Movie 1", category: "UA", languages: ["Malayalam", "Hindi"] },
        { name: "Movie 2", category: "A", languages: ["Tamil", "Telugu"] },
        { name: "Movie 3", category: "PG", languages: ["English", "Hindi"] },
        { name: "Movie 4", category: "UA", languages: ["Malayalam", "English"] },
        { name: "Movie 5", category: "A", languages: ["Tamil", "Hindi"] },
        { name: "Movie 6", category: "PG", languages: ["English", "Malayalam"] },
        { name: "Movie 7", category: "UA", languages: ["Hindi", "English"] },
        { name: "Movie 8", category: "A", languages: ["Tamil", "Telugu"] },
        { name: "Movie 9", category: "PG", languages: ["English", "Hindi"] },
        { name: "Movie 10", category: "UA", languages: ["Malayalam", "English"] },
        { name: "Movie 11", category: "A", languages: ["Tamil", "Hindi"] },
        { name: "Movie 12", category: "PG", languages: ["English", "Malayalam"] },
        { name: "Movie 13", category: "UA", languages: ["Malayalam", "English"] },
        { name: "Movie 14", category: "A", languages: ["Tamil", "Hindi"] },
        { name: "Movie 15", category: "PG", languages: ["English", "Malayalam"] }
      ]
    }
  ];


  const [movies,setMovies]=useState([])

  const [visibleMovies, setVisibleMovies] = useState(12); // Initially display 4 movies

  const handleMovieClick = () => {
    navigate('/movie');
  };

  const loadMoreMovies = () => {
    setVisibleMovies((prev) => prev + 4); // Increase visible movies by 4
  };


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get('/users/movies'); 
        setMovies(response?.data?.movies)
        
      } catch (err) {
        console.log("Error",err)
      }
    };

    fetchMovies();
  }, []);

  console.log("Movies",movies)
  


  return (
    <div className="movie-listing">
      <div className="content">
        {movies?.map((item) => (
          <div key={item?._id} className="section">
            <h2>{item?.name}</h2>
            <div className="card-container">
                <div
                  key={''}
                  className="movie-card"
                  onClick={handleMovieClick}
                >
                  <img src={item?.image} alt={"dfgdfgd"} className="movie-image" />
                  <p className="movie-title">{item?.name}</p>
                  <p className="movie-title">Category: {item?.category}</p>
                  <p className="movie-title">Langauges: {item?.languages[0]}</p>
                </div>
            
            </div>
           
              <button className="load-more-button" onClick={loadMoreMovies}>
                Load More
              </button>
      
          </div>
        ))}
      </div>
      <style>
        {`
          .movie-listing {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 1200px;
            margin: auto;
            color: #333;
            box-sizing: border-box;
          }

          .content {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .section {
            margin-bottom: 20px;
          }

          .section h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
          }

          .movie-card {
            flex: 1 1 calc(25% - 15px);
            max-width: calc(25% - 15px);
            text-align: center;
            cursor: pointer;
            transition: transform 0.2s;
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
            margin-top: 5px;
            font-size: 1rem;
            font-weight: bold;
          }

          .movie-details {
            margin-top: 2px;
            font-size: 0.8rem;
            color: #666;
          }

         .load-more-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }

          .load-more-button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .load-more-button:hover {
            background-color: #0056b3;
          }

          @media (max-width: 1200px) {
            .movie-card {
              flex: 1 1 calc(33.33% - 15px);
              max-width: calc(33.33% - 15px);
            }
          }

          @media (max-width: 768px) {
            .movie-card {
              flex: 1 1 calc(50% - 15px);
              max-width: calc(50% - 15px);
            }
          }

          @media (max-width: 480px) {
            .movie-card {
              flex: 1 1 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MovieListing;



