const jwt=require("jsonwebtoken")
const userModel=require("../models/user.model")


module.exports.userAuthMiddleware= async (req, res, next)=>{
    const token= req.headers.authorization.split(" ")[1] || req.cookies.token 

    if(!token){
        return res.status(401).json({"message": "Unauthorized"})
    }

    const decoded=jwt.verify(token, process.env.SECRET_KEY)

    const user=await userModel.findOne({_id: decoded._id})

    if(!user){
        return res.status(404).json({"message": "No Data Found"})
    }

    req.user=user

    next()

}