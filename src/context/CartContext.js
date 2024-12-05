import React, { createContext, useContext, useState } from 'react';
import { Toast } from 'react-bootstrap';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(i => i.name === item.name);
      if (existingItem) {
        return prevCart.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    
    setToastMessage(`${item.name} added to cart`);
    setShowToast(true);
  };

  const removeFromCart = (itemName) => {
    setCart(prevCart => prevCart.filter(item => item.name !== itemName));
  };

  const updateQuantity = (itemName, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.name === itemName) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotal
    }}>
      {children}
      <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000 }}>
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </div>
    </CartContext.Provider>
  );
};