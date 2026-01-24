import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client/react";
import { ANIME } from "./Appolo/anime";
import SearchForm from "./components/SearchForm";
import AnimeList from "./components/AnimeList";
import "./styles/App.css";

function App() {
  const [value, setValue] = useState("");
  const [getAnime, { loading, error, data }] = useLazyQuery(ANIME);

  return (
    <div className="App">
      <h1>Anime Search</h1>
      <SearchForm value={value} setValue={setValue} getAnime={getAnime} />

      {loading && (
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "30px",
            color: "white",
          }}
        >
          loading...
        </p>
      )}
      {error && (
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "30px",
            color: "red",
          }}
        >
          error: {error.message}
        </p>
      )}
      <AnimeList data={data} />
    </div>
  );
}

export default App;
