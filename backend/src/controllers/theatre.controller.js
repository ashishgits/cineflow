const Theatre = require("../models/Theatre");

// Create Theatre
const createTheatre = async (req, res) => {
  try {
    const { name, address, city, state, pincode } = req.body;

    if (!name || !address || !city || !state || !pincode) {
      return res.status(400).send("All fields are required");
    }

    const theatre = await Theatre.create({
      name,
      address,
      city,
      state,
      pincode,
    });

    return res.status(201).json({
      success: true,
      message: "Theatre created successfully",
      data: theatre,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

// Get All Theatres
const getAllTheatres = async (req, res) => {
  try {
    const theatres = await Theatre.find();

    return res.status(200).json({
      success: true,
      data: theatres,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

// Get Theatre By ID
const getTheatreById = async (req, res) => {
  try {
    const { id } = req.params;

    const theatre = await Theatre.findById(id);

    if (!theatre) {
      return res.status(404).send("Theatre not found");
    }

    return res.status(200).json({
      success: true,
      data: theatre,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

// Update Theatre
const updateTheatre = async (req, res) => {
  try {
    const { id } = req.params;

    const theatre = await Theatre.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!theatre) {
      return res.status(404).send("Theatre not found");
    }

    return res.status(200).json({
      success: true,
      message: "Theatre updated successfully",
      data: theatre,
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

// Delete Theatre
const deleteTheatre = async (req, res) => {
  try {
    const { id } = req.params;

    const theatre = await Theatre.findByIdAndDelete(id);

    if (!theatre) {
      return res.status(404).send("Theatre not found");
    }

    return res.status(200).json({
      success: true,
      message: "Theatre deleted successfully",
    });
  } catch (error) {
    console.log(error.message);

    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createTheatre,
  getAllTheatres,
  getTheatreById,
  updateTheatre,
  deleteTheatre,
};
