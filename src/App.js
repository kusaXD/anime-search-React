import React, { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { ANIME } from "./Appolo/anime";
import SearchForm from "./components/SearchForm";
import AnimeInfo from "./components/AnimeInfo";

function App() {
  const [value, setValue] = useState("");
  const { loading, error, data } = useQuery(ANIME, {
    variables: {
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
      <AnimeInfo data={data} />
    </div>
  );
}

export default App;
