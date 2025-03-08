const { getCart } = require("../services/cartService")

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

module.exports = {
    getCartController
}