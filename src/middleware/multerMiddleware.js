const multer  = require('multer')
const path = require("path")

const storage = multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,'uploads/')
    },
    filename:(req,file,next)=>{
        // path.extname give the extension
        next(null,`${Date.now()}${path.extname(file.originalname)}`)
    }
}
)
  
  const upload = multer({ storage: storage })

  module.exports = upload