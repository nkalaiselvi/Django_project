import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useCart } from '../context/cartcontext';
import './Checkout.css';

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price || 10) * item.qty,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert('Your cart is empty');
    return;
  }

  const order = {
    id: 'ORD' + Date.now(),
    name: form.name,
    email: form.email,
    phone: form.phone,
    address: form.address,
    city: form.city,
    pincode: form.pincode,
    items: cart,
    total: totalPrice,
    date: new Date().toISOString(),
  };

  // ⚠️ SAVE ORDER TO LOCALSTORAGE
  const existing = JSON.parse(localStorage.getItem('orders') || '[]');
  const updated = [...existing, order];
  localStorage.setItem('orders', JSON.stringify(updated));

  console.log('Order saved:', order);
  console.log('All orders:', updated);

  clearCart();
  navigate('/order-success', { state: { order } });
};

  if (cart.length === 0) {
    return (
      <div>
        <Navbar />
        <section className="checkout-section">
          <div className="checkout-empty">
            <h2>Your cart is empty</h2>
            <Link to="/wedding-cards" className="checkout-shop-btn">
              Browse Cards
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <section className="checkout-section">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Shipping Details</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="address"
              placeholder="Full Address"
              rows="3"
              value={form.address}
              onChange={handleChange}
              required
            />
            <div className="checkout-row">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={form.pincode}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="checkout-btn">
              Place Order — Rs.{totalPrice.toFixed(2)}
            </button>
          </form>

          <aside className="checkout-summary">
            <h2>Order Summary</h2>
            {cart.map((item) => (
              <div key={item.name} className="checkout-summary-item">
                <span>{item.name} × {item.qty}</span>
                <span>Rs.{(parseFloat(item.price || 10) * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <div className="checkout-summary-total">
              <span>Total</span>
              <span>Rs.{totalPrice.toFixed(2)}</span>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Checkout;