const { registerProduct } = require("../repositories/productRepo");
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

module.exports = {
  productService,
};
