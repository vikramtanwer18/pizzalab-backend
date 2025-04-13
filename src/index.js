const express = require('express');
const cookieParser = require("cookie-parser")
const serverConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const proudctRouter = require('./routes/productRoute');
const cartRouter = require('./routes/cartRoute');
const orderRouter = require('./routes/orderRoute');
const cors = require("cors");
const app = express();

app.use(cors({
    origin:[serverConfig.FRONTEND_URL,'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true,
    
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))


app.use('/users',userRouter)
app.use('/users/auth',authRouter)
app.use("/products",proudctRouter)
app.use("/carts",cartRouter)
app.use('/orders',orderRouter)

// app.post("/ping",upload.single("testImage"),async(req,res)=>{
//     console.log(req.file)
//     res.send({
//         message:"Pong"
//     })
// })

app.listen(serverConfig.PORT,async()=>{
    await connectDB()
    console.log(`Server started at port ${serverConfig.PORT}`)
})
