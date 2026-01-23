import React from "react";

function AnimeStats({
  episodes,
  score,
  genres,
  endDate,
  favourites,
  popularity,
}) {
  return (
    <div className="animeStats">
      <p>Episodes: {episodes}</p>
      <p>Score: {score}</p>
      <p>Genres: {genres.join(", ")}</p>
      <p>End year: {endDate.year}</p>
      <p>favourites: {favourites}</p>
      <p>popularity: {popularity}</p>
    </div>
  );
}

export default AnimeStats;
