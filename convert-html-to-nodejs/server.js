const express = require("express")
const path = require("path")

const app = express() // invoke
const PORT = 1234

// access public folder  static files
app.use(express.static(path.join(__dirname,"public")))

// start the server
app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`)
})