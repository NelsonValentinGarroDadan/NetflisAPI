const MovieModel = require('../models/Movie');
const MovieClass = require('../class/Movie');
module.exports = {
    getMovies : async ()=>{
      let movies = await MovieModel.find();
        return movies;
    },
    getMovieByTitle: async (title)=>{
      let movie = await MovieModel.findOne({title: title});
      return movie;
    },
    existsMovieByTitle: async (title)=>{
      let result = await MovieModel.exists({title: title});
      return result;
    },
    createMovie : async ({title, year,director,duration,genre,rate,poster})=>{
      let movie = new MovieClass(title, year,director,duration,genre,rate,poster);
      const mov = await MovieModel.create(movie);
      return mov;
    }
}