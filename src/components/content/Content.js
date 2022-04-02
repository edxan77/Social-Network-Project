
import "./content.css"
import {Route, Routes} from "react-router-dom";
import Photo from "../../pages/photos/Photo";
import Video from "../../pages/video/Video";
import Feed from "../../pages/feed/Feed";
import Settings from "../../pages/settings/Settings";
import {useEffect, useState} from "react";
import getVideoData from "../../helper/fetchRequests";

function Content() {
    const [video, setVideo] = useState("");
    useEffect(()=>{
        getVideoData().then(res => setVideo(res));
    },[]);
    return (
        <div className={"content"}>
            <Routes>
                <Route exact path={"/"} element={<Feed/>}/>
                <Route exact path={"/photo"} element={<Photo/>}/>
                <Route exact path={"/video"} element={<Video video={video}/>}/>
                <Route exact path={"/settings"} element={<Settings/>}/>
            </Routes>
        </div>
    );
}

export default Content;