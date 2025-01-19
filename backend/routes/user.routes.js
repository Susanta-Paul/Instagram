const express=require("express")
const router=express.Router()
const {body}=require("express-validator")
const userController=require("../controllers/user.controllers")
const AuthMiddleware=require("../middleware/auth.middleware")
const multerMiddleware=require("../middleware/multer.middleware")
const multer=require("multer")

router.post("/register", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min: 6}).withMessage("Password must be atleast 6 character long"),
    body("fullname").isLength({min: 4}).withMessage("Fullname must be atleast 4 character long"),
    body("username").isLength({min: 4}).withMessage("Username must be atleast 4 character long"),
], userController.userRegisterController)


router.post("/login", [
    body("username").isLength({min: 4}).withMessage("Username must be atleast 4 character long"),
    body("password").isLength({min: 6}).withMessage("Password must be atleast 6 character long"),
], userController.userLoginController)


router.get("/profile",AuthMiddleware.userAuthMiddleware, userController.getProfileController)


const storage=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./uploads/images")
    },
    filename: (req, file, cb)=>{
        cb(null, `${req.user._id}-${Date.now()}-${file.originalname}`)
    }
})

const upload=multer({
    "storage": storage,
    limits: { fileSize: 50 * 1024 * 1024 }
})



router.post("/upload", AuthMiddleware.userAuthMiddleware,upload.single("file"),userController.uploadController)

router.get("/posts", AuthMiddleware.userAuthMiddleware, userController.getAllPosts)

module.exports=router
