import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../context/cartcontext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQty, clearCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price || 10);
    return sum + price * item.qty;
  }, 0);

  return (
    <div>
      <Navbar />
      <section className="cart-section">
        <h1 className="cart-title">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link to="/wedding-cards" className="cart-shop-btn">
              Browse Wedding Cards
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div key={item.name} className="cart-item">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                  )}
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">Rs.{parseFloat(item.price || 10).toFixed(2)}</p>
                  </div>
                  <div className="cart-item-qty">
                    <button onClick={() => updateQty(item.name, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.name, item.qty + 1)}>+</button>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.name)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total: Rs.{totalPrice.toFixed(2)}</h2>
              <button className="cart-clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <Link to="/checkout" className="cart-checkout-btn">
                Checkout
              </Link>
            </div>
          </>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default Cart;