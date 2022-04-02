import "./video.css"
import React from "react";
import ReactPlayer from "react-player";

const Video = ({video}) => {

    return (
        <div className="videoPage">
            {video === "" ? "Loading..." : video.map(item =>
                <div key={item.id} className="video">
                    <p>{item.title}</p>
                  <ReactPlayer
                      controls={true}
                      url={item.url}
                      width= "250px"
                      height="150px"
                  />
                </div>)}
        </div>
    );
};

export default Video;