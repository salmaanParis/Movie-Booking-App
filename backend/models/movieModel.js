const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  cast: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ticketRates: {
    type: String,
    required: true,
  },
  seats: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
