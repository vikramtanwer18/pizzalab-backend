
const logoutUser = async(req,res)=>{
   try {
    console.log(req.cookies)
    res.cookie("authToken","",{
        httpOnly:true,
        secure:true,
        sameSite: 'None',
        maxAge:1*24*60*60*1000
    })
    res.status(200).json({
        message:"User successfully logout",
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
    logoutUser
}