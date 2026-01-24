import React from "react";

function AnimeStats({ episodes, score, genres, favourites, popularity }) {
  return (
    <div className="animeStats">
      <p>Episodes: {episodes}</p>
      <p>Score: {score}</p>
      <p>Genres: {genres.join(", ")}</p>
      <p>favourites: {favourites}</p>
      <p>popularity: {popularity}</p>
    </div>
  );
}

export default AnimeStats;
