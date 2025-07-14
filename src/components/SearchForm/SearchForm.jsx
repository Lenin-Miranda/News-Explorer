import { useState } from "react";

export default function SearchForm({
  search,
  setSearch,
  onSubmit,
  handleEnter,
}) {
  return (
    <form onSubmit={onSubmit} className="header__form">
      <label className="header__label" htmlFor="search">
        <input
          className="header__input"
          id="search"
          placeholder="Enter topic"
          value={search}
          onKeyDown={handleEnter}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button type="submit" className="header__label-button">
          Search
        </button>
      </label>
    </form>
  );
}
