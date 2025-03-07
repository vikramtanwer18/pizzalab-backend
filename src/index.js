const express = require('express');

const serverConfig = require('./config/serverConfig')

const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute');

const app = express();

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))


app.use('/users',userRouter)

app.listen(serverConfig.PORT,async()=>{
    await connectDB()
    console.log(`Server started at port ${serverConfig.PORT}`)
})
