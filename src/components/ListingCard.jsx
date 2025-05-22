import React from 'react';

function ListingCard({ listing, onFavoriteToggle, onDelete }) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {listing.isFavorite ? (
          <button className="emoji-button favorite active" onClick={() => onFavoriteToggle(listing.id)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => onFavoriteToggle(listing.id)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(listing.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
