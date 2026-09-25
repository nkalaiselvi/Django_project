import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/client';
import './ProductGrid.css';

// Fallback images (rotated)
import floralCard from '../assets/Floral_Card.png';
import hinduCard from '../assets/Hindu_Card.png';
import luxuryCard from '../assets/Luxury_Card.png';

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fallbackImages = [hinduCard, luxuryCard, floralCard];

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="products-section">
        <p style={{ textAlign: 'center', padding: '40px' }}>
          Loading products...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-section">
        <p style={{ textAlign: 'center', padding: '40px', color: 'red' }}>
          {error}
        </p>
      </section>
    );
  }

  return (
    <section className="products-section">
      <h2 className="products-title">Simple and Affordable Wedding Cards</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image || fallbackImages[index % fallbackImages.length]}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-footer">
              <span className="product-price">
                Rs.{parseFloat(product.price).toFixed(2)}
              </span>
              <div className="product-actions">
                <button className="icon-btn" title="Add to wishlist">
                  ♡
                </button>
                <button className="icon-btn" title="Add to cart">
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;