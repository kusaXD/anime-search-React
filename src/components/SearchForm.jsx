import React from "react";

function SearchForm(props) {
  return (
    <form>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      ></input>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
