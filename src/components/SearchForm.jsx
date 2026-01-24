import React from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

function SearchForm({ value, setValue, getAnime }) {
  function getData(e) {
    e.preventDefault();
    getAnime({
      variables: {
        mode: "no-cors",
        search: value,
        page: 1,
        perPage: 1,
      },
    });
  }

  return (
    <form className="Myform">
      <MyInput value={value} onChange={(e) => setValue(e.target.value)} />
      <MyButton onClick={(e) => getData(e)}>search</MyButton>
    </form>
  );
}

export default SearchForm;
