import { useState } from "react";
import "./Upload.css"
import { GrGallery } from "react-icons/gr";
// import {Toaster, toast, saveSettings} from "react-hot-toast"

export default function Upload(){

    const [file, setFile]=useState(null)
    const [caption, setCaption]=useState("Write Your Caption Here")

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
            // toast.promise(
            //     saveSettings(settings),
            //      {
            //        loading: 'Saving...',
            //        success: <b>Settings saved!</b>,
            //        error: <b>Could not save.</b>,
            //      }
            //    );
            const response= await fetch(`${import.meta.env.VITE_BASE_URL}/user/upload`, {
                method: "POST", 
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }, 
                credentials: "include", 
                body: formData, 
            })
            const data=await response.json()
            console.log(data)
        }catch(e){
            console.log("Some error Occur", e)
        }
    }


    return (
        <div>
            {/* <Toaster
                position="top-center"
                reverseOrder={false}
                /> */}
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