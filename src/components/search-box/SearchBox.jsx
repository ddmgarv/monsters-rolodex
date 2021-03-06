import React from "react";
import "./search.css";

const SearchBox = ({ placeholder, handleSearch }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleSearch}
    />
  );
};

export default SearchBox;
