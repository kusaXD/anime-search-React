import React from "react";
import AnimeHeader from "./AnimeHeader";
import AnimeDescription from "./AnimeDescription";
import AnimeStats from "./AnimeStats";

function AnimeCard({ animeInfo }) {
  return (
    <div className="animeCard">
      <AnimeHeader
        name={animeInfo.title.english}
        img={animeInfo.coverImage.large}
      />
      <AnimeDescription description={animeInfo.description} />
      <AnimeStats
        episodes={animeInfo.episodes}
        score={animeInfo.averageScore}
        genres={animeInfo.genres}
        endDate={animeInfo.endDate.year}
        favourites={animeInfo.favourites}
        popularity={animeInfo.popularity}
      />
    </div>
  );
}

export default AnimeCard;
