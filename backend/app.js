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

app.use(cors({
    origin: "http://localhost:5173",
    // origin: process.env.ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/user", userRoutes)


server.listen(port , ()=>{
    console.log(`server is running on port: ${port}`)
})