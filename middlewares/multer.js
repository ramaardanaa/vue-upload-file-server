const multer = require("multer")

const storage = multer.diskStorage({
  destination: "./public/images",
  filename: (req,file,cb) => {
    cb(null, 'IMG-'+ Date.now()+'.jpg')
  }
})

module.exports = storage