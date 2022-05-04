import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ filteredResults, onDeleteClick }) {
  return (
    <main>
      <ul className="cards">
        {filteredResults.map((listing) => (
          <ListingCard onDeleteClick={onDeleteClick} listing={listing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
