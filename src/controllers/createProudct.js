const { productService, getProductService, deleteProductService,getAllProductsService } = require("../services/productService")

const createProduct = async(req,res)=>{
    try {
        const productDetails = {
            imagePath:req.file.path,
            productDetails:req.body
        }
        console.log('create product is',productDetails)
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

const getProducts = async(req,res)=>{
    
    try {
     const response = await getAllProductsService()
     return res.status(200).json({
         message:"products is successfully fetched",
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

const getProduct = async(req,res)=>{
   try {
    const productId = req.params.id;
    const response = await getProductService(productId)
    return res.status(200).json({
        message:"product is successfully fetched",
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
const deleteProduct = async(req,res)=>{
    try {
     const productId = req.params.id;
     const response = await deleteProductService(productId)
     return res.status(200).json({
         message:"product is successfully delted",
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
    createProduct,
    getProduct,
    deleteProduct,
    getProducts
}