import { useState, useEffect } from "react"
import "./Explore.css"
import ImageModal from "../Components/Modal.jsx"

export default function Explore(){


    const [isOpen, setIsopen]=useState(false)
    const [imageUrl, setImageurl]=useState("")

    function handleclick(imageurl){
        setImageurl(imageurl)
        setIsopen(true)
    }


    const [explore, setExplore]=useState([
        {url: "https://animegenius-global.live3d.io/vtuber/ai_product/anime_genius/static/imgs/Itadori_Yuji_c120aa5636e44af64ca89e321468b84e.webp"},
        {url: "https://m.media-amazon.com/images/I/818DbNaethL._AC_UF1000,1000_QL80_.jpg"},
        {url: "https://i.pinimg.com/736x/95/9d/f0/959df0329307875f2ed6dc293dfb2ce4.jpg"},
        {url: "https://images-ng.pixai.art/images/orig/0eeaa198-b404-4871-bbf7-e9c1feb5d696"},
        {url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ac0fa2e9-b54e-4f7e-8f83-e09d18ab13c6/anim=false,width=450/00082-423242218.jpeg"},
        {url: "https://images-ng.pixai.art/images/orig/0a920543-17bf-47f1-8ca0-5f73f7f3691b"},
        {url: "https://beebom.com/wp-content/uploads/2023/01/Nezuko-Kamado.jpg?w=640"},
        {url: "https://image.tensorartassets.com/cdn-cgi/image/w=600/model_showcase/689844010833128607/9a950914-370a-4334-e62c-e5e2275d81cc.png"},
        {url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/img_9839.jpg"},
        {url: "https://qph.cf2.quoracdn.net/main-qimg-2fbe88ae4370d10252c6ed7b7868e7f1-lq"},
        {url: "https://imgix.ranker.com/user_node_img/50064/1001271263/original/celistia-ralgris-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355"},
        {url: "https://image.cdn2.seaart.me/2024-04-07/co8uam5e878c73945350/697ac35dcf6316427332f813b5f6e8a18c7f64d9_high.webp"}, 
        {url: "https://i.pinimg.com/564x/33/27/ec/3327ecbe534a17f6a36619b01f35b4ca.jpg"},
        {url: "https://i.pinimg.com/736x/19/bf/ae/19bfaea1543f8515f39fe4d1d3ac9756.jpg"},
        {url: "https://i.pinimg.com/564x/71/86/a2/7186a2cc6357de6d6344a2bdc1451bd1.jpg"},
        {url: "https://i.pinimg.com/736x/93/ba/23/93ba23c9bbab2335c0cc1e85b8dfd5d6.jpg"},
        {url: "https://i.pinimg.com/736x/2a/30/ff/2a30ffd6c7316eeff17fb4d3d2a6681d.jpg"}
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
                    
    
                setExplore([...data.posts, ...explore])
            }catch(error){
                console.log(error)
            }
                
        }
    
        fetchPost()
    
        }, [])


    return(
        <div style={{display: "flex", justifyContent: "center"}} >
            <div className="all-explore-posts">
                {explore.map((post, index)=>(
                    <div key={index} className="explore-post" onClick={()=>{handleclick(post.url)}}>
                        <img src={post.url}/>
                    </div>
                ))}
            </div>
            <ImageModal isOpen={isOpen} onRequestClose={()=>{setIsopen(false)}} imageUrl={imageUrl} />
        </div>
    )
}