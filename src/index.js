const express = require('express');
const cookieParser = require("cookie-parser")
const serverConfig = require('./config/serverConfig')

const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const { isLoggedIn } = require('./validation/authValidation');

const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))


app.use('/users',userRouter)
app.use('/users/auth',authRouter)

// app.get("/ping",isLoggedIn,(req,res)=>{
//     res.send({
//         message:"Pong"
//     })
// })

app.listen(serverConfig.PORT,async()=>{
    await connectDB()
    console.log(`Server started at port ${serverConfig.PORT}`)
})
