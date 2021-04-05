import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onvideoselect }) => {
  return (
    <div className="group">
      <div
        onClick={() => {
          onvideoselect(video);

          window.scrollTo(0, 0);
        }}
        className="video-item"
      >
        <img
          className="image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <div className="content">
          <h1 className="header">{video.snippet.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
