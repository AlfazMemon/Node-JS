const mongoose = require("mongoose")
const { type } = require("node:os")

async function  connectDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/user")
        console.log("Database connection successfully")
    }
    catch(err){
        console.log(err)
    }
}

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String , required:true, unique:true},
    password:{type:String, required:true}
})

const userModel = mongoose.model("userdata",userSchema)

module.exports = {connectDB,userModel}