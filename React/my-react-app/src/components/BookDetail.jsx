import React, { useState } from 'react';

const BookDetail = ({ title, author, year, description, genre }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
      {showDetails && (
        <>
          <p>Description: {description}</p>
          <p>Genre: {genre}</p>
        </>
      )}
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

export default BookDetail;