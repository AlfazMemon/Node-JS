// to print file data

// const fs = require("fs")

// fs.readFile("text.txt",{encoding: "utf-8" },(err,data)=>{
//     if(err){
//         console.log("Something is Wrong")
//         console.log(err)
//     }

//     else{
//         console.log(data)
//     }
// })

// {to Change data of file}

// const fs = require("fs")

// fs.writeFile("text.txt","This is my first backed file",(err)=>{
//    if(err){ 
//     console.log("Something is Wrong")
//    }

//    else{
//     console.log("Data has been updated")
//    }
// })

// add data in file

const fs = require("fs")

fs.appendFile("text.txt","\nWelcome to my web page",(err)=>{
    if(err){
        console.log("Something is wrong")
    }
    else{
        console.log("Data has been added")
    }
})
