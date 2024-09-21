import React, { useState } from 'react';
import api from '../services/api';

const initialMovies = [
  { id: 1, name: 'Movie A', image: '/api/placeholder/100/150', category: 'PG', languages: ['English', 'Hindi'], rating: 4.5, ticketsSold: { '2024-09-01': 100, '2024-09-02': 120 }, cast: 'Actor A, Actor B', description: 'A thrilling adventure.', ticketRates: '10$-15$', seats: 200 },
  { id: 2, name: 'Movie B', image: '/api/placeholder/100/150', category: 'UA', languages: ['Tamil', 'Telugu'], rating: 4.0, ticketsSold: { '2024-09-01': 150, '2024-09-02': 80 }, cast: 'Actor C, Actor D', description: 'A romantic drama.', ticketRates: '12$-18$', seats: 150 },
];

const AdminDashboard = ({ onLogout }) => {
  const [movies, setMovies] = useState(initialMovies);
  const [isAddMovieVisible, setIsAddMovieVisible] = useState(false);
  const [editMovieId, setEditMovieId] = useState(null);
  const [newMovie, setNewMovie] = useState({
    name: '',
    image: '',
    category: '',
    languages: [],
    cast: '',
    description: '',
    ticketRates: '',
    seats: '',
  });

  const handleDelete = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const handleEdit = (id) => {
    const movie = movies.find(m => m.id === id);
    setNewMovie({ ...movie, languages: movie.languages.join(', ') });
    setEditMovieId(id);
    setIsAddMovieVisible(true);
  };

  const handleAddOrUpdateMovie = (e) => {
    e.preventDefault();
    if (editMovieId) {
      setMovies(movies.map(movie => 
        movie.id === editMovieId ? { ...newMovie, id: editMovieId, rating: movie.rating, ticketsSold: movie.ticketsSold } : movie
      ));
      setEditMovieId(null);
    } else {
      setMovies([...movies, { ...newMovie, id: movies.length + 1, rating: 0, ticketsSold: {} }]);
      const res=api.post('/users/addMovie',{newMovie})
    }
    setNewMovie({
      name: '',
      image: '',
      category: '',
      languages: [],
      cast: '',
      description: '',
      ticketRates: '',
      seats: '',
    });
    setIsAddMovieVisible(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Dashboard</h2>
        <button style={styles.sidebarButton} onClick={() => setIsAddMovieVisible(!isAddMovieVisible)}>
          {isAddMovieVisible ? 'Cancel' : 'Add Movie'}
        </button>
        <button style={styles.sidebarButton} onClick={onLogout}>Logout</button>
      </div>

      <div style={styles.mainContent}>
        <h1 style={styles.title}>Manage Movies</h1>

        <div style={styles.movieList}>
          {movies.map(movie => (
            <div key={movie.id} style={styles.movieCard}>
              <div style={styles.movieContent}>
                <img src={movie.image} alt={movie.name} style={styles.movieImage} />
                <div style={styles.movieDetails}>
                  <h2 style={styles.movieName}>{movie.name}</h2>
                  <p>Category: {movie.category}</p>
                  <p>Languages: {movie.languages.join(', ')}</p>
                  <p>Average Rating: {movie.rating}</p>
                  <p>Cast: {movie.cast}</p>
                  <p>Description: {movie.description}</p>
                  <p>Ticket Rates: {movie.ticketRates}</p>
                  <p>Number of Seats: {movie.seats}</p>
                  <p>Tickets Sold per Day:</p>
                  <ul>
                    {Object.entries(movie.ticketsSold).map(([date, count]) => (
                      <li key={date}>{date}: {count} tickets</li>
                    ))}
                  </ul>
                  <div style={styles.buttonGroup}>
                    <button style={styles.editButton} onClick={() => handleEdit(movie.id)}>Edit</button>
                    <button style={styles.deleteButton} onClick={() => handleDelete(movie.id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isAddMovieVisible && (
          <form onSubmit={handleAddOrUpdateMovie} style={styles.form}>
            <h2 style={styles.formTitle}>{editMovieId ? 'Edit Movie' : 'Add Movie'}</h2>
            <div style={styles.formGroup}>
              <label htmlFor="name">Movie Name</label>
              <input
                id="name"
                style={styles.input}
                value={newMovie.name}
                onChange={(e) => setNewMovie({ ...newMovie, name: e.target.value })}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="image">Image URL</label>
              <input
                id="image"
                style={styles.input}
                value={newMovie.image}
                onChange={(e) => setNewMovie({ ...newMovie, image: e.target.value })}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                style={styles.input}
                value={newMovie.category}
                onChange={(e) => setNewMovie({ ...newMovie, category: e.target.value })}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="languages">Languages (comma separated)</label>
              <input
                id="languages"
                style={styles.input}
                value={newMovie.languages}
                onChange={(e) => setNewMovie({ ...newMovie, languages: e.target.value.split(',').map(lang => lang.trim()) })}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="cast">Cast</label>
              <input
                id="cast"
                style={styles.input}
                value={newMovie.cast}
                onChange={(e) => setNewMovie({ ...newMovie, cast: e.target.value })}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                style={styles.textarea}
                value={newMovie.description}
                onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="ticketRates">Ticket Rates</label>
              <input
                id="ticketRates"
                style={styles.input}
                value={newMovie.ticketRates}
                onChange={(e) => setNewMovie({ ...newMovie, ticketRates: e.target.value })}
                required
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="seats">Number of Seats</label>
              <input
                id="seats"
                type="number"
                style={styles.input}
                value={newMovie.seats}
                onChange={(e) => setNewMovie({ ...newMovie, seats: e.target.value })}
                required
              />
            </div>
            <button type="submit" style={styles.submitButton}>{editMovieId ? 'Update Movie' : 'Add Movie'}</button>
          </form>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  sidebar: {
    width: '235px',
    backgroundColor: '#f4f4f4',
    padding: '16px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
    height: '100vh',
    position: 'fixed',
  },
  sidebarTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  sidebarButton: {
    display: 'block',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '12px',
    textAlign: 'center',
    width: '100%',
  },
  mainContent: {
    marginLeft: '250px',
    padding: '24px',
    fontFamily: 'Arial, sans-serif',
    width: 'calc(100% - 250px)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  movieList: {
    display: 'flex',
    flexDirection: 'column',
  },
  movieCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '16px',
    overflow: 'hidden',
    display: 'flex',
    padding: '16px',
  },
  movieContent: {
    display: 'flex',
    flex: '1',
  },
  movieImage: {
    width: '100px',
    height: '150px',
    objectFit: 'cover',
    marginRight: '16px',
  },
  movieDetails: {
    flex: '1',
  },
  movieName: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  buttonGroup: {
    marginTop: '16px',
  },
  editButton: {
    backgroundColor: '#ffc107',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '8px',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '24px',
    marginTop: '16px',
  },
  formTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  formGroup: {
    marginBottom: '16px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default AdminDashboard;


