const express = require('express');
const cookieParser = require("cookie-parser")
const serverConfig = require('./config/serverConfig')
const fs = require("fs/promises")
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const { isLoggedIn } = require('./validation/authValidation');
const upload = require('./middleware/multerMiddleware');
const cloudinary = require("./config/cloudinaryConfig")
const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))


app.use('/users',userRouter)
app.use('/users/auth',authRouter)

app.post("/ping",upload.single("testFile"), async(req,res)=>{
    console.log(req.file)
    const uploadResult = await cloudinary.uploader
       .upload(
        req.file.path  
       )
       .catch((error) => {
           console.log(error);
       });
       await fs.unlink(req.file.path)
    console.log(uploadResult);
    res.send({
        message:"Pong"
    })
})

app.listen(serverConfig.PORT,async()=>{
    await connectDB()
    console.log(`Server started at port ${serverConfig.PORT}`)
})
