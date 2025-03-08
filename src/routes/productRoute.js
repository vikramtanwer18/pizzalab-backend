const express = require("express")
const { createProduct, getProduct, deleteProduct } = require("../controllers/createProudct")
const upload = require("../middleware/multerMiddleware")

const proudctRouter = express.Router()

proudctRouter.post("/register", upload.single("pizzaImage"), createProduct)
proudctRouter.get("/get/:id",getProduct)
proudctRouter.delete("/remove/:id",deleteProduct)

module.exports = proudctRouter