
const express = require("express")

const { isLoggedIn, isAdmin } = require("../validation/authValidation")
const { createOrder, getOrdersController, getOrderByOrderIdController, cancleOrder, changeOrderStatus } = require("../controllers/createOrder")

const orderRouter= express.Router()

orderRouter.post("/",isLoggedIn,createOrder)
orderRouter.get("/",isLoggedIn,getOrdersController)
orderRouter.get("/:orderId",isLoggedIn,getOrderByOrderIdController)
orderRouter.put("/:orderId",isLoggedIn,cancleOrder)
orderRouter.put("/:orderId/status",isLoggedIn,isAdmin,changeOrderStatus)

module.exports = orderRouter