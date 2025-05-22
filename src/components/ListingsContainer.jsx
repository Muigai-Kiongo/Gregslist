import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        const listingsWithFavorites = data.map((listing) => ({
          ...listing,
          isFavorite: false,
        }));
        setListings(listingsWithFavorites);
        setFilteredListings(listingsWithFavorites);
      })
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  useEffect(() => {
    const filtered = listings.filter((listing) =>
      listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredListings(filtered);
  }, [searchTerm, listings]);

  const handleFavoriteToggle = (id) => {
    const updatedListings = listings.map((listing) =>
      listing.id === id ? { ...listing, isFavorite: !listing.isFavorite } : listing
    );
    setListings(updatedListings);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedListings = listings.filter((listing) => listing.id !== id);
      setListings(updatedListings);
    });
  };

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onFavoriteToggle={handleFavoriteToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
