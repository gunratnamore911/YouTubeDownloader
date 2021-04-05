import React from "react";

import GetAppIcon from "@material-ui/icons/GetApp";
import "./VideoDetail.css";
const VideoDetail = ({ video }) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  const host = window.location.hostname;
  const getmyvideo = (id) => {
    const green = document.getElementById("green");
    green.addEventListener("click", function rw() {
      sendURL(id);
      green.removeEventListener("click", rw);
    });
  };
  function sendURL(URL) {
    if (host === "localhost") {
      const localh = "http://localhost:5000";
      window.open(`${localh}/download?URL=${URL}`);
    } else {
      window.open(`${host}/download?URL=${URL}`);
    }
  }

  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube-nocookie.com/embed/${video.id.videoId}`;
  return (
    <>
      <div className="video_responsive">
        <iframe
          className="video__play"
          title="video player"
          src={videoSrc}
          allowFullScreen
          frameBorder="0"
        ></iframe>
        <div className="content">
          <button
            className="green"
            id="green"
            onClick={(e) => getmyvideo(`https://youtu.be/${video.id.videoId}`)}
          >
            <GetAppIcon />
            video
          </button>

          <h4 className="header">{video.snippet.title}</h4>
          <p className="para">{video.snippet.description}</p>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
