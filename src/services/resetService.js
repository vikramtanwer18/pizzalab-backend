const { findUser } = require("../repositories/userRepo")
const bcrypt = require('bcryptjs')


const resetPasswordService = async(userDetails)=>{
  try {
    const user = await findUser({email:userDetails.email})
    if(!user){
        throw({message:"Unauthorized user email is invalid",statusCode:401})
    }
    const password = userDetails.password
    
    const hasedPassword = await bcrypt.hash(password,10)
    user.password = hasedPassword
  } catch (error) {
    console.log("error while reset password",error)
  }

}

module.exports = {
    resetPasswordService
}