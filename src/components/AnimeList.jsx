import React from "react";
import AnimeCard from "./AnimeCard";

function AnimeList({ data }) {
  return (
    <div>
      {data && data.Page && (
        <div>
          {data.Page.media.map((anime) => (
            <div>
              <AnimeCard animeInfo={anime} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AnimeList;
