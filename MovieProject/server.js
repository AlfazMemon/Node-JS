const express = require("express")
const dotenv = require("dotenv")

dotenv.config();

const connectDB = require("./config/db")

app = express();

app.use(express.json())

connectDB();

app.get("/",(req,res)=>{
    res.send("Movie Managment Server Running")
})

app.listen(process.env.PORT,()=>{
    console.log("Server Running Successfully")
})