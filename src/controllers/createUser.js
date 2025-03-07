const { userService } = require("../services/userService")

const createUser = async(req,res)=>{

   try {
    const response = await userService(req.body)
    return res.status(201).json({
        message:"User successfully registerd",
        data:response,
        success:true,
        error:{}
    })
   } catch (error) {
    return res.status(error.statusCode).json({
        message:error.message,
        success:false,
        error:error,
        data:{}
    })
   }

}

module.exports = {
    createUser
}