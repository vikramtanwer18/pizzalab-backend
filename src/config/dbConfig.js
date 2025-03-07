const serverConfig = require('./serverConfig')

const mongoose = require('mongoose')

async function connectDB(){
    try {
       await mongoose.connect(serverConfig.DB_URL)
        console.log("successfully connected mongodb")
    } catch (error) {
        console.log("Error while connecting the database")
    }
}

module.exports = connectDB