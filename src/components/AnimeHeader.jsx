import React from "react";

function AnimeHeader({ name, img }) {
  return (
    <div className="animeHeader">
      <h2>{name}</h2>
      <img src={img} alt="" />
    </div>
  );
}

export default AnimeHeader;
