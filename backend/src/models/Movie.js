const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    duration: Number, // minutes
    language: String,
    genre: [String],
    releaseDate: Date,
    posterUrl: String,
    trailerUrl: String,
    rating: Number,
    certificate: String, // U, UA, A
    isActive: Boolean,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Movie", movieSchema);
