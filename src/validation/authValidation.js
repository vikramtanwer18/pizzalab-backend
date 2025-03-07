const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/serverConfig");
const isLoggedIn = async(req,res,next)=>{
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
    next()
}

module.exports = {
    isLoggedIn
}