const express = require("express")
const {connectDB,userModel} = require('./db')

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.end("Home Page")
})

app.post("/register",async(req,res)=>{
    const {name,email,password} = req.body

    try{
        const result = await userModel.create({name,email,password})
        res.status(200).json({message:"user created",user:result})
    }

    catch(err){
        console.log(err)
    }
})

app.listen(3000,async ()=>{
    try{
        console.log("Server is running on port 3000")
        await connectDB();
    }

    catch(err){
        console.log(err)
    }
})
