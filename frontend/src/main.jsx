import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import { CartProvider } from './context/cartcontext.jsx';
import { WishlistProvider } from './context/wishlistcontext.jsx';
import Cart from './pages/Cart.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Search from './pages/Search.jsx';
import ThemeCards from './pages/ThemeCards.jsx';
import WeddingCards from './pages/Wedding_cards.jsx';
import Wishlist from './pages/Wishlist.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/wedding-cards" element={<WeddingCards />} />
            <Route path="/special/:slug" element={<CategoryPage />} />
            <Route path="/theme/:slug" element={<CategoryPage />} />
            <Route path="/theme-cards" element={<ThemeCards />} />
            <Route path="/scroll/:slug" element={<CategoryPage />} />
            <Route path="/digital/:slug" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/search" element={<Search />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  </StrictMode>
);