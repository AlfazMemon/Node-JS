const multer = require("multer")

//configure storage
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    }
})

filename : (req,file,cb) => {
    cb(null,Date.now() + "-" + file.originalname)

}

//initialize Multer

const upload = multer({storage:storage})

module.exports = upload