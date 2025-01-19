const userModel=require("../models/user.model")
const postModel=require("../models/post.model")


module.exports.userCreateService= async ({username, fullname, email, password })=>{

    if(!username|| !fullname || !email ||!password){
        throw new Error("All Fields are required!")
    }

    try{
        const user=userModel.create({
            fullname,
            username,
            email,
            password
        })
        
        return user;
    }catch(error){
        return error
    }
    
    
}


module.exports.postCreateService= async ({url, userId, caption })=>{

    if(!url|| !userId || !caption){
        throw new Error("All Fields are required!")
    }

    try{
        const post=postModel.create({
            url, 
            userId,
            caption
        })
        
        return post;
    }catch(error){
        return error
    }
    
    
}
