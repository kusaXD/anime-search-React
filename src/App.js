import React, { useState } from "react";
import { useQuery } from "@apollo/client/react";
import { ANIME } from "./Appolo/anime";
import client from "./Appolo/client";

function App() {
  const [value, setValue] = useState("");
  const { loading, error, data } = useQuery(ANIME, {
    variables: {
      search: value,
      page: 1,
      perPage: 10,
    },
  });

  return (
    <div className="App">
      <h1>Anime Search</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button>Search</button>

      {loading && <p>loading...</p>}
      {error && <p>error: {error.message}</p>}

      {data && data.Page && (
        <div>
          {data.Page.media.map((anime) => (
            <h3>{anime.description}</h3>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
