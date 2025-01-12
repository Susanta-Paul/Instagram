import { useState } from "react"
import "./Home.css"
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";


export default function Home(){


    const [allpost, setAllpost]=useState([
        {
            username: "Angle_Priya",
            pp: "https://play-lh.googleusercontent.com/t2tJJ3PvHpZwSVH20B7zGBqcqMrUMnNpQ8re_BiS6vqdxboDm_RM_pcJvuRY-n8KvGA=w526-h296-rw",
            content: "https://photosgreet.com/wp-content/uploads/ddd5e16d0fa25d3c110b9d95c2530224.jpg",
            likes: "100K",
            comment: "10K",
            shares: "69K",
            caption: "Be your own kind of beautiful. Life is too short to have boring hair."
        },
        {
            username: "Angle_Priya",
            pp: "https://sabimages.com/wp-content/uploads/2024/07/girl-dp70.jpg",
            content: "https://photosvibe.in/wp-content/uploads/girl-dp25.jpg",
            likes: "100K",
            comment: "10K",
            shares: "69K",
            caption: "Be your own kind of beautiful. Life is too short to have boring hair."
        },
        {
            username: "Angle_Priya",
            pp: "https://i.pinimg.com/736x/57/6c/49/576c49fbd479fa8eaf3404ce62179787.jpg",
            content: "https://m.media-amazon.com/images/I/515aq1ptCWL._AC_UF1000,1000_QL80_.jpg",
            likes: "100K",
            comment: "10K",
            shares: "69K",
            caption: "Be your own kind of beautiful. Life is too short to have boring hair."
        },
        {
            username: "Angle_Priya",
            pp: "https://content.tupaki.com/h-upload/2024/10/18/555357-10818tek.webp",
            content: "https://i.pinimg.com/736x/9a/a6/7b/9aa67b7a503962af8f80b4f7ad198f1f.jpg",
            likes: "100K",
            comment: "10K",
            shares: "69K",
            caption: "Be your own kind of beautiful. Life is too short to have boring hair."
        },

    ])


    return(
        <div>
            <div className="feed">
                <div className="posts">
                    {allpost.map((post, index)=>(
                        <div key={index} className="post">
                            <div className="info">
                                <div className="pp">
                                    <img src={post.pp} alt="Profile-picture" />
                                </div>
                                <h2 style={{fontSize: 15}} >{post.username}</h2>
                            </div>
                            <div className="content">
                                <img src={post.content} alt="Image" />
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