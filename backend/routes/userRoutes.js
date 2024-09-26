// userRoutes.js

const express = require('express');
const User = require('../models/user');  // Correct path to user model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Movie = require('../models/movieModel');


const router = express.Router();

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @route POST /api/users/signup
// @desc Register new user
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/addMovie', async (req, res) => {

  const { name, image, category, languages, cast, description, ticketRates, seats } = req.body.newMovie;
  try {
    const newMovie = new Movie({
      name,
      image,
      category,
      languages,
      cast,
      description,
      ticketRates,
      seats
    });

    const result = await newMovie.save();
    res.status(201).json({ message: 'Movie added successfully!', movie: result });
  } catch (error) {
    console.error('Error adding movie:', error);
    res.status(500).json({ message: 'Error adding movie', error: error.message });
  }
});




router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ movies, listing: true });
  } catch (err) {
    console.error("Error fetching movies:", err); 
    res.status(500).json({ message: 'Error fetching movies', error: err.message });
  }
});


// @route POST /api/users/login
// @desc Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get movie details by ID
router.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json({ movie });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;

