import React, { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { ANIME } from "./Appolo/anime";
import SearchForm from "./components/SearchForm";
import AnimeList from "./components/AnimeList";
import "./styles/App.css";

function App() {
  const [value, setValue] = useState("");
  const { loading, error, data } = useQuery(ANIME, {
    variables: {
      mode: "no-cors",
      search: value,
      page: 1,
      perPage: 1,
    },
  });

  return (
    <div className="App">
      <h1>Anime Search</h1>
      <SearchForm value={value} setValue={setValue} />

      {loading && <p>loading...</p>}
      {error && <p>error: {error.message}</p>}
      <AnimeList data={data} />
    </div>
  );
}

export default App;
