const http = require("http");

let server = http.createServer((req,res)=> {

    res.end("Welcome on My Web Page")

})

server.listen(1234,()=>{

    console.log("Server is running on port number 1234")

})