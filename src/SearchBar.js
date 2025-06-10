import React from "react";

function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search notes..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
