import { useEffect, useState } from "react"
import "./Home.css"
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";


export default function Home(){


    const [allpost, setAllpost]=useState([
        {
            userId: "Angle_Priya",
            pp: "https://play-lh.googleusercontent.com/t2tJJ3PvHpZwSVH20B7zGBqcqMrUMnNpQ8re_BiS6vqdxboDm_RM_pcJvuRY-n8KvGA=w526-h296-rw",
            url: "https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg",
            likes: "100K",
            comment: "10K",
            shares: "69K",
            caption: "Be your own kind of beautiful. Life is too short to have boring hair."
        },
        {
            userId: "Angle_Priya",
            pp: "https://sabimages.com/wp-content/uploads/2024/07/girl-dp70.jpg",
            url: "https://photosvibe.in/wp-content/uploads/girl-dp25.jpg",
            likes: "100K",
            comment: "10K",
            shares: "69K",
            caption: "Be your own kind of beautiful. Life is too short to have boring hair."
        },
        {
            userId: "Angle_Priya",
            pp: "https://i.pinimg.com/736x/57/6c/49/576c49fbd479fa8eaf3404ce62179787.jpg",
            url: "https://photosgreet.com/wp-content/uploads/cute-instagram-profile-picture_53.webp",
            likes: "100K",
            comment: "10K",
            shares: "69K",
            caption: "Be your own kind of beautiful. Life is too short to have boring hair."
        },
        {
            userId: "Angle_Priya",
            pp: "https://content.tupaki.com/h-upload/2024/10/18/555357-10818tek.webp",
            url: "https://photosly.net/wp-content/uploads/2023/11/real-girl-pic49.jpg",
            likes: "100K",
            comment: "10K",
            shares: "69K",
            caption: "Be your own kind of beautiful. Life is too short to have boring hair."
        },

    ])

    useEffect(()=>{

        async function fetchPost() {

            try{
                const response= await fetch(`${import.meta.env.VITE_BASE_URL}/user/posts`, {
                    method: "GET", 
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })

                const data= await response.json()
                

                setAllpost([...data.posts, ...allpost])
            }catch(error){
                console.log(error)
            }
            
        }

        fetchPost()

    }, [])


    return(
        <div> 
            <div className="feed">
                <div className="posts">
                    {allpost.map((post, index)=>(
                        <div key={index} className="post">
                            <div className="info">
                                <div className="pp">
                                    <img src={post.user} alt="Profile-picture" />
                                </div>
                                <h2 style={{fontSize: 15}} >{post.userId}</h2>
                            </div>
                            <div className="home-content">
                                <img src={post.url} alt="Image" />
                            </div>
                            <div className="interect">
                                <div className="com">
                                    <CiHeart style={{height: 30, width: 30, cursor: "pointer"}} />
                                    <FaRegComment style={{height: 25, width: 25, cursor: "pointer"}} />
                                    <IoPaperPlaneOutline style={{height: 25, width: 25, cursor: "pointer"}} />
                                </div>
                                <div className="save"><FaRegBookmark style={{height: 25, width: 25, cursor: "pointer"}}/></div>
                            </div>
                            <h3 style={{marginTop: 5, fontSize: 15}} > {post.likes} </h3>
                            <div className="caption" style={{marginTop: 10, marginBottom: 10}} >
                                <p>{post.caption} </p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="suggessions"></div> */}
        </div>
    )
}