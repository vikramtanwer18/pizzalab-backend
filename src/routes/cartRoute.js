
const express = require("express")
const { getCartController } = require("../controllers/getCart")
const { isLoggedIn } = require("../validation/authValidation")

const cartRouter= express.Router()

cartRouter.get("/",isLoggedIn ,getCartController)

module.exports = cartRouter

