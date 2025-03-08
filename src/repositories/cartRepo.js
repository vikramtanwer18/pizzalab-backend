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
        const result = await Cart.findOne(userId)
        return result
    } catch (error) {
        console.log("error while get the cart",error)
    }
}

module.exports = {
    registerCart,
    getCartByUserId
}