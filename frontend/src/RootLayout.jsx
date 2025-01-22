import { Outlet, NavLink, useNavigate } from "react-router-dom"
import Feature from "./Components/Feature.jsx"
import { GoHome } from "react-icons/go";
import { useState } from "react";
import { IoLogOut, IoSearchOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaYoutube } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import "./Root.css"


export default function RootLayout(){

    const navigate=useNavigate()

    const [allfeatues, setFeatures] = useState([
        {logo: <GoHome style={{width: "30px", height: "30px"}} /> , name:"Home", path: "/"},
        {logo:< IoSearchOutline style={{width: "30px", height: "30px"}} /> , name:"Search", path: "/"},
        {logo:<MdOutlineExplore style={{width: "30px", height: "30px"}}  /> , name:"Explore", path: "/explore"},
        {logo:<FaYoutube style={{width: "30px", height: "30px"}}  /> , name:"Reels", path: "/"},
        {logo:<RiMessengerLine style={{width: "30px", height: "30px"}}  /> , name:"Messages", path: "/messages/towhom"},
        {logo:<FaRegHeart style={{width: "30px", height: "30px"}}  /> , name:"Notifications", path: "/"},
        {logo:<FaRegPlusSquare style={{width: "30px", height: "30px"}}  /> , name:"Create", path: "/upload"},
        {logo:<FaRegCircle style={{width: "30px", height: "30px"}}  /> , name:"Profile", path: "/profile"},
        
])


    function handleLogout(){
        localStorage.removeItem("token")
        navigate("/login")
    }

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
                        <div style={{width: "100%",cursor: "pointer"}} onClick={handleLogout}>
                            <IoIosLogOut />LogOut
                        </div>
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