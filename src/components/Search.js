import React, { useState } from "react";

function Search({ allListings, setFilteredResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const filteredListings = allListings.filter((result) => {
      if (result.description.toLowerCase().includes(searchTerm)) {
        return result;
      }
    });
    setFilteredResults(filteredListings);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input type="text" id="search" placeholder="search free stuff" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
