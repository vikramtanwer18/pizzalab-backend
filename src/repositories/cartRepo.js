const Cart = require("../schema/cartSchema")

const registerCart = async(userId)=>{
    try {
        const result = await Cart.create(userId)
        return result
    } catch (error) {
        console.log("error while creating the cart",error)
    }
}

const getCartByUserId = async(userId)=>{
    try {
        const result = await Cart.findOne(userId).populate('items.product')
        return result
    } catch (error) {
        console.log("error while get the cart",error)
    }
}

const clearCartById= async(userId)=>{
   try {
    const cart = await Cart.findOne(userId)
    cart.items = []
    await cart.save()
   return cart
   } catch (error) {
    console.log("error while clear the cart",error)
   }
}

module.exports = {
    registerCart,
    getCartByUserId,
    clearCartById
}