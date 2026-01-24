import React from "react";

function AnimeHeader({ name, img }) {
  return (
    <div className="animeHeader">
      <img src={img} alt="" />
    </div>
  );
}

export default AnimeHeader;
