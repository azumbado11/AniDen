import React from "react";
import style from "./Search.module.css";
import { SearchIcon } from "../../assets/Icons";
import { useSearch } from "./Search.hooks";

const Search = () => {
  const { searchRef, handleChange } = useSearch();

  return (
    <div
      className={style.search__container}
      onClick={() => {
        searchRef.current.focus();
      }}
    >
      <SearchIcon />
      <input
        type="text"
        className={style.search__input}
        placeholder="Search..."
        ref={searchRef}
        name="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
