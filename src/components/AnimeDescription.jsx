import React from "react";

function AnimeDescription({ description }) {
  return (
    <div className="animeDescription">
      <h3>description</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
}

export default AnimeDescription;
