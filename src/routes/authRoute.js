const express = require("express")
const { loginUser } = require("../controllers/loginUser")
const { resetPassword } = require("../controllers/resetPassword")

const authRouter = express.Router()

authRouter.post("/login",loginUser)
authRouter.post('/reset',resetPassword)


module.exports = authRouter