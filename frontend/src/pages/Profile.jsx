import { useContext, useEffect } from "react"
import "./Profile.css"
import { context } from "../pages/Context"


export default function Profile(){


    const {user, setUser}=useContext(context)


    // useEffect(()=>{

    // }, [])


    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="complete-profile">
                <div className="profile">
                    <div className="profile-image">
                        <img src="https://photosking.net/wp-content/uploads/2024/06/korean-girl-dp_49.webp" alt="profile image" />
                    </div>
                    <div className="profile-data">
                        <h3 style={{ fontSize: 30 }} >{user.username}</h3>
                        <div className="follow">
                            <h3>100 Posts</h3>
                            <h3>100K Followers</h3>
                            <h3>10 Followings</h3>
                        </div>
                        <div className="bio">
                            <h4>Fullname</h4>
                            <p>whole bio goes here.........</p>
                        </div>
                    </div>
                </div><hr style={{ marginTop: 50, marginBottom: 50}} />
                <div className="profile-posts"></div>
            </div>
        </div>
    )
}