const { loginService } = require("../services/loginService")
const loginUser = async(req,res)=>{
   try {
    const response = await loginService(req.body)
    res.cookie("authToken",response,{
        httpOnly:true,
        secure:false,
        maxAge:1*24*60*60*1000
    })
    res.status(200).json({
        message:"User successfully login",
        data:{},
        error:{},
        success:true
    })
   } catch (error) {
    res.status(error.statusCode).json({
        message:error.message,
        data:{},
        error:error,
        success:false
    })
   }
}
module.exports = {
    loginUser
}