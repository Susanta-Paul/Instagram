const { v2: cloudinary } = require('cloudinary');
const fs=require("fs")

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

async function uploadToCloudinary(localFilePath){
    try{
        const response= await cloudinary.uploader.upload(
                localFilePath, {
                resource_type: 'auto'
            }
        )
        const publicUrl=await response.url
        // fs.unlink(localFilePath)
        return publicUrl
    }catch(e){
        console.log(e)
        fs.unlink(localFilePath)
    }
}

module.exports=uploadToCloudinary
