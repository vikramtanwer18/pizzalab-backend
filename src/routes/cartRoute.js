
const express = require("express")
const { getCartController, addProductToCart, clearCartController } = require("../controllers/getCart")
const { isLoggedIn } = require("../validation/authValidation")

const cartRouter= express.Router()

cartRouter.get("/",isLoggedIn ,getCartController)

cartRouter.post("/:operation/:productId",isLoggedIn ,addProductToCart)

cartRouter.delete("/clear",isLoggedIn ,clearCartController)


module.exports = cartRouter

