const  Movie = require("../models/Movie")

const home = (req,res) =>{
    res.end("Welcome to Movie Managment System")
}

module.exports = {home}