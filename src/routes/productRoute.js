const express = require("express")
const { createProduct } = require("../controllers/createProudct")
const upload = require("../middleware/multerMiddleware")

const proudctRouter = express.Router()

proudctRouter.post("/register", upload.single("pizzaImage"), createProduct)

module.exports = proudctRouter