const http = require("http")

let server =  http.createServer((req,res)=>{

    res.end("Welcome to my Web Page")

})

server.listen(1234,()=>{
    console.log("This server is running on port number 1234")
})