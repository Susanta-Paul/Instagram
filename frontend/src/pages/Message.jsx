import { useState } from "react"
import "./Message.css"
import socket from "../Components/Socket"

export default function Message(){

    const [msg, setMsg]=useState("")

    const [whom, setWhom]=useState("")

    const [allmessages, setAllmessages]=useState([
        {message: "HEllo, world !", type: "send"},
        {message: "hey dude !", type: "recieve"},
    ])

    function handlesubmit(e){
        e.preventDefault()
        const ano={message: msg, type: "send", to: whom}
        setAllmessages([...allmessages, ano])
        setMsg("")

        socket.emit("sendMessage", {ano})
    }

    socket.on("recieveMessage", (data)=>{
        console.log(data.message)
        setAllmessages([...allmessages, data])
    })


    return(
        <div style={{height: "100%" , width: "100%", display: "flex", alignItems: "center", flexDirection: "column", gap: 15}}>
            <input type="text" placeholder="To Whom"
                value={whom} 
                onChange={(e)=>{setWhom(e.target.value)}}
            />
            <div className="all-messages">
                {allmessages.map((message, index)=>(
                    message.type==="send"? (
                        <div key={index} style={{textAlign: "right", fontSize: 25, marginTop: "10px"}}>{message.message}</div>
                    ):(
                        <div key={index} style={{fontSize: 25, marginTop: "10px"}}>{message.message}</div>
                    )
                ))}
            </div>
            <form onSubmit={(e)=>{handlesubmit(e)}}>
                <input type="text" placeholder="Enter Message"
                    value={msg}
                    onChange={(e)=>{setMsg(e.target.value)}}
                />
                <input type="submit" value="send" />
            </form>
        </div>
    )
}