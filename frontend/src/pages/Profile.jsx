import { useContext, useEffect, useState } from "react"
import "./Profile.css"
import { context } from "../pages/Context"
import ImageModal from "../Components/Modal"


export default function Profile(){


    const [user, setUser]=useState({})
    const [allpost, setAllpost]=useState([
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
        {url: "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" , caption: "any caption"},
    ])

    const [isOpen, setIsopen]=useState(false)
    const [imageUrl, setImageurl]=useState("")

    function handleclick(imageurl){
        setImageurl(imageurl)
        setIsopen(true)
    }


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
                setAllpost(data.posts)
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
                        <img src="https://e7.pngegg.com/pngimages/798/436/png-clipart-computer-icons-user-profile-avatar-profile-heroes-black-thumbnail.png" alt="profile image" />
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
                <div className="profile-posts">
                    {allpost.map((post, index)=>(
                        <div key={index} className="post" onClick={()=>{handleclick(post.url)}}>
                            <img src={post.url} />
                        </div>
                    ))}
                </div>
            </div>
            <ImageModal isOpen={isOpen} onRequestClose={()=>{setIsopen(false)}} imageUrl={imageUrl} />
        </div>
    )
}