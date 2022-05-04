import React, { useEffect, useState } from "react";

import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [allListings, setAllListings] = useState([]);
  const [filteredResults, setFilteredResults] = useState(allListings);

  function onDeleteClick(id) {
    const updatedListingsArray = allListings.filter((listing) => listing.id !== id);
    setFilteredResults(updatedListingsArray);
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setAllListings(data);
        setFilteredResults(data);
      });
  }, []);

  useEffect(() => {
    setAllListings(filteredResults);
  }, [filteredResults]);

  return (
    <div className="app">
      <Header allListings={allListings} setFilteredResults={setFilteredResults} />
      <ListingsContainer onDeleteClick={onDeleteClick} filteredResults={filteredResults} />
    </div>
  );
}

export default App;
