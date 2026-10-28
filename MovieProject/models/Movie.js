const  mongoose = require("mongoose")
const { type } = require("node:os")

const MovieSchema = new mongoose.Schema({
    movieName :{
        type : String,
        required : true
    },
    director : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    releaseYear : {
        type : Number,
        required : true
    },
    poster : {
        type : String,
        required : false
    }


})

const Movie = mongoose.model("Movie",MovieSchema)

module.exports = Movie;