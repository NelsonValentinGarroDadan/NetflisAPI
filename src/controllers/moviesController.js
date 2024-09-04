const MovieModel = require("../models/Movie");
const catchAsync = require("../utils/catchAsync");

const getAllMovies = async (req, res)=>{
    const movies = await MovieModel.getMovies();
    res
        .status(200)
        .json(movies);
   
};
const getMovieByTitle = async (req, res)=>{
    const {title} = req.params;
    const movie = await MovieModel.getMovieByTitle(title);
    if(movie){
        res
        .status(200)
        .json(movie);
    }else{
        res
        .status(400)
        .json({ message: 'Película no encontrada' }); 
    }
}

const createMovie = async(req, res)=>{
    const movie = await MovieModel.createMovie(req.body);
    res
        .status(201)
        .json(movie);
}

module.exports = {
    getAllMovies: catchAsync(getAllMovies),
    getMovieByTitle: catchAsync(getMovieByTitle),
    createMovie: catchAsync(createMovie)
}