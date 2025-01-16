const bcrypt=require("bcryptjs")
const {validationResult}=require("express-validator")
const userService=require("../service/user.service")
const userModel=require("../models/user.model")


module.exports.userRegisterController= async (req, res, next)=>{
    
    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(401).json({"errors": errors.array()})
    }

    const{fullname, username, email, password}=req.body

    const hashPassword= await userModel.hashPassword(password)

    const user= await userService.userCreateService({
        fullname: fullname, 
        username: username,
        email: email,
        password: hashPassword
    })
    const token=user.generateAuthToken()

    return res.status(201).json({token, user})
}