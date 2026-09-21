import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../context/cartcontext';
import { useWishlist } from '../context/wishlistcontext';
import './Wedding_cards.css';

import allCardsImg from '../assets/all-cards.png';
import christianImg from '../assets/christian-card.png';
import elegantFaithImg from '../assets/elegant-faith-card.png';
import envelopeImg from '../assets/envelope-card.png';
import exclusiveImg from '../assets/exclusive-card.png';
import hinduImg from '../assets/hindu-card.png';
import interfaithImg from '../assets/interfaith-card.png';
import muslimImg from '../assets/muslim-card.png';
import nepalImg from '../assets/nepal-card.png';
import newStyleImg from '../assets/new-style-card.png';
import sikhImg from '../assets/sikh-card.png';
import traditionalImg from '../assets/traditional-card.png';

function WeddingCards() {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const categories = [
    { id: 1, name: 'Hindu Wedding Cards', image: hinduImg },
    { id: 2, name: 'Christian Wedding Cards', image: christianImg },
    { id: 3, name: 'Muslim Wedding Cards', image: muslimImg },
    { id: 4, name: 'Sikh Wedding Cards', image: sikhImg },
    { id: 5, name: 'Interfaith Wedding Cards', image: interfaithImg },
    { id: 6, name: 'Exclusive Wedding Cards', image: exclusiveImg },
    { id: 7, name: 'Traditional Wedding Cards', image: traditionalImg },
    { id: 8, name: 'All Wedding Cards', image: allCardsImg },
    { id: 9, name: 'New Style Wedding Cards', image: newStyleImg },
    { id: 10, name: 'Envelope Wedding Cards', image: envelopeImg },
    { id: 11, name: 'Elegant Faith Wedding Cards', image: elegantFaithImg },
    { id: 12, name: 'Nepali Wedding Cards', image: nepalImg },
  ];

  return (
    <div>
      <Navbar />
      <section className="wc-section">
        <h1 className="wc-title">WEDDING CARDS</h1>

        <div className="wc-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="wc-card">
              <img src={cat.image} alt={cat.name} />
              <p className="wc-card-name">{cat.name}</p>
              <div className="wc-card-actions">
                <button
                  className="wc-heart"
                  onClick={() => toggleWishlist({ ...cat, price: 8.0 })}
                >
                  {isWishlisted(cat.name) ? '❤️' : '♡'}
                </button>
                <button
                  className="wc-cart"
                  onClick={() => addToCart({ ...cat, price: 8.0 })}
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WeddingCards;