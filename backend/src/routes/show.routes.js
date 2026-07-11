const express = require("express");

const router = express.Router();

const {
  createShow,
  getAllShows,
  getShowById,
  getShowsByMovie,
  getShowsByTheatre,
  updateShow,
  deleteShow,
} = require("../controllers/show.controller");

router.post("/add", createShow);

router.get("/", getAllShows);

router.get("/movie/:movieId", getShowsByMovie);

router.get("/theatre/:theatreId", getShowsByTheatre);

router.get("/:id", getShowById);

router.put("/:id", updateShow);

router.delete("/:id", deleteShow);

module.exports = router;
