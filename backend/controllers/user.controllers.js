const bcrypt=require("bcryptjs")
const {validationResult}=require("express-validator")
const userService=require("../service/user.service")
const userModel=require("../models/user.model")
const cookie=require("cookie-parser")


module.exports.userRegisterController= async (req, res, next)=>{
    
    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(401).json({"errors": errors.array()})
    }

    const{fullname, username, email, password}=req.body

    const hashedPassword= await userModel.hashPassword(password)

    
    try{
        const user= await userService.userCreateService({
            fullname: fullname, 
            username: username,
            email: email,
            password: hashedPassword
        })
        const token= await user.generateAuthToken()

        return res.status(201).json({token, user})
    }catch(error){
        return res.status(400).json({error: error})
    }
    
}


module.exports.userLoginController= async (req, res, next)=>{
    
    const errors=validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors})
    }

    const {username, password}=req.body

    const user= await userModel.findOne({username:username}).select("+password")

    if(!user){
        return res.status(401).json({message: "Invalid Username or Password"})
    }

    const isMatch=await user.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({message: "Invalid Username or Password"})
    }

    user.password=undefined;
    const token= await user.generateAuthToken()

    res.cookie("token", token)

    res.status(200).json({token, user})
    
}