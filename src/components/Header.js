import React from "react";
import Search from "./Search";

function Header({ allListings, setFilteredResults }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search allListings={allListings} setFilteredResults={setFilteredResults} />
    </header>
  );
}

export default Header;
