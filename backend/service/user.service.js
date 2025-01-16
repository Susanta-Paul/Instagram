const userModel=require("../models/user.model")


module.exports.userCreateService= async ({username, fullname, email, password })=>{

    if(!username|| !fullname || !email ||!password){
        throw new Error("All Fields are required!")
    }

    const user=userModel.create({
        fullname,
        username,
        email,
        password
    })

    return user;
}