const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/serverConfig");
const isLoggedIn = async(req,res,next)=>{
   try {
    const token = req.cookies["authToken"];
    if(!token){
        return res.status(404).json({
            message:"User token not found",
            error:"Unauthorized user, token not found",
            success:false,
            data:{}
        })
    }
    const decoded = jwt.verify(token,JWT_SECRET_KEY);
   
    if(!decoded){
        return res.status(404).json({
            message:"Unauthorized user,",
            error:"Unauthorized user,token is invalid",
            success:false,
            data:{}
        })
    }
    req.user = {
        email : decoded.email,
        id :decoded.id,
        role :decoded.role
    }
   } catch (error) {
    res.cookie("authToken","",{
        httpOnly:true,
        secure:true,
        sameSite: 'None',
        maxAge:1*24*60*60*1000
    })
    return res.status(401).json({
        message:"Unauthorized user,user token is expired",
        error:error,
        success:false,
        data:{}
    })
   }
    next()
}


const isAdmin = (req,res,next)=>{
    const loggedInUserRole = req.user.role 
    if(loggedInUserRole === "ADMIN"){
        next()
    }else{
        return res.status(401).json({
            message:"Unauthorized user,Admin can perform this action",
            error:"User can't perform this action ",
            success:false,
            data:{}
        }) 
    }
}


module.exports = {
    isLoggedIn,
    isAdmin
}