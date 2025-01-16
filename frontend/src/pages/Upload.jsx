import { useState } from "react";
import "./Upload.css"
import { GrGallery } from "react-icons/gr";

export default function Upload(){

    const [file, setFile]=useState()
    const [caption, setCaption]=useState("Write Your Caption Here")

    function handleSubmit(e){
        e.preventDefault()
        console.log(file)
    }


    return (
        <div>
            <div className="upload-body">
                <div className="upload">
                    <div className="p"><b>Create New Post</b></div><hr />
                    <div id="upload">
                        <GrGallery style={{height: 50, width: 50}} />
                        Drag photos and videos here
                        <form onSubmit={(e)=>{handleSubmit(e)}} >
                            <input required type="file" accept="image/*,video/*"
                                onChange={(e)=>{setFile(e.target.files)}}
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