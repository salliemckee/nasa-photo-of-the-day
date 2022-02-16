import React from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const NasaPhoto = (props) => {
  return (
    <div className="nasa-photo-container">
      <h2>{props.photo.title}</h2>
      <h3>{props.photo.date}</h3>
      <ReactPlayer url={props.photo.url} className="video-player" />
      <p className="explanation">{props.photo.explanation}</p>
    </div>
  );
};

export default NasaPhoto;
