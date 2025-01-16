import "./Signup.css"
import { NavLink } from "react-router-dom"

export default function Signup(){
    return (
        <div>
            <div className="login-page">
                <div className="image">
                    <img src="\src\assets\Screenshot 2025-01-13 130554.png" alt="Login Image" />
                </div>
                <div className="login-form">
                    <img src="https://fontmeme.com/images/instagram-new-logo.png"/>
                    <form >
                        <input type="email" placeholder="Enter Email" /><br />
                        <input type="password" placeholder="Enter Password" /><br />
                        <input type="text" placeholder="Enter Fullname" /><br />
                        <input type="text" placeholder="Enter Username"/><br />
                        <input type="submit" value="Sign Up" style={{marginTop: 10, color: "white", backgroundColor: "blue", cursor: "pointer"}} />
                    </form><hr style={{marginBottom: 20}} />
                    <h3>Have an account?</h3>
                    <NavLink to="/login" ><h3 style={{color: "blue", cursor: "pointer"}}>Log In</h3></NavLink>
                </div>
            </div>
        </div>
    )
}