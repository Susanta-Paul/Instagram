import { useContext, useEffect, useState } from "react"
import "./Profile.css"
import { context } from "../pages/Context"


export default function Profile(){


    const [user, setUser]=useState({})


    useEffect(()=>{

        async function fetchData() {

            try{
                const response= await fetch(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
                    method: "GET",
                    headers:{
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    },
                    credentials: 'include'
                })
                const data= await response.json()
                // console.log(data)
                setUser(data.user)
            }catch(error){
                console.log("Some Error occur", error)
            }
            
        }

        fetchData()

        
    }, [])


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
                            <h3>{user.followers ? user.followers.length : 0}Followers</h3>
                            <h3>{user.followings ? user.followings.length : 0} Followings</h3>
                        </div>
                        <div className="bio">
                            <h4>{user.fullname}</h4>
                            <p>whole bio goes here.........</p>
                        </div>
                    </div>
                </div><hr style={{ marginTop: 50, marginBottom: 50}} />
                <div className="profile-posts"></div>
            </div>
        </div>
    )
}