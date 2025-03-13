

const {createOrderService, getOrders, getOrderById, updateOrder} = require("../services/orderService");

const createOrder = async(req,res)=>{
    try {
        console.log("order in the controller",req.body)
        const response = await createOrderService(req.user.id,req.body.paymentMethod,req.body.address)
        return res.status(201).json({
            message:"Order is successfully created",
            success:true,
            data:response,
            error:{}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message:error.message,
            success:false,
            data:{},
            error:error
        })
    }
}
const getOrdersController = async(req,res)=>{
    try {
      
        const response = await getOrders(req.user.id,)
        return res.status(200).json({
            message:"Orders is successfully fetch",
            success:true,
            data:response,
            error:{}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message:error.message,
            success:false,
            data:{},
            error:error
        })
    }
}
const getOrderByOrderIdController = async(req,res)=>{
    try {
        const response = await getOrderById(req.params.orderId)
        return res.status(200).json({
            message:"Order is successfully fetch",
            success:true,
            data:response,
            error:{}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message:error.message,
            success:false,
            data:{},
            error:error
        })
    }
}
const cancleOrder = async(req,res)=>{
    try { 
        const response = await updateOrder(req.params.orderId,"CANCLED")
        return res.status(200).json({
            message:"Order is successfully cancled",
            success:true,
            data:response,
            error:{}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message:error.message,
            success:false,
            data:{},
            error:error
        })
    }
}

const changeOrderStatus = async(req,res)=>{
    try {
        const response = await updateOrder(req.params.orderId,req.body.status)
        return res.status(200).json({
            message:"Order status is successfully changed",
            success:true,
            data:response,
            error:{}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message:error.message,
            success:false,
            data:{},
            error:error
        })
    }
}
module.exports = {
    createOrder,
    changeOrderStatus,
    cancleOrder,
    getOrderByOrderIdController,
    getOrdersController
}