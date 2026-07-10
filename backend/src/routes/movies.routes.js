const router = require("router");
const movieController = require("../controllers/movie.controller");

router.post("/add", movieController.createMovie);
router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMovieById);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
