const Movie = require("../models/Movie");

const createMovie = async (req, res) => {
  try {
    const { title, description, duration, language, genre, releaseDate } =
      req.body;

    if (
      !title ||
      !description ||
      !duration ||
      !language ||
      !genre ||
      !releaseDate
    ) {
      return res.status(401).send("All fields are required");
    }

    const movie = await Movie.create({
      title,
      description,
      duration,
      language,
      genre,
      releaseDate,
    });

    res.status(201).json({
      success: true,
      message: "movie added",
      data: movie,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Internal Server Error");
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    return res.status(200).json({
      success: true,
      data: movies,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).send("Movie not found");
    }

    return res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!movie) {
      return res.status(404).send("Movie not found");
    }

    return res.status(200).json({
      success: true,
      message: "Movie updated successfully",
      data: movie,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).send("Movie not found");
    }

    return res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
