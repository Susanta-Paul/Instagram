import { useEffect } from "react"
import {useNavigate} from "react-router-dom"


export default function UserProtected({children}){

    const token= localStorage.getItem("token")
    const navigate=useNavigate()

    useEffect(()=>{
        if(!token){
            navigate("/login");
        }
    }, [token])

    if(!token){
        // navigate("/login")   
        return 
    }

    return(
        <>
            {children}
        </>
    )
}