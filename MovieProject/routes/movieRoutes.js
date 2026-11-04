const express = require("express")
const router = express.Router()

const MovieController = require("../controllers/MovieController")
const upload = require("../middleware/upload")

//Home Router
router.get("/",MovieController.home)

//Add Movie Router
router.post("/addmovie",MovieController.addMovie)

// Get All Movies

router.get("/movies",MovieController.getAllMovies)

// Get Single Movie

router.get("/movies/:id",MovieController.getSingleMovie)

// Edit / Update Movie

router.put("/editmovie/:id",MovieController.editMovie)

// Delete Movie

router.delete("/deletemovie/:id",MovieController.deleteMovie)

module.exports = router