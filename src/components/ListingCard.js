import React, { useState } from "react";

function ListingCard({ listing, onDeleteClick }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }
  function handleDelete(e) {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    });
    onDeleteClick(listing.id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">
            ★
          </button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
