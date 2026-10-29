const express = require("express")
const dotenv = require("dotenv")

dotenv.config();

const connectDB = require("./config/db")
const movieRoutes = require("./routes/movieRoutes")

app = express();

app.use(express.json())

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// connect MongoDB
connectDB();


// Routes
app.use("/", movieRoutes);

// PORT
app.listen(process.env.PORT,()=>{
    console.log("Server Running Successfully")
})