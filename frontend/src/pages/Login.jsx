import { useContext, useEffect, useState } from "react"
import "./Login.css"
import { NavLink } from "react-router-dom"
import { context } from "../pages/Context"
import { useNavigate } from "react-router-dom"
import { connectSocket } from "../Components/Socket"

export default function Login(){
    
    const navigate=useNavigate()
    const token=localStorage.getItem("token")

    useEffect(()=>{
        if(token){
            navigate("/")
        }
    },[])
    if(token){
        return null
    }


    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const {user, setUser}=useContext(context)


    async function handleLogin(e){
        e.preventDefault()
        const verifyUser={
            username: username,
            password: password
        }

        try{
            const response=await fetch(`${import.meta.env.VITE_BASE_URL}/user/login`, {
                method: "POST",
                credentials:'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(verifyUser)
            })
            const data=await response.json()
            // console.log(data)

            setUser(data.user)
            if(data.token){
                localStorage.setItem('token', data.token)
                connectSocket()
                navigate("/")
            }
            else{console.log("Token Not Found")}
            

        }catch(error){
            console.log("some error occurs", error)
        }
        
    }



    return (
        <div>
            <div className="login-page">
                <div className="image">
                    <img src="https://img.freepik.com/free-photo/woman-showing-instagram-icon_53876-65416.jpg" alt="Login Image" />
                </div>
                <div className="login-form">
                    <img src="https://fontmeme.com/images/instagram-new-logo.png"/>
                    <form onSubmit={(e)=>{handleLogin(e)}} >
                        <input type="text" placeholder="Enter Username"
                            onChange={(e)=>{setUsername(e.target.value)}}
                            value={username}
                        /><br />
                        <input type="password" placeholder="Enter Password" 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            value={password}
                        /><br />
                        <input type="submit" value="LogIn" style={{marginTop: 10, color: "white", backgroundColor: "blue", cursor: "pointer"}} />
                    </form><hr style={{marginBottom: 20}} />
                    <h3>Don't have an account?</h3>
                    <NavLink to="/signup" ><h3 style={{color: "blue", cursor: "pointer"}}>Sign Up</h3></NavLink>
                </div>
            </div>
        </div>
    )
}