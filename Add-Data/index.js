const express = require("express")
const fs = require("fs")
const app = express()

    const NewProduct = {
        "title": "Iphone 18 pro",
        "price": 179900,
        "description": "brown color 512",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }



app.get("/products",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
        if(err){
            res.end("Something went wrong from showing data")
        }
        else{
            res.end(data)
        }
    })
})

app.post("/add",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
            if(err){
                console.log("Something went wrong when reading data")
            }

            else{
                let dataFromdb = JSON.parse(data)
                let productId = dataFromdb.Products[dataFromdb.Products.length - 1].id;

                const newProduct = {...NewProduct,id:++productId};
                dataFromdb.Products.push(newProduct)
                fs.writeFile("db.json",JSON.stringify(dataFromdb),(err)=>{
                    if(err){
                        res.end("Something Went Wrong while Updating Data")
                    }
                    else{
                        res.end("Data updated Succefully")
                    }
                })
            }
    })
})

app.listen(1234,()=>{
    console.log("Server is Running on port 1234")
})