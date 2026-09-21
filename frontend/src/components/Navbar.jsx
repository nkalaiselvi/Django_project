import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/cherish-logo.png';
import { useCart } from '../context/cartcontext';
import { useWishlist } from '../context/wishlistcontext';
import './Navbar.css';

function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { totalCount: cartCount } = useCart();
  const { totalCount: wishlistCount } = useWishlist();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Cherish" className="logo-img" />
            <h2 className="logo-brand">Wed Knot Craft</h2>
          </Link>
        </div>

        <form className="navbar-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="navbar-icons">
          <span>👤</span>

          <Link to="/wishlist" className="icon-link">
            <span>♡</span>
            {wishlistCount > 0 && (
              <span className="icon-badge">{wishlistCount}</span>
            )}
          </Link>

          <Link to="/cart" className="icon-link">
            <span>🛒</span>
            {cartCount > 0 && (
              <span className="icon-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      <nav className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/wedding-cards">Wedding Invitation</Link>

        <div className="nav-dropdown">
          <span className="nav-dropdown-trigger">Special Occasions ▾</span>
          <div className="nav-dropdown-menu">
            <Link to="/special/birthday">Birthday Invitations</Link>
            <Link to="/special/puberty">Puberty Cards</Link>
            <Link to="/special/luxury">Luxury Invitations</Link>
            <Link to="/special/ear-boring">Ear Boring Cards</Link>
            <Link to="/special/engagement">Engagement Cards</Link>
            <Link to="/special/house-warming">House Warming</Link>
            <Link to="/special/anniversary">Anniversary Cards</Link>
          </div>
        </div>

        <div className="nav-dropdown">
          <span className="nav-dropdown-trigger">Theme Cards ▾</span>
          <div className="nav-dropdown-menu">
            <Link to="/theme/beach">Beach Theme Cards</Link>
            <Link to="/theme/bride">Bride Theme Cards</Link>
            <Link to="/theme/box">Box Cards</Link>
            <Link to="/theme/single-sheet">Single Sheet Cards</Link>
          </div>
        </div>

        <div className="nav-dropdown">
          <span className="nav-dropdown-trigger">Scroll Invitation ▾</span>
          <div className="nav-dropdown-menu">
            <Link to="/scroll/small-size">Small Size Scroll</Link>
            <Link to="/scroll/scroll-box">Box Scroll</Link>
            <Link to="/scroll/only">Only Scroll</Link>
            <Link to="/scroll/high-end">High End Scroll</Link>
          </div>
        </div>

        <div className="nav-dropdown">
          <span className="nav-dropdown-trigger">Digital Invitation ▾</span>
          <div className="nav-dropdown-menu">
            <Link to="/digital/whatsapp">Whatsapp Cards</Link>
            <Link to="/digital/save-the-date">Save the Date Cards</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;