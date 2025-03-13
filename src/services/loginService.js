const { findUser } = require("../repositories/userRepo")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config/serverConfig")

const loginService = async(userDetails)=>{
  try {
    const user = await findUser({email:userDetails.email})
    if(!user){
        throw({message:"User for this email is not found!",statusCode:404})
    }
    const isValidPassword = await bcrypt.compare(userDetails.password,user.password)
    if(!isValidPassword){
        throw({message:"Unauthorized user",statusCode:401}) 
    }
    const role = user.role ? user.role :"USER"
    const token = await jwt.sign({email:user.email,id:user._id, role:role },config.JWT_SECRET_KEY,{expiresIn:config.JWT_EXPIRY})
    return ({token,role,userData:{
      email :user.email,
      firstName:user.firstName
    }})
  } catch (error) {
    console.log('error while generating token ',error)
  }
}

module.exports = {
    loginService
}