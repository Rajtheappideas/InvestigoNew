import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoPopup = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="video__area">
          <img
            src={require("../../assets/images/video-illustration.png")}
            alt="Video Illustration"
          />
          <div className="video__btn">
            <a
              className="video__popup"
              href="https://www.youtube.com/watch?v=LCihLrSehCo"
              target="_blank"
              title="YouTube video player"
            >
              <FontAwesomeIcon icon={faPlay} color="blue" size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
