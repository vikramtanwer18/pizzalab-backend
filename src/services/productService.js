const { registerProduct, getProductById ,deleteProductById,getAllProducts} = require("../repositories/productRepo");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require("fs/promises");

const productService = async ({ productDetails, imagePath }) => {
  try {
    const uploadResult = await cloudinary.uploader
      .upload(imagePath)
      .catch((error) => {
        console.log(error);
        throw({message:"cloudinary error",statusCode:500})
      });
    await fs.unlink(imagePath);
    const imageURL = uploadResult.secure_url;
    const product = await registerProduct({
      ...productDetails,
      productImage: imageURL,
    });
    if (!product) {
      throw {
        message: "Something went wrong product can't be created",
        statusCode: 500,
      };
    }
    return product;
  } catch (error) {
    console.log("error creating the product ", error);
  }
};
const getAllProductsService = async ()=>{
  const product =  await getAllProducts()
  if(!product){
   throw({message:"Something went wrong product is not fetched",statusCode:500})
  }
  return product
}

const getProductService = async (productId)=>{
   const product =  await getProductById({_id:productId})
   if(!product){
    throw({message:"Something went wrong product is not fetched",statusCode:500})
   }
   return product
}


const deleteProductService = async (productId)=>{
    const product =  await deleteProductById({_id:productId})
    if(!product){
     throw({message:"Something went wrong product is not delted",statusCode:404})
    }
    return product
 }


module.exports = {
  productService,
  getProductService,
  deleteProductService,
  getAllProductsService
};
