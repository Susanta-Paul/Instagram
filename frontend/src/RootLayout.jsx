import { Outlet } from "react-router-dom"
import Feature from "./Components/Feature.jsx"
import { GoHome } from "react-icons/go";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import "./Root.css"
import Home from "./pages/Home.jsx"
import Explore from "./pages/Explore.jsx";
import Upload from "./pages/Upload.jsx";


export default function RootLayout(){

    const [allfeatues, setFeatures] = useState([
        {logo: <GoHome style={{width: "30px", height: "30px"}} /> , name:"Home"},
        {logo:< IoSearchOutline style={{width: "30px", height: "30px"}} /> , name:"Search"},
        {logo:<MdOutlineExplore style={{width: "30px", height: "30px"}}  /> , name:"Explore"},
        {logo:<FaYoutube style={{width: "30px", height: "30px"}}  /> , name:"Reels"},
        {logo:<RiMessengerLine style={{width: "30px", height: "30px"}}  /> , name:"Messages"},
        {logo:<FaRegHeart style={{width: "30px", height: "30px"}}  /> , name:"Notifications"},
        {logo:<FaRegPlusSquare style={{width: "30px", height: "30px"}}  /> , name:"Create"},
        {logo:<FaRegCircle style={{width: "30px", height: "30px"}}  /> , name:"Profile"},
])



    return(
        <div>
            <div className="body">
                <div className="sidebar">
                    <div className="insta-name">
                        <img src="https://fontmeme.com/images/instagram-new-logo.png" alt="Instagram" />
                    </div>
                    <div className="featues">
                        {allfeatues.map((feature,index)=>(
                            <div key={index} style={{width: "100%"}}>
                                <Feature logo={feature.logo} featureName={feature.name} />
                            </div>
                        ))}
                    </div>
                    <div className="more"></div>
                </div>
                <div className="main">
                    {/* <Home/> */}
                    <Explore/>
                    {/* <Upload/> */}
                </div>
            </div>
        </div>
    )
}