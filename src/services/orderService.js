const {registerOrder, getOrderByUserId, updateOrderstatus, getOrderByOrderId } = require("../repositories/orderRepo");
const { findUser } = require("../repositories/userRepo");
const { getCart, clearCart } = require("./cartService");

const createOrderService = async(userId,paymentMethod)=>{
    const cart = await getCart(userId);
    const user = await findUser({_id:userId})
    const orderObj = {}
    orderObj.user = cart.user
    if(cart.items.length === 0){
        throw({message:"Please add the product into the cart ",statusCode:404})
    }
    orderObj.items = cart.items.map((orderItem)=>{
      return {
        product : orderItem.product,
        quantity:orderItem.quantity
      }
    })
    orderObj.totalPrice = 0
    cart.items.forEach(item=>{
        orderObj.totalPrice =  item.product.price * item.quantity
    })

    orderObj.address = user.address;
    orderObj.paymentMethod = paymentMethod


    const order = await registerOrder(orderObj);

    if(!order){
        throw({message:"Something went wrong,User order can't be create ",statusCode:500})
    }

    await clearCart(userId)

    return order;
}


const getOrders = async(userId)=>{
    const orders = await getOrderByUserId({user:userId})
    if(!orders){
        throw({message:"Something went wrong order can't be fetched",statusCode:500})
    }
    return orders
}

const getOrderById = async(orderId)=>{
    const order = await getOrderByOrderId({_id:orderId})
    if(!order){
        throw({message:"Something went wrong order can't be fetched",statusCode:500})
    }
    return order
}

const updateOrder = async(orderId,status)=>{
    console.log(orderId,status)
    const order = await updateOrderstatus({_id:orderId},status)
    if(!order){
        throw({message:"Something went wrong order can't be fetched",statusCode:500})
    }
    return order
}

module.exports = {
    createOrderService,
    updateOrder,
    getOrderById,
    getOrders
}