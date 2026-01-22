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
                <p dangerouslySetInnerHTML={{ __html: anime.description }}></p>
              </section>
              <section className="info">
                <p>Episodes: {anime.episodes}</p>
                <p>Score: {anime.averageScore}</p>
                <p>Genres: {anime.genres.join(", ")}</p>
                <p>End year: {anime.endDate.year}</p>
                <p>favourites: {anime.favourites}</p>
                <p>popularity: {anime.popularity}</p>
              </section>
            </div>
          ))}
          {/* {data.Page.media.characters.map((characters) => (
            <div>
              <p>{characters.nodes.name.full}</p>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
}

export default AnimeInfo;
