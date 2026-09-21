import { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.name === item.name);
      if (exists) return prev.filter((i) => i.name !== item.name);
      return [...prev, item];
    });
  };

  const isWishlisted = (name) => wishlist.some((i) => i.name === name);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted, totalCount: wishlist.length }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);