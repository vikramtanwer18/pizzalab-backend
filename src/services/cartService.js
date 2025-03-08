const { getCartByUserId } = require("../repositories/cartRepo")
const getCart = async(userId)=>{
    console.log(userId)
    const cart = await getCartByUserId({user:userId})
    if(!cart){
        throw({message:"Unauthorized user cart can not be fetch",statusCode:404})
    }
    return cart
}


module.exports = {
    getCart 
}