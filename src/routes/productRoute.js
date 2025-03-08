const express = require("express")
const { createProduct, getProduct, deleteProduct } = require("../controllers/createProudct")
const upload = require("../middleware/multerMiddleware")
const { isLoggedIn, isAdmin } = require("../validation/authValidation")

const proudctRouter = express.Router()

proudctRouter.post("/register",isLoggedIn, isAdmin, upload.single("productImage"), createProduct)
proudctRouter.get("/get/:id",isLoggedIn,getProduct)
proudctRouter.delete("/remove/:id",isLoggedIn, isAdmin,deleteProduct)

module.exports = proudctRouter