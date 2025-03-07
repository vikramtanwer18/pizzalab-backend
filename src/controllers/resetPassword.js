const { resetPasswordService } = require("../services/resetService")

const resetPassword = async(req,res)=>{
   try {
    const response = await resetPasswordService(req.body)
    res.status(200).json({
        message:"successfully reset password",
        success:true,
        data :response,
        error:{}
    })
   } catch (error) {
    res.status(error.statusCode).json({
        message:error.message,
        success:false,
        data :{},
        error:error
    })
   }

}

module.exports = {
    resetPassword
}