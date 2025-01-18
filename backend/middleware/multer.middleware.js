const multer=require("multer")
module.exports.upload=async (req, res, next)=>{


    const storage=multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, "../uploads/images")
        },
        filename: (req, file, cb)=>{
            cb(null, `${file.originalname}-${req.user._id}-${Date.now()}`)
        }
    })

    const upload=multer({
        "storage": storage,
        limits: { fileSize: 50 * 1024 * 1024 }
    })

    upload.single("file")

}