import { createContext, useContext, useState } from "react"


export const context=createContext()


export default function ContextProvider({children}){

    const [user, setUser]=useState({
        fullname: "",
        username: "",
        email: "",
        posts: 0,
        followers: 0,
        followings: 0
    })


    return (
        <context.Provider value={{user, setUser}} >
            {children}
        </context.Provider>
    )
}    