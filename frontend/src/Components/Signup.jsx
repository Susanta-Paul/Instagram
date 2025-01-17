// import { Axios } from "axios"
import { useContext, useState, useEffect } from "react"
import "./Signup.css"
import { NavLink, useNavigate } from "react-router-dom"
import { context } from "../pages/Context"

export default function Signup(){
    
    const navigate =useNavigate()
    const token=localStorage.getItem("token")
    
        useEffect(()=>{
            if(token){
                navigate("/")
                return
            }
        },[])
        if(token){
            return
        }

    const [fullname, setFullname]=useState("")
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const {user, setUser}= useContext(context)

    async function handleSubmit(e){
        e.preventDefault()
        const newUser={
            fullname: fullname,
            email: email,
            password: password,
            username: username
        }

        try{
            const response= await fetch(`${import.meta.env.VITE_BASE_URL}/user/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser)
            })
            const data=await response.json()
            console.log(data)

            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate("/")
        }catch(error){
            console.log("some error occurs", error)
        }
        

    }

    return (
        <div>
            <div className="login-page">
                <div className="image">
                    <img src="\src\assets\Screenshot 2025-01-13 130554.png" alt="Login Image" />
                </div>
                <div className="login-form">
                    <img src="https://fontmeme.com/images/instagram-new-logo.png"/>
                    <form onSubmit={(e)=>{handleSubmit(e)}} >
                        <input type="email" placeholder="Enter Email"
                            onChange={(e)=>{setEmail(e.target.value)}}
                            value={email}
                         /><br />
                        <input type="password" placeholder="Enter Password" 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            value={password}
                        /><br />
                        <input type="text" placeholder="Enter Fullname" 
                            onChange={(e)=>{setFullname(e.target.value)}}
                            value={fullname}
                        /><br />
                        <input type="text" placeholder="Enter Username"
                            onChange={(e)=>{setUsername(e.target.value)}}
                            value={username}
                        /><br />
                        <input type="submit" value="Sign Up" style={{marginTop: 10, color: "white", backgroundColor: "blue", cursor: "pointer"}} />
                    </form><hr style={{marginBottom: 20}} />
                    <h3>Have an account?</h3>
                    <NavLink to="/login" ><h3 style={{color: "blue", cursor: "pointer"}}>Log In</h3></NavLink>
                </div>
            </div>
        </div>
    )
}