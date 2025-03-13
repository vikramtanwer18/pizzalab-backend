const Product = require("../schema/productSchema")


const registerProduct = async(productPerameters)=>{
    try {
        const result = await Product.create(productPerameters)
        return result
    } catch (error) {
        console.log("error while creating the product!")
    }

}

const getAllProducts= async()=>{
    try {
        const result = await Product.find({})
        return result
    } catch (error) {
        console.log("error while get the product",error)
    }
}

const getProductById = async(productId)=>{
    try {
        const result = await Product.findById(productId)
        return result
    } catch (error) {
        console.log("error while get the product",error)
    }
}
const deleteProductById = async(productId)=>{
    try {
        const result = await Product.findByIdAndDelete(productId)
        return result
    } catch (error) {
        console.log("error while get the product",error)
    }
}

module.exports = {
    registerProduct,
    getProductById,
    deleteProductById,
    getAllProducts
}