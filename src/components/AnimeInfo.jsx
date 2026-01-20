import React from "react";

function AnimeInfo({ data }) {
  return (
    <div>
      {data && data.Page && (
        <div>
          {data.Page.media.map((anime) => (
            <h3>{anime.description}</h3>
          ))}
        </div>
      )}
    </div>
  );
}

export default AnimeInfo;
