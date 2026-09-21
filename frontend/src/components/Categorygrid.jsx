import floralCard from '../assets/Floral_Card.png';
import hinduCard from '../assets/Hindu_Card.png';
import luxuryCard from '../assets/Luxury_Card.png';
import './CategoryGrid.css';

function CategoryGrid() {
  const categories = [
    { id: 1, name: 'Hindu Wedding Cards', image: hinduCard },
    { id: 2, name: 'Luxury Cards', image: luxuryCard },
    { id: 3, name: 'Floral Wedding Cards', image: floralCard },
  ];

  return (
    <section className="category-section">
      <h2 className="category-title">Unique &amp; Exclusive Invitation Cards</h2>
      <p className="category-subtitle">
        Because Each Wedding is Truly Unique and Memorable
      </p>

      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;