import React, { useState } from 'react';

function Activities() {
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

      {/* start building the features from here */}
    </div>
  );
}

export default Activities;
