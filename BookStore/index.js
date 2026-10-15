const express = require("express")
const app = express() //invoke
const mongoose = require("mongoose")

//Server Connection

mongoose.connect("mongodb://localhost:27017/BookStore")
.then(()=> console.log("DataBase Connected Successfully"))
.catch((err)=>console.log(err))

//Schema

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  category: String,
  stock: Number,
  published: Boolean,
  rating: Number,
});

const BookData = mongoose.model("Book",BookSchema)

app.listen(1234,()=>{
    console.log("Server is running on port 1234")
    
})