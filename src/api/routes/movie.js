const { getMovies, getMoviesByGenre, getMoviesByYear, getMovieById, getMovieByTitle, postMovie, deleteMovie, updateMovie } = require("../controllers/movie");

const movieRoutes = require("express").Router();


movieRoutes.get("/getMoviesByGenre/:genre", getMoviesByGenre);
movieRoutes.get("/getMoviesByYear/:year", getMoviesByYear);
movieRoutes.get("/getMovieById/:id", getMovieById);
movieRoutes.get("/getMovieByTitle/:title", getMovieByTitle);
movieRoutes.get("/", getMovies);
movieRoutes.post("/",postMovie)
movieRoutes.delete("/:id", deleteMovie)
movieRoutes.put("/:id", updateMovie)

module.exports = {movieRoutes}