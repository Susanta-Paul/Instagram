import "./Upload.css"
import { GrGallery } from "react-icons/gr";

export default function Upload(){
    return (
        <div>
            <div className="upload-body">
                <div className="upload">
                    <div className="p"><b>Create New Post</b></div><hr />
                    <div id="upload">
                        <GrGallery style={{height: 50, width: 50}} />
                        Drag photos and videos here
                        <form >
                            <input type="file" accept="image/*,video/*"/><br />
                            <input type="submit" value="Upload" id="input" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}