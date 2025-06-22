import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productCountity, setProductCountity] = useState(0);

  const addToCart = (item, productCountity) => {
    setCartItems((prev) => [...prev, item]);
    setProductCountity(productCountity);
  };

  const deleteItem = (indexToDelete) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        productCountity,
        setProductCountity,
        addToCart,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
