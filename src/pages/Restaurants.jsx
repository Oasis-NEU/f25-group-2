import React, { useState } from 'react';

const activities = [
  {
    title: "Mumbai Spice",
    location: "251 Massachusetts Ave, Boston, MA 02115",
    price: "$10-$20 per person",
    category: "Indian",
    image: "food-2.jpg",
    description: "Experience authentic Indian flavors at Mumbai Spice, where traditional spices and modern culinary techniques come together to create a memorable dining experience.",
  },
  {
    title: "Choolah",
    location: "Curry Student Center",
    price: "$15-$25 per person",
    category: "Indian",
    image: "food3.jpg",
    description: "Savor the vibrant tastes of India at Choolah, offering a contemporary twist on classic dishes in a lively atmosphere.",
  },
  {
    title: "Mamacitas",
    location: "329 Huntington Ave, Boston, MA 02115",
    price: "$10-$20 per person",
    category: "Mexican",
    image: "food1.jpg",
    description: "Indulge in the bold and spicy flavors of Mexico at Mamacitas, where traditional recipes are served with a modern flair.",
  },
  {
    title: "Gyroscope",
    location: "305 Huntington Ave, Boston, MA 02115",
    price: "$10$-20$ per person",
    category: "Mediterranean",
    image: "food4.jpeg",
    description: "Discover the fresh and vibrant tastes of the Mediterranean at Gyroscope, featuring a menu inspired by the coastal regions of Greece, Turkey, and beyond.",
  },
  {
    title: "Popeyes",
    location: "Curry Student Center",
    price: "$10-$20 per person",
    category: "American",
    image: "food5.avif",
    description: "Enjoy classic American fast food with a Southern twist at Popeyes, known for its flavorful fried chicken and signature sides.",
  },
  {
    title: "Panera Bread",
    location: "289 Huntington Ave, Boston, MA 02115",
    price: "$10-$20 per person",
    category: "American",
    image: "food6.jpg",
    description: "Relax and unwind at Panera Bread, offering a variety of freshly baked goods, sandwiches, and salads in a cozy café setting.",
  },
];

export default function Activities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [...new Set(activities.map(a => a.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredActivities = activities.filter(a => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(a.category);
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          a.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ display: 'flex', padding: '2rem', minHeight: '100vh' }}>
      {/* Sidebar Filters */}
      <aside className="sidebar">
        <h3>Filter by Category</h3>
        <div className="filter-group">
          {categories.map(cat => (
            <label key={cat} className="filter-item">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ marginLeft: '260px', width: '100%' }}>
        {/* Search bar */}
        <div className="search-container" style={{ marginBottom: '2rem' }}>
          <input
            type="text"
            placeholder="Search activities..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '0.5rem 1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {/* Activities Cards */}
        <div className="card-grid">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity, index) => (
              <div key={index} className="card">
                <img src={activity.image} alt={activity.title} />
                <div className="card-content">
                  <h2 className="card-title">{activity.title}</h2>
                  <p style={{ color: "#ccc", marginBottom: "0.5rem" }}><strong>Location:</strong> {activity.location}</p>
                  <p style={{ color: "#ccc", marginBottom: "0.5rem" }}><strong>Price:</strong> {activity.price}</p>
                  <p style={{ color: "#ccc", marginBottom: "1rem" }}><strong>Category:</strong> {activity.category}</p>
                  <p style={{ color: "#aaa" }}>{activity.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "#ccc", textAlign: "center" }}>No activities found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
