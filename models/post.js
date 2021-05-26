var mongoose = require("mongoose");

// let dbURI = "mongodb+srv://dbjahan:dbjahan@cluster0.8ric4.mongodb.net/test?retryWrites=true&w=majority";
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const song = new mongoose.Schema({
    title: String,
    duration: Number,
    genre: String,
    artistId: String 
})
const songModel = mongoose.model('songs', song)

const artist= new mongoose.Schema({
    name: String,
    country: String
})
const artistModel = mongoose.model('artists', artist)

module.exports = {
    songModel: songModel,
    artistModel: artistModel
}