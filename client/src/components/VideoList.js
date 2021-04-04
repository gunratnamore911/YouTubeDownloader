import React from "react";

import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = (props) => {
  const renderList = props.videos.map((video) => {
    return (
      <div className="video-list utils">
        <VideoItem
          key={video.id.videoId}
          onvideoselect={props.onvideoselect}
          video={video}
        />
      </div>
    );
  });
  return <div>{renderList}</div>;
};

export default VideoList;
