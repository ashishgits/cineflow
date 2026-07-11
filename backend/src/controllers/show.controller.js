const Show = require("../models/show.model");
const Movie = require("../models/movie.model");
const Theatre = require("../models/theatre.model");

// Create Show
const createShow = async (req, res) => {
  try {
    const { movie, theatre, showDate, showTime, price, totalSeats } = req.body;

    const movieExists = await Movie.findById(movie);

    if (!movieExists) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }

    const theatreExists = await Theatre.findById(theatre);

    if (!theatreExists) {
      return res.status(404).json({
        success: false,
        message: "Theatre not found",
      });
    }

    const show = await Show.create({
      movie,
      theatre,
      showDate,
      showTime,
      price,
      totalSeats,
    });

    return res.status(201).json({
      success: true,
      message: "Show created successfully",
      data: show,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Shows
const getAllShows = async (req, res) => {
  try {
    const shows = await Show.find().populate("movie").populate("theatre");

    return res.status(200).json({
      success: true,
      count: shows.length,
      data: shows,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Show By Id
const getShowById = async (req, res) => {
  try {
    const show = await Show.findById(req.params.id)
      .populate("movie")
      .populate("theatre");

    if (!show) {
      return res.status(404).json({
        success: false,
        message: "Show not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: show,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Shows By Movie
const getShowsByMovie = async (req, res) => {
  try {
    const shows = await Show.find({
      movie: req.params.movieId,
      isActive: true,
    }).populate("theatre");

    return res.status(200).json({
      success: true,
      count: shows.length,
      data: shows,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Shows By Theatre
const getShowsByTheatre = async (req, res) => {
  try {
    const shows = await Show.find({
      theatre: req.params.theatreId,
      isActive: true,
    }).populate("movie");

    return res.status(200).json({
      success: true,
      count: shows.length,
      data: shows,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Show
const updateShow = async (req, res) => {
  try {
    const show = await Show.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!show) {
      return res.status(404).json({
        success: false,
        message: "Show not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Show updated successfully",
      data: show,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete Show
const deleteShow = async (req, res) => {
  try {
    const show = await Show.findById(req.params.id);

    if (!show) {
      return res.status(404).json({
        success: false,
        message: "Show not found",
      });
    }

    await show.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Show deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createShow,
  getAllShows,
  getShowById,
  getShowsByMovie,
  getShowsByTheatre,
  updateShow,
  deleteShow,
};
