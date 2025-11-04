import React, { useState } from 'react';

function Restaurants() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '2rem', minHeight: '100vh' }}>
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* You all can start building the restaurant page's features from here */}
    </div>
  );
}

export default Restaurants;
