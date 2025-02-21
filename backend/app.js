const express=require("express")
const app=express()
const http=require("http")
const server=http.createServer(app)
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config();
const port= process.env.PORT || 3000
const userRoutes=require("./routes/user.routes")
const connectToDb=require("./db/db")
connectToDb()
const cookie=require("cookie-parser")
const {initializeSocket}=require("./config/socket")

app.use(cookie())
app.use(cors({
    origin: "https://project-insta-susanta.netlify.app",
    // origin: process.env.ORIGIN,
    credentials: true
}))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

app.use("/user", userRoutes)


initializeSocket(server)

server.listen(port , ()=>{
    console.log(`server is running on port: ${port}`)
})
