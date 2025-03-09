const express = require("express")
const { loginUser } = require("../controllers/loginUser")
const { resetPassword } = require("../controllers/resetPassword")
const { logoutUser } = require("../controllers/logout")

const authRouter = express.Router()

authRouter.post("/login",loginUser)
authRouter.post("/logout",logoutUser)
authRouter.post('/reset',resetPassword)


module.exports = authRouter