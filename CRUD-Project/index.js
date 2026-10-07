const express = require("express")
const fs = require("fs")
const app = express()

    const AddProduct = {
        "title": "Iphone 18 pro",
        "price": 179900,
        "description": "brown color 512",
        "category": "electronic",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }


app.get("/",(req,res)=>{
    res.end("Welcome")
})

app.get("/products",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
        if(err){
            res.end("Something went wrong")
        }

        else{
             res.end(data)    
        }
       
    })
})

app.post("/add",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
        if(err){
            res.end("Something went wrong while adding data")
        }

        else{
            const DatafromDB = JSON.parse(data)
            let productId = DatafromDB.Products[DatafromDB.Products.length - 1].id;
            
            const NewProduct = {id:++productId,...AddProduct }
            DatafromDB.Products.push(NewProduct)

            fs.writeFile("db.json",JSON.stringify(DatafromDB),(err)=>{
                if(err){
                    res.end("Something went wrong while writing data")
                }
                else{
                    res.end("data added succesfully")
                }
            })
        }
    })
})

app.delete("/deleteproduct/:id",(req,res)=>{
    const {id} = req.params

    fs.readFile("db.json","utf-8",(err,data)=>{
            if(err){
                res.send(err)
            }
            else{
                const DatafromDB =JSON.parse(data)
                const filterProduct = DatafromDB.Products.filter((el)=>el.id != id)
                fs.writeFile("db.json",JSON.stringify({Products:filterProduct}),(err)=>{
                    if(err){
                        res.send(err)
                    }
                    else{
                        res.end("Data deleted Successfully")
                    }
                })
            }
    })
})

app.listen(1234,()=>{
    console.log("Server is runnning on port 1234")
})
