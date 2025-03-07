const { findUser, registerUser } = require("../repositories/userRepo")

const userService = async(userDetails)=>{
    const user = await findUser({
        email:userDetails.email,
        mobileNumber:userDetails.mobileNumber
    })
    if (user){
        throw({message:"User email is already exist",statusCode:400})
    }
    

    const newUser = await registerUser({
        firstName:userDetails.firstName,
        lastName:userDetails.lastName,
        email:userDetails.email,
        password:userDetails.password,
        mobileNumber:userDetails.mobileNumber
    })

    if(!newUser){
        throw({message:"Something went wrong user can't be register",statusCode:500})
    }

    return newUser

}

module.exports = {
    userService
}