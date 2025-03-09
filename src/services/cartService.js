const { getCartByUserId, clearCartById } = require("../repositories/cartRepo")
const { getProductService } = require("./productService")
const getCart = async(userId)=>{
    const cart = await getCartByUserId({user:userId})
    if(!cart){
        throw({message:"Unauthorized user cart can not be fetch",statusCode:404})
    }
    return cart
}

const modifyToCart = async(userId,productId, isAddProduct)=>{
    const value = isAddProduct ? 1 : -1
    const cart = await getCart(userId)
    console.log(userId,productId)
    const product = await getProductService(productId)
    if(!product.inStock){
       throw({message:"product is not available,out of stock",statusCode:404})
    }
    let isProductFound = false
    cart.items.map(item=>{
        if(item.product._id.toString() === productId){
           if(isAddProduct){
            if(product.quantity >= item.quantity + 1 ){
                item.quantity += value  
                isProductFound = true
             }else{
                throw({message:"Proudct is not available,out of stock",statusCode:404})
             }
           }else{
            if(item.quantity > 0){
                item.quantity += value 
                if(item.quantity == 0){
                cart.items = cart.items.filter(item=> item.product._id != productId)
                    isProductFound = true
                    return
                }
            }
           }
        }    
    })

    if(!isProductFound){
       if(isAddProduct){
        cart.items.push({
            product : productId,
            quantity : 1
        })
       }
    }
    await cart.save()
    return cart
}


const clearCart = async(userId)=>{
    const cart = await clearCartById({user:userId})
    if(!cart){
        thow({message:"something went wrong cart is not clear",statusCode:500})
    }
    return cart
}

module.exports = {
    getCart ,
    modifyToCart,
    clearCart
}