const socketIo=require("socket.io")
const jwt=require("jsonwebtoken")
const userModel=require("../models/user.model")

let io;

function initializeSocket(server){

    io=socketIo(server,{
        cors: {
            origin: "http://localhost:5173",
            credentials: true
        }
    }
    )

    async function updateUserSocket({userId, socketId}){
        const user= await userModel.findByIdAndUpdate(
            {_id: userId}, {socketId: socketId}, {new: true}
        )

        return user
    }


    async function getSocketId({username}){
        const user= await userModel.findOne({username: username})
        // console.log("socketId Found of", username)
        return user.socketId
    }



    io.on("connection", (socket)=>{
        console.log("New Client Connected")

        socket.on("setSocketId", async (data)=>{
            const decoded= jwt.verify(data.token , process.env.SECRET_KEY)
            const user= await updateUserSocket({userId: decoded._id, socketId: socket.id })
            
            // console.log(user)
        })

        socket.on("sendMessage", async (data)=>{
            const socketId= await getSocketId({username: data.ano.to})
            io.to(socketId).emit("recieveMessage", {message: data.ano.message, type: "recieve"})
            // console.log("Message send")
        })

        socket.on("disconnect", ()=>{
            console.log("Client Disconnected")
        })

    })
}

const getSocketInstance=()=>io;

module.exports={initializeSocket, getSocketInstance}