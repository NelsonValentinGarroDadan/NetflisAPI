const mongoose = require('mongoose');
const urlDB = "mongodb+srv://nelsonvgarro:SUB09d76sx4gFPGo@prueba.vofva.mongodb.net/movies"
const dbCon = async ()=>{
    mongoose.connect(urlDB)
};
module.exports = dbCon;