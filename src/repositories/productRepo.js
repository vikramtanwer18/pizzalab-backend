const Product = require("../schema/productSchema")


const registerProduct = async(productPerameters)=>{
    try {
        const result = await Product.create(productPerameters)
        return result
    } catch (error) {
        console.log("error while creating the product!")
    }

}

module.exports = {
    registerProduct
}