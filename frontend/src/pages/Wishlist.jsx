import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../context/cartcontext';
import { useWishlist } from '../context/wishlistcontext';
import './Wishlist.css';

function Wishlist() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div>
      <Navbar />
      <section className="wish-section">
        <h1 className="wish-title">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="wish-empty">
            <p>No items in your wishlist yet.</p>
            <Link to="/wedding-cards" className="wish-shop-btn">
              Browse Cards
            </Link>
          </div>
        ) : (
          <div className="wish-grid">
            {wishlist.map((item) => (
              <div key={item.name} className="wish-card">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <div className="wish-emoji" style={{ background: item.color }}>
                    {item.emoji}
                  </div>
                )}
                <p className="wish-name">{item.name}</p>
                <div className="wish-actions">
                  <button
                    className="wish-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="wish-remove-btn"
                    onClick={() => toggleWishlist(item)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Wishlist;