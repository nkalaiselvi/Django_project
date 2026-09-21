import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './OrderSuccess.css';

function OrderSuccess() {
  const { state } = useLocation();
  const order = state?.order;

  return (
    <div>
      <Navbar />
      <section className="success-section">
        <div className="success-card">
          <div className="success-icon">✅</div>
          <h1>Order Placed!</h1>
          <p>Thank you, {order?.name || 'friend'}!</p>
          <p className="success-order-id">
            Order ID: <strong>{order?.id}</strong>
          </p>
          <p className="success-total">
            Total: <strong>Rs.{order?.total?.toFixed(2)}</strong>
          </p>
          <p className="success-note">
            We'll send you a confirmation email shortly.
          </p>
          <Link to="/" className="success-btn">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default OrderSuccess;