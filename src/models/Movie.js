const mongoose = require("mongoose");
const MovieClass = require('../class/Movie');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    rate: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    poster: {
        type: String,
        required: true,
    },
});

movieSchema.statics.getMovies = async function() {
    return await this.find().lean();
};

movieSchema.statics.getMovieByTitle = async function(title) {
    return await this.findOne({ title }).lean();
};

movieSchema.statics.createMovie = async function({ title, year, director, duration, genre, rate, poster }) {
    let movie = new MovieClass(title, year, director, duration, genre, rate, poster);
    return await this.create(movie);
};

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
