const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

const userSchema= new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: [4, "Fullname must be atleast 4 character long"],
    },
    username: {
        type: String,
        required: true,
        minlength: [3, "username must be atleast 3 character long"]
    },
    email: {
        type: String,
        required: true,
        minlength: [13, "email must be atleast 13 character long"]
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String,
        required: false
    },
    followers: [
        {
         type: Schema.Types.ObjectId, 
         ref: "User"
        }
    ],
    followings: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    bio: {
        type: String,
        required: false
    },
    profilePicture:{
        type: String,
        required: false
    }
})

userSchema.methods.generateAuthToken=()=>{
    const token=jwt.sign({_id: this._id}, process.env.SECRET_KEY)
    return token
}
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword= async function (password) {
    return await bcrypt.hash(password, 10)
}

const user=mongoose.model("User", userSchema)

mongoose.exports=user