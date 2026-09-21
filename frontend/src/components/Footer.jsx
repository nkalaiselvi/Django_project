import logo from '../assets/cherish-logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">

        {/* LEFT — Logo + Social */}
        <div className="footer-col footer-brand">
          <img src={logo} alt="Cherish" className="footer-logo" />
          <p className="footer-tagline">
            Largest Wedding <br /> Cards Collections in <br /> Chennai
          </p>
          <p className="footer-follow">Follow us with:</p>
          <div className="footer-social">
            <span>📷</span>
            <span>📘</span>
            <span>▶️</span>
            <span>💬</span>
          </div>
        </div>

        {/* INFORMATION */}
        <div className="footer-col">
          <h4 className="footer-heading">Information</h4>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>How to order wedding invitation online?</li>
          </ul>
        </div>

        {/* QUICK ACCESS */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Access</h4>
          <ul className="footer-list">
            <li>Home</li>
            <li>Wedding Cards</li>
            <li>Hindu Wedding Cards</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-list footer-contact">
            <li>📞 +91 9876543210</li>
            <li>✉️ wedtype@weddingcards.com</li>
            <li>🕐 Operating hours: 10.00 AM to 10.00 PM</li>
            <li>Monday – Sunday</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;