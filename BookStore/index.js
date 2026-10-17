const express = require("express")
const app = express() //invoke
const mongoose = require("mongoose")

app.use(express.json())

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

//post
app.post("/books",async(req,res)=>{
  const Book = await BookData.create(req.body);
  res.json(Book)
})

//Get
app.get("/books", async (req, res) => {
  const Books = await BookData.find();
  res.json(Books);
});

//Update
app.put("/books/:id",async (req,res)=>{
    const Book = await BookData.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    )

    res.json(Book)
})

//Delete
app.delete("/books/:id",async (req,res)=>{
    await BookData.findByIdAndDelete(req.params.id)

    res.json({
      message: "Book deleted Succesfully"
    })
})

app.listen(1234,()=>{
    console.log("Server is running on port 1234")
    
})