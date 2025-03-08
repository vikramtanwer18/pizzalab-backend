const { getCart, modifyToCart } = require("../services/cartService")

const getCartController = async(req,res)=>{
    try {
        const response = await getCart(req.user.id)
        return res.status(201).json({
            message:"cart successfully fetch",
            data:response,
            success:true,
            error:{}
        })
       } catch (error) {
        return res.status(error.statusCode).json({
            message:error.message,
            success:false,
            error:error,
            data:{}
        })
       }
}

const addProductToCart = async(req,res)=>{
    try {
        const response = await modifyToCart(req.user.id ,req.params.productId,req.params.operation =="add")
        return res.status(201).json({
            message:"Successfully add product to the cart",
            data:response,
            success:true,
            error:{}
        })
       } catch (error) {
        return res.status(error.statusCode).json({
            message:error.message,
            success:false,
            error:error,
            data:{}
        })
       }
}


module.exports = {
    getCartController,
    addProductToCart
}