const express = require("express");

const router = express.Router();

const {
  createTheatre,
  getAllTheatres,
  getTheatreById,
  updateTheatre,
  deleteTheatre,
} = require("../controllers/theatre.controller");

// Create Theatre
router.post("/", createTheatre);

// Get All Theatres
router.get("/", getAllTheatres);

// Get Theatre By ID
router.get("/:id", getTheatreById);

// Update Theatre
router.put("/:id", updateTheatre);

// Delete Theatre
router.delete("/:id", deleteTheatre);

module.exports = router;
