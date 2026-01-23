import React from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

function SearchForm(props) {
  return (
    <form className="Myform">
      <MyInput
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <MyButton>search</MyButton>
    </form>
  );
}

export default SearchForm;
