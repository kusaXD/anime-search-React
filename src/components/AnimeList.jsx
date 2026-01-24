import React from "react";
import AnimeCard from "./AnimeCard";

function AnimeList({ data }) {
  return (
    <div className="animeList">
      {data && data.Page && (
        <div>
          {data.Page.media.map((anime) => (
            <AnimeCard animeInfo={anime} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AnimeList;
