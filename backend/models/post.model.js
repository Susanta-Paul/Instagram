const mongoose=require("mongoose")

const postSchema= new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    caption: {
        type: String,
        required: true,
        minlength: [4, "Caption must be atleast 4 character long"]
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        comment: {
            type: String,
            minlength: [1, "Comment must be atleast 1 character long"]
        }
    }],
    shares: {
        type: Number,
        default: 0
    }
})

const post=mongoose.model("Post", postSchema)

module.exports=post