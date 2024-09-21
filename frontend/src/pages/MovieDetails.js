import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const MovieDetails = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [comments, setComments] = useState([]);
  
  const navigate = useNavigate(); // Initialize navigate

  const movie = {
    title: "Sample Movie",
    description: "A short description of the movie goes here.",
    video: "samplev.mp4", // Path to the video file
    thumbnail: "image1.jpg", // Path to the thumbnail image
    releaseDate: "2024-08-01",
    rating: "8.5",
    genre: "Action, Adventure",
    director: "Jane Doe",
    cast: [
      { name: "Actor 1", pic: "actor1.jpg" },
      { name: "Actor 2", pic: "actor2.jpg" },
    ],
    reviews: [
      { reviewer: "Reviewer 1", comment: "Great movie!" },
      { reviewer: "Reviewer 2", comment: "I enjoyed it." },
    ],
    similarMovies: [
      { title: "Similar Movie 1", thumbnail: "image2.jpg" },
      { title: "Similar Movie 2", thumbnail: "image3.jpg" },
    ],
  };

  const handleRatingChange = (event) => {
    setUserRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, { reviewer: "User", comment: userComment }]);
    setUserComment('');
  };

  const handleMovieClick = () => {
    // Navigate to the booking page
    navigate('/booking', { state: { movie } }); // Pass the movie object to the booking page
  };

  return (
    <div className="movie-details">
      <div className="video-section">
        {!isVideoPlaying ? (
          <div className="thumbnail-wrapper" onClick={() => setIsVideoPlaying(true)}>
            <img src={movie.thumbnail} alt="Thumbnail" className="movie-thumbnail" />
            <button className="play-button">▶️</button>
          </div>
        ) : (
          <video controls autoPlay className="movie-video">
            <source src={movie.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="video-info">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <div className="actions">
            <button onClick={handleMovieClick}>Book Ticket</button> {/* Redirects to book ticket */}
            <button>Play Now</button>
            <button>Watch Later</button>
            <button>Favorites</button>
            <button>Report</button>
          </div>
        </div>
      </div>
      <div className="details-container">
        <div className="description-section">
          <h2>Description</h2>
          <p>{movie.description}</p>
          <div className="cast">
            {movie.cast.map((actor, index) => (
              <div key={index} className="cast-member">
                <img src={actor.pic} alt={actor.name} />
                <p>{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="info-section">
          <h2>Information</h2>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Director:</strong> {movie.director}</p>
        </div>
      </div>
      <div className="reviews-section">
        <h2>Reviews</h2>
        <div className="reviews">
          {movie.reviews.concat(comments).map((review, index) => (
            <div key={index} className="review">
              <p><strong>{review.reviewer}:</strong> {review.comment}</p>
            </div>
          ))}
        </div>
        <div className="user-review">
          <h3>Leave a Review</h3>
          <input
            type="number"
            value={userRating}
            onChange={handleRatingChange}
            min="1"
            max="10"
            placeholder="Rate (1-10)"
          />
          <textarea
            value={userComment}
            onChange={handleCommentChange}
            placeholder="Write your comment here"
          ></textarea>
          <button onClick={handleCommentSubmit}>Submit</button>
        </div>
      </div>
      <div className="similar-movies-section">
        <h2>Similar Movies</h2>
        <div className="similar-movies-carousel">
          {movie.similarMovies.map((similarMovie, index) => (
            <div key={index} className="similar-movie">
              <img src={similarMovie.thumbnail} alt={similarMovie.title} />
              <p>{similarMovie.title}</p>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .movie-details {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 1200px;
            margin: auto;
            color: #333;
            box-sizing: border-box;
          }
          .movie-details {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 1200px;
            margin: auto;
            color: #333;
            box-sizing: border-box;
            
          }

          .video-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
          }

          .thumbnail-wrapper {
            position: relative;
            cursor: pointer;
          }

          .movie-thumbnail {
            width: 100%;
            max-width: 800px;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            margin-top:60px;
          }

          .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
          }

          .movie-video {
            width: 100%;
            max-width: 800px;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
          }

          .video-info {
            text-align: center;
          }

          .video-info h1 {
            font-size: 2rem;
            margin-bottom: 10px;
          }

          .video-info p {
            font-size: 1.2rem;
            margin-bottom: 20px;
          }

          .actions button {
            display: inline-block;
            margin: 10px 5px;
            padding: 10px 15px;
            font-size: 1rem;
            cursor: pointer;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          .actions button:hover {
            background-color: #0056b3;
          }

          .details-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 20px;
          }

          .description-section,
          .info-section {
            flex: 1;
            min-width: 300px;
          }

          .cast {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
          }

          .cast-member {
            text-align: center;
            flex: 1 1 150px;
          }

          .cast-member img {
            width: 100%;
            max-width: 80px;
            height: auto;
            border-radius: 50%;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .reviews-section {
            margin-bottom: 20px;
          }

          .reviews {
            margin-top: 10px;
          }

          .user-review {
            margin-top: 20px;
          }

          .user-review input,
          .user-review textarea {
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
            font-size: 1rem;
          }

          .user-review button {
            display: inline-block;
            padding: 10px 15px;
            font-size: 1rem;
            cursor: pointer;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s;
          }

          .user-review button:hover {
            background-color: #218838;
          }

          .similar-movies-section {
            margin-bottom: 20px;
          }

          .similar-movies-carousel {
            display: flex;
            gap: 10px;
            flex-wrap: nowrap;
            overflow-x: auto;
          }

          .similar-movie {
            text-align: center;
            min-width: 150px;
          }

          .similar-movie img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .video-info {
              text-align: center;
            }

            .details-container {
              flex-direction: column;
            }

            .description-section,
            .info-section {
              min-width: auto;
            }

            .cast-member {
              flex: 1 1 100px;
            }

            .movie-thumbnail,
            .movie-video {
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MovieDetails;





