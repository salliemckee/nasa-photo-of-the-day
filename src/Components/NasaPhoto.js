import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
50% {
  opacity: 0;
}
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledNasaPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #abdbe3;
  font-family: "Cairo", sans-serif;

  .image {
    max-width: 70%;
    padding: 10px;
    border: 3px solid black;

    animation: ${kf} 0.5s ease-in-out backwards;
  }
  .explanation {
    max-width: 70%;
  }
`;

const NasaPhoto = (props) => {
  return (
    <StyledNasaPhoto className="nasa-photo-container">
      <h2>{props.photo.title}</h2>
      <h3>{props.photo.date}</h3>
      <img src={props.photo.hdurl} className="image" />
      <p className="explanation">{props.photo.explanation}</p>
    </StyledNasaPhoto>
  );
};

export default NasaPhoto;
