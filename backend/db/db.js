const mongoose=require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("successfully connect to the Database")
    })
}

module.exports=connectToDb