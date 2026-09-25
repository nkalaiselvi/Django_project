import { useEffect, useState } from 'react';
import { fetchCategories } from '../api/client';
import './CategoryGrid.css';

import floralCard from '../assets/Floral_Card.png';
import hinduCard from '../assets/Hindu_Card.png';
import luxuryCard from '../assets/Luxury_Card.png';

function CategoryGrid() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map slug → image
  const imageMap = {
  'hindu-wedding-cards': hinduCard,
  'christian-wedding-cards': luxuryCard,    // fallback
  'muslim-wedding-cards': floralCard,       // fallback
  'luxury-cards': luxuryCard,
  'floral-wedding-cards': floralCard,
};

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        setCategories(data.slice(0, 3)); // first 3 for home section
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="category-section">
        <p style={{ textAlign: 'center', padding: '40px' }}>
          Loading categories...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="category-section">
        <p style={{ textAlign: 'center', padding: '40px', color: 'red' }}>
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="category-section">
      <h2 className="category-title">Unique &amp; Exclusive Invitation Cards</h2>
      <p className="category-subtitle">
        Because Each Wedding is Truly Unique and Memorable
      </p>

      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img
              src={cat.image || imageMap[cat.slug] || hinduCard}
              alt={cat.name}
            />
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;