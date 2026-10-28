const mongoose = require("mongoose");
const { error } = require("node:console");

const connectDB = async ()=>{
     try{
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connected Successfully")
     }

     catch(error){
        console.log(error)
     }

}

module.exports = connectDB