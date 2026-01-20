import React from "react";

function AnimeInfo({ data }) {
  return (
    <div>
      {data && data.Page && (
        <div>
          {data.Page.media.map((anime) => (
            <div>
              <h2>{anime.title.english}</h2>
              <img src={anime.coverImage.large} alt="" />
              <section className="description">
                <h3>Description</h3>
                <p>{anime.description}</p>
              </section>
              <section className="info">
                <p>Episodes: {anime.episodes}</p>
                <p>Score: {anime.averageScore}</p>
                <p>Genres: {anime.genres.join(", ")}</p>
                <p>End year: {anime.endDate.year}</p>
              </section>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AnimeInfo;
