const http = require("http")


let server = http.createServer((req,res)=>{
    res.end("Welcome to My first Web page")

})

server.listen(1234,()=>{
    console.log("Server is running on port 1234")
})