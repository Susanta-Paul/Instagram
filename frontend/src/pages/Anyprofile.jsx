import "./Anyprofile.css"
import ImageModal from "../Components/Modal"
import {useParams, useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"

export default function Anyprofile(){

    const {username}= useParams()
    const navigate=useNavigate()
    const [user, setUser]=useState([])
    const [allpost, setAllpost]=useState([])


    async function fetchData() {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/visitProfile/${username}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            credentials: "include"
        })

        const data= await response.json()
        setUser(data.user)
        setAllpost(data.posts)
    }
    
    
    
    
    useEffect(()=>{
        fetchData()
    }, [])

    function handlemessage(){
        navigate(`/messages/${username}`)
    }


    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="complete-profile">
                <div className="profile">
                    <div className="profile-image">
                        <img src="https://photosking.net/wp-content/uploads/2024/06/korean-girl-dp_49.webp" alt="profile image" />
                    </div>
                    <div className="profile-data">
                        <div className="username">
                            <h3 style={{ fontSize: 30 }} >{user.username}</h3>
                            <button id="follow">Follow</button>
                            <button id="message" onClick={handlemessage}>Message</button>
                        </div>
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
                <div className="profile-posts">
                    {allpost.map((post, index)=>(
                        <div key={index} className="post" onClick={()=>{handleclick(post.url)}}>
                            <img src={post.url} />
                        </div>
                    ))}
                </div>
            </div>
            {/* <ImageModal isOpen={isOpen} onRequestClose={()=>{setIsopen(false)}} imageUrl={imageUrl} /> */}
        </div>
    )
}