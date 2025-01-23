import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Search(){

    const [username, setUsername]=useState("")
    const navigate=useNavigate()

    function findsearch(e){
        // e.perventDefault()
        navigate(`/${username}`)
    }

    return (
        <div style={{padding: "20px"}}>
            <h1>Enter the username of the profile you want to visit </h1><hr />
            <form onSubmit={(e)=>{findsearch(e)}}>
                <input type="text" placeholder="Enter Username" 
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                />
                <input type="submit" value="search" />
            </form>
        </div>
    )
}