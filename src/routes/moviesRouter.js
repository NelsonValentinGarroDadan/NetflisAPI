const {Router} = require('express');
const moviesController = require('../controllers/moviesController');
const validationMovie = require('../middelwares/validationMovie');

const moviesRouter = Router();

moviesRouter.get("/",moviesController.getAllMovies);
moviesRouter.post("/",validationMovie,moviesController.createMovie);
moviesRouter.get("/:title",moviesController.getMovieByTitle);



module.exports = {
    moviesRouter,
};

