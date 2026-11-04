const  Movie = require("../models/Movie")

const home = (req,res) =>{
    res.end("Welcome to Movie Managment System")
}

//Add Movie

const addMovie = async (req,res)=>{
    try{
        const { movieName,director,category,releaseYear } = req.body; 

        const poster = req.file ? req.file.filename : null ;

        const movie = new Movie({
            movieName,
            director,
            category,
            releaseYear,
            poster
        })

        await movie.save();

        res.status(201).json({
            success: true,
            message : "Movie Added Successfully",
            movie
    })
    }

    catch(error){
        res.status(500).json({
            success : false,
            message : "Something went Wrong",
            error : error.message
        })
    }
}

//Get All Movies

const getAllMovies = async (req,res) =>{
    try{
        const movies = await Movie.find();

    res.status(200).json({
        success : true,
        message : "Movies Found Successfully",
        movies
    })
    }

    catch(error){
        res.status(500).json({
            success : false,
            message : "Something Went Wrong",
            error : error.message 
        })
    }
}

// Get Single Movie

const getSingleMovie = async (req,res) =>{
    try{
        const movie = await Movie.findById(req.params.id)

        if(!movie){
            return res.status(404).json({
                success : false,
                message : "Movie Not Found"
            })
        }

        res.status(200).json({
            success : true,
            movie
        })
    }

    catch(error){
        res.status(500).json({
            success : false,
            message : "something Went Wrong",
            error : error.message
        })
    }
}

//Edit / Update 

const editMovie = async (req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id)

        if(!movie){
        return res.status(404).json({
            success : false,
            message : "Move Not Found"
        })
    }

    const {movieName,director,category,releaseYear} = req.body;

    movie.movieName = movieName || movie.movieName;
    movie.director = director || movie.director;
    movie.category = category || movie.category;
    movie.releaseYear = releaseYear || movie.releaseYear;

    await movie.save()

    res.status(200).json({
        success : true,
        message : "Movie Updated Successfully",
        movie
    })

    }

    catch(error){
        res.status(500).json({
            success : false,
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

// Delete Movie

const deleteMovie = async (req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id)

        if(!movie){
            return res.status(404).json({
                success : false,
                message : "Movie Not Found"    
            })
        }

        await Movie.findByIdAndDelete(req.params.id)

        res.status(200).json({
            success : true,
            message : "Movie Deleted Successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success : false,
            message : "Something Went Wrong",
            error : error.message
        })
    }
}

module.exports = {
    home,
    addMovie,
    getAllMovies,
    getSingleMovie,
    editMovie,
    deleteMovie
}