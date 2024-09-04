const validationMovie = (req, res, next)=>{
    const {title, year,director,duration,genre,rate,poster} = req.body;

    if(!title || title==="") next( {statusCode:400,message: "Falta el titulo de la pelicula"});
    if(!year || year==="") next( {statusCode:400,message: "Falta el año de la pelicula"});
    if(year.length !== 4) next( {statusCode:400,message: "El año de la pelicula debe ser de 4 digitos"});
    if(!director || director==="") next( {statusCode:400,message: "Falta el director de la pelicula"});
    if(!duration || duration==="") next( {statusCode:400,message: "Falta la duracion de la pelicula"});
    if(!genre || !Array.isArray(genre)) next( {statusCode:400,message: "Falta el arreglo con los generos de la pelicula"});
    if(genre.length < 1) next({ statusCode : 400 , message : "La pelicula debe tener por lo menos un genero"});
    if(!rate) next( {statusCode:400,message: "Falta la calificacion de la pelicula"});
    if(Number.isNaN(rate) || Number.isNaN(Math.round(rate)) ) next( {statusCode : 400, message: "La calificacion de la pelicula debe ser un numero"});
    if(rate < 0 || 10 < rate) next({ statusCode: 400, message: "La calificacion debe estar entre 0 y 10"}) 
    if(!poster || poster==="") next( {statusCode:400,message: "Falta el poster de la pelicula"});
    next();
}

module.exports = validationMovie;