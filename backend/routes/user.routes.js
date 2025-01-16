const express=require("express")
const router=express.Router()
const {body}=require("express-validator")

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min: 6}).withMessage("Password must be atleast 6 character long"),
    body("fullname").isLength({min: 4}).withMessage("Fullname must be atleast 4 character long"),
    body("username").isLength({min: 4}).withMessage("Username must be atleast 4 character long"),
], userRegisterController)


module.exports=router