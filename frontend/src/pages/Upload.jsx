import { useState } from "react";
import "./Upload.css"
import { GrGallery } from "react-icons/gr";
import {Toaster, toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"

export default function Upload(){

    const [file, setFile]=useState(null)
    const [caption, setCaption]=useState("Write Your Caption Here")
    const navigate=useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        if(!file){
            return 
        }
        const formData= new FormData()
        formData.append("file", file)
        formData.append("caption", caption)

        for (let pair of formData.entries()){
            console.log(`${pair[0]}: ${pair[1]}`); }

        try{
            const fetchPromise= fetch(`${import.meta.env.VITE_BASE_URL}/user/upload`, {
                method: "POST", 
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                }, 
                credentials: "include", 
                body: formData, 
            })
            toast.promise(
                fetchPromise,
                {
                    loading: 'Uploading...',
                    success: <b>Successfully Uploaded</b>,
                    error: <b>Failed to uplaod.</b>,
                }
            );
            const response= await fetchPromise
            const data=await response.json()
            // console.log(data)
            navigate("/")

        }catch(e){
            console.log("Some error Occur", e)
        }
    }


    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                />
            <div className="upload-body">
                <div className="upload">
                    <div className="p"><b>Create New Post</b></div><hr />
                    <div id="upload">
                        <GrGallery style={{height: 50, width: 50}} />
                        Drag photos and videos here
                        <form onSubmit={(e)=>{handleSubmit(e)}} >
                            <input required type="file" accept="image/*,video/*"
                                onChange={(e)=>{setFile(e.target.files[0])}}
                            /><br />
                            <textarea required name="captions" rows={7} cols={30}
                                onChange={(e)=>{setCaption(e.target.value)}}
                                value={caption}
                                ></textarea><br />
                            <input type="submit" value="Upload" id="input" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}