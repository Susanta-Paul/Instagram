import { Outlet, NavLink } from "react-router-dom"
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


export default function RootLayout(){

    const [allfeatues, setFeatures] = useState([
        {logo: <GoHome style={{width: "30px", height: "30px"}} /> , name:"Home", path: "/"},
        {logo:< IoSearchOutline style={{width: "30px", height: "30px"}} /> , name:"Search", path: "/"},
        {logo:<MdOutlineExplore style={{width: "30px", height: "30px"}}  /> , name:"Explore", path: "/explore"},
        {logo:<FaYoutube style={{width: "30px", height: "30px"}}  /> , name:"Reels", path: "/"},
        {logo:<RiMessengerLine style={{width: "30px", height: "30px"}}  /> , name:"Messages", path: "/"},
        {logo:<FaRegHeart style={{width: "30px", height: "30px"}}  /> , name:"Notifications", path: "/"},
        {logo:<FaRegPlusSquare style={{width: "30px", height: "30px"}}  /> , name:"Create", path: "/upload"},
        {logo:<FaRegCircle style={{width: "30px", height: "30px"}}  /> , name:"Profile", path: "/"},
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
                            <NavLink to={feature.path}  key={index} >
                                <div style={{width: "100%"}}>
                                    <Feature logo={feature.logo} featureName={feature.name} />
                                </div>
                            </NavLink>
                        ))}
                    </div>
                    <div className="more"></div>
                </div>
                <div className="main">
                    {/* <Home/> */}
                    {/* <Explore/> */}
                    {/* <Upload/> */}
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}