const Order = require("../schema/orderSchema")

const registerOrder = async(orderDetails)=>{
    try {
        const result = await Order.create(orderDetails)
        return result
    } catch (error) {
        console.log("error while creating the order",error)
    }

}

const getOrderByUserId = async(userId)=>{
    try {
        const result = await Order.find(userId);
        return result
    } catch (error) {
        console.log("error while fetching the orders")
    }
}

const getOrderByOrderId = async(orderId)=>{
    try {
        const result = await Order.findById(orderId).populate("items.product");
        return result
    } catch (error) {
        console.log("error while fetching the orders")
    }
}

const updateOrderstatus = async(orderId,status)=>{
    console.log({...orderId,status:status})
    try {
        const order = await Order.findByIdAndUpdate(orderId);
        order.status = status
        await order.save()
        return order
    } catch (error) {
        console.log("error while fetching the orders")
    }
}



module.exports = {
    registerOrder,
    getOrderByOrderId,
    getOrderByUserId,
    updateOrderstatus  
}