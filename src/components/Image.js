import React from "react";

const Image = ({ photo }) => {
  return (
    <>
      <figure key={new Date(photo.date).getTime()} className="photo-container">
        <h2>{photo.title}</h2>
        <p>{photo.date}</p>
        <img src={photo.hdurl} alt={photo.title} />
      </figure>
      <figcaption>
        <p>{photo.explanation}</p>
      </figcaption>
    </>
  );
};

export default Image;
