import React from "react";

import "./VideoDetail.css";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube-nocookie.com/embed/${video.id.videoId}`;
  return (
    <div className="video_responsive">
      <iframe
        className="video__play"
        title="video player"
        src={videoSrc}
        allowFullScreen
        frameBorder="0"
      ></iframe>
      <div className="content">
        <h4 className="header">{video.snippet.title}</h4>
        <p className="para">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
