import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product, selectedSize = 'EU 42') => {
    setCartItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevItems, { ...product, selectedSize, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, selectedSize) => {
    setCartItems(prev => prev.filter(item => !(item.id === productId && item.selectedSize === selectedSize)));
  };

  const updateQuantity = (productId, selectedSize, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId && item.selectedSize === selectedSize) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      wishlist,
      toggleWishlist,
      totalItemsCount,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
