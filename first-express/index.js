const express = require("express")
const app = express()

app.listen(1212,()=>{
    console.log("This server is running on port 121")
})

app.get("/",(req,res)=>{
    res.end("Welcome to My first Express")
})

app.get("/contact",(req,res)=>{
    res.end("Contact Page")
})

app.get("/product",(req,res)=>{
    res.end("product Page")
})

app.get("/home",(req,res)=>{
    res.end("Home Page")
})


// Api for future

// fetch("http:localhost:1212/home")