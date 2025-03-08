const { productService } = require("../services/productService")

const createProduct = async(req,res)=>{
    try {
        const productDetails = {
            imagePath:req.file.path,
            productDetails:req.body
        }
        const response = await productService(productDetails)
        return res.status(201).json({
            message:"product is successfully registered",
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
    createProduct
}