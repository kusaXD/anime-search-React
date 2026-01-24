import React from "react";
import AnimeHeader from "./AnimeHeader";
import AnimeDescription from "./AnimeDescription";
import AnimeStats from "./AnimeStats";

function AnimeCard({ animeInfo }) {
  return (
    <div className="animeCard">
      <AnimeHeader img={animeInfo.coverImage.large} />
      <AnimeDescription
        description={animeInfo.description}
        episodes={animeInfo.episodes}
        score={animeInfo.averageScore}
        genres={animeInfo.genres}
        favourites={animeInfo.favourites}
        popularity={animeInfo.popularity}
      />
    </div>
  );
}

export default AnimeCard;
