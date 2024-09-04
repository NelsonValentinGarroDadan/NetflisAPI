class Movie{
    constructor(title, year,director,duration,genre,rate,poster){
        if(!title || title==="") {throw("No se puede crear una pelicula sin titulo");}
        if(!director || director==="") {throw("No se puede crear una pelicula sin director")};
        if(!poster || poster===""){throw("No se puede crear una pelicula sin poster")};
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}
module.exports = Movie;