import "./Login.css"
import { NavLink } from "react-router-dom"

export default function Login(){
    return (
        <div>
            <div className="login-page">
                <div className="image">
                    <img src="\src\assets\Screenshot 2025-01-13 130554.png" alt="Login Image" />
                </div>
                <div className="login-form">
                    <img src="https://fontmeme.com/images/instagram-new-logo.png"/>
                    <form >
                        <input type="text" placeholder="Enter Username"/><br />
                        <input type="password" placeholder="Enter Password" /><br />
                        <input type="submit" value="LogIn" style={{marginTop: 10, color: "white", backgroundColor: "blue", cursor: "pointer"}} />
                    </form><hr style={{marginBottom: 20}} />
                    <h3>Don't have an account?</h3>
                    <NavLink to="/signup" ><h3 style={{color: "blue", cursor: "pointer"}}>Sign Up</h3></NavLink>
                </div>
            </div>
        </div>
    )
}