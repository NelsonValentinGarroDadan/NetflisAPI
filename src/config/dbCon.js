const mongoose = require('mongoose');
const urlDB = "mongodb+srv://nelsonvgarrodadan:zg5efej0vPIXA0xV@workplase.0pzcr.mongodb.net/Movies?retryWrites=true&w=majority&appName=WorkPlase"
const dbCon = async ()=>{
    mongoose.connect(urlDB,{ 
        ssl: true 
      })
};
module.exports = dbCon;