import { useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../context/cartcontext';
import { useWishlist } from '../context/wishlistcontext';
import './Search.css';

const allItems = [
  { name: 'Hindu Wedding Card', emoji: '🕉️', color: '#FFE5B4', price: 10.25 },
  { name: 'Christian Wedding Card', emoji: '✝️', color: '#E5E0F5', price: 8.50 },
  { name: 'Muslim Wedding Card', emoji: '☪️', color: '#D4E8D4', price: 7.00 },
  { name: 'Sikh Wedding Card', emoji: '🪯', color: '#F5E0E0', price: 9.00 },
  { name: 'Beach Theme Card', emoji: '🏖️', color: '#E0F5FF', price: 12.00 },
  { name: 'Bride Theme Card', emoji: '👰', color: '#FFF5F5', price: 11.50 },
  { name: 'Box Card', emoji: '📦', color: '#FFF5E0', price: 6.00 },
  { name: 'Birthday Invitation', emoji: '🎂', color: '#FFE5F0', price: 4.50 },
  { name: 'Engagement Card', emoji: '💍', color: '#FFE5F5', price: 8.00 },
  { name: 'Anniversary Card', emoji: '💐', color: '#F5E5FF', price: 5.00 },
  { name: 'Save the Date Card', emoji: '📅', color: '#FFF5E0', price: 3.50 },
  { name: 'WhatsApp Invite', emoji: '💬', color: '#E5FFE5', price: 2.00 },
];

function Search() {
  const [params] = useSearchParams();
  const query = (params.get('q') || '').toLowerCase();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const results = allItems.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  return (
    <div>
      <Navbar />
      <section className="search-section">
        <h1 className="search-title">
          {query ? `Results for "${query}"` : 'All Items'}
        </h1>
        <p className="search-count">{results.length} items found</p>

        {results.length === 0 ? (
          <p className="search-empty">No matches. Try a different word.</p>
        ) : (
          <div className="search-grid">
            {results.map((item) => (
              <div key={item.name} className="search-card">
                <div className="search-emoji" style={{ background: item.color }}>
                  {item.emoji}
                </div>
                <p className="search-name">{item.name}</p>
                <p className="search-price">Rs.{item.price.toFixed(2)}</p>
                <div className="search-actions">
                  <button
                    className="search-heart"
                    onClick={() => toggleWishlist(item)}
                  >
                    {isWishlisted(item.name) ? '❤️' : '♡'}
                  </button>
                  <button
                    className="search-cart"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
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

export default Search;