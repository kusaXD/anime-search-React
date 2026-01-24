import React from "react";
import AnimeStats from "./AnimeStats";

function AnimeDescription({
  description,
  episodes,
  score,
  genres,
  favourites,
  popularity,
}) {
  return (
    <div className="animeDescription">
      <span>description</span>
      <span dangerouslySetInnerHTML={{ __html: description }}></span>
      <AnimeStats
        episodes={episodes}
        score={score}
        genres={genres}
        favourites={favourites}
        popularity={popularity}
      />
    </div>
  );
}

export default AnimeDescription;
