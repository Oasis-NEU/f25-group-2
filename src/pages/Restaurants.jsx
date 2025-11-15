import React, { useState, useEffect } from 'react';
import supabase from '../utils/supabase';

const CATEGORY_FILTERS = [
  "Chinese", "Italian", "Mexican", "Vietnamese", "American",
  "Japanese", "Spanish", "French", "Mediterranean", "Indian",
  "Thai", "Pakistani", "Mongolian", "Korean"
];

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]); // stores normalized values
  const [locationFilters, setLocationFilters] = useState([]); // [{label, value}, ...]

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const { data, error } = await supabase
          .from("restaurants")
          .select("*");

        if (error) throw error;

        setRestaurants(data || []);
      } catch (err) {
        console.error("Error fetching restaurants:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  // Normalize categories_json and location, and compute location filters
  const normalizedRestaurants = restaurants.map((r) => {
    // categories (same as you had)
    let cats = r.categories_json;
    if (typeof cats === "string") {
      try {
        cats = JSON.parse(cats);
      } catch {
        cats = [];
      }
    }
    const flatCats = Array.isArray(cats)
      ? cats.map((c) => (Array.isArray(c) ? c[0] : c))
      : [];

    // location normalization: take r.location or fallback to r.neighborhood or r.city
    const rawLocation = (r.location ?? r.neighborhood ?? r.city ?? "").toString();
    const locationTrimmed = rawLocation.trim();
    const locationNormalized = locationTrimmed.toLowerCase(); // use lowercase for comparison

    return {
      ...r,
      categories_json: flatCats,
      _location_raw: locationTrimmed,        // e.g. "Back Bay"
      _location_norm: locationNormalized,   // e.g. "back bay"
    };
  });

  // Build location filters dynamically from data (only once when restaurants change)
  useEffect(() => {
    const setOfNorm = new Map(); // norm -> display label (first seen)
    normalizedRestaurants.forEach((r) => {
      const norm = r._location_norm;
      const display = r._location_raw;
      if (norm && !setOfNorm.has(norm)) {
        setOfNorm.set(norm, display || norm);
      }
    });

    // Create array sorted alphabetically by display
    const filters = Array.from(setOfNorm.entries())
      .map(([value, label]) => ({ value, label }))
      .sort((a, b) => a.label.localeCompare(b.label));

    setLocationFilters(filters);

    console.log("Computed location filters:", filters);
  }, [restaurants]); 


  const filteredRestaurants = normalizedRestaurants.filter((r) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      r.categories_json.some((cat) => selectedCategories.includes(cat));

    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(r._location_norm);

    const matchesSearch = [r.name, r.url, r._location_raw, ...(r.categories_json || [])].some(
      (field) =>
        field?.toString?.().toLowerCase?.().includes(searchTerm.toLowerCase())
    );

    return matchesCategory && matchesLocation && matchesSearch;
  });

 
  function toggleCategory(cat) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }
  function toggleLocation(value) {
    setSelectedLocations((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  if (loading) {
    return <p style={{ color: "#ccc" }}>Loading restaurants...</p>;
  }

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Insert Restaurant Choice
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "0.5rem 1rem",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #555",
          background: "#222",
          color: "#fff",
        }}
      />

      <div style={{ display: "flex", gap: "2rem" }}>
        {/* SIDEBAR */}
        <aside
          style={{
            width: "300px",
            background: "#111",
            padding: "1rem",
            borderRadius: "12px",
            height: "fit-content",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>Filter by Cuisine</h3>
          {CATEGORY_FILTERS.map((cat) => (
            <label key={cat} style={{ display: "block", marginBottom: "0.5rem" }}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                style={{ marginRight: "0.5rem" }}
              />
              {cat}
            </label>
          ))}

          <h3 style={{ margin: "1.5rem 0 1rem" }}>Filter by Location</h3>

          {/* If there are no location filters found, show a helpful message */}
          {locationFilters.length === 0 ? (
            <p style={{ color: "#ccc', fontSize: '0.9rem" }}>
              No locations found in your data.
            </p>
          ) : (
            locationFilters.map((loc) => (
              <label key={loc.value} style={{ display: "block", marginBottom: "0.5rem" }}>
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(loc.value)}
                  onChange={() => toggleLocation(loc.value)}
                  style={{ marginRight: "0.5rem" }}
                />
                {loc.label}
              </label>
            ))
          )}

          {/* Optional quick controls */}
          <div style={{ marginTop: "1rem" }}>
            <button
              onClick={() => { setSelectedCategories([]); setSelectedLocations([]); }}
              style={{
                background: "transparent",
                color: "#8b1fe2",
                border: "1px solid #333",
                padding: "6px 8px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Clear filters
            </button>
          </div>
        </aside>

        {/* MAIN GRID */}
        <div style={{ flexGrow: 1 }}>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            {filteredRestaurants.map((r, index) => (
              <div
                key={index}
                style={{
                  background: "#111",
                  padding: "1rem",
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                {r.image_url && (
                  <img
                    src={r.image_url}
                    alt={r.name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "0.5rem"
                    }}
                  />
                )}

                <h2 style={{ margin: "0 0 0.5rem 0", color: "#fff" }}>{r.name}</h2>

                <p style={{ color: "#ccc" }}>
                  <strong>Rating:</strong> {r.rating ?? "N/A"}
                </p>

                <p style={{ color: "#ccc" }}>
                  <strong>Reviews:</strong> {r.review_count}
                </p>

                <p style={{ color: "#aaa" }}>
                  <strong>Location:</strong> {r._location_raw}
                </p>

                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#8b1fe2",
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Yelp Reviews
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEBUG INFO (remove in production) */}
      <div style={{ marginTop: "1rem", color: "#999", fontSize: "0.85rem" }}>
        <div>Active location filters (normalized): {JSON.stringify(selectedLocations)}</div>
        <div>Available location filters: {JSON.stringify(locationFilters.map(f => f.label))}</div>
      </div>
    </div>
  );
}