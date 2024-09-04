const mongoose = require('mongoose');
const urlDB = "mongodb+srv://nelsonvgarrodadan:zg5efej0vPIXA0xV@workplase.0pzcr.mongodb.net/?retryWrites=true&w=majority&appName=WorkPlase/Movies"
const dbCon = async ()=>{
    mongoose.connect(urlDB)
};
module.exports = dbCon;