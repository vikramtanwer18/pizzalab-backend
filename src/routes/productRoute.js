const express = require("express")
const { createProduct, getProduct, deleteProduct,getProducts } = require("../controllers/createProudct")
const upload = require("../middleware/multerMiddleware")
const { isLoggedIn, isAdmin } = require("../validation/authValidation")

const proudctRouter = express.Router()

proudctRouter.post("/register",isLoggedIn, isAdmin, upload.single("productImage"), createProduct)
proudctRouter.get("/",isLoggedIn, getProducts)
proudctRouter.get("/get/:id",isLoggedIn,getProduct)
proudctRouter.delete("/remove/:id",isLoggedIn, isAdmin,deleteProduct)

module.exports = proudctRouter