import { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productCountity, setProductCountity] = useState(0);
  const [showMobileGallery, setShowMobileGallery] = useState(false);

  const addToCart = (item, productCountity) => {
    setCartItems((prev) => [...prev, item]);
    setProductCountity(productCountity);
  };

  const deleteItem = (indexToDelete) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const getImageGallery = () => {
    setShowMobileGallery(true);
  };

  const closeImageGallery = () => {
    setShowMobileGallery(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        productCountity,
        showMobileGallery,
        setProductCountity,
        addToCart,
        deleteItem,
        getImageGallery,
        closeImageGallery,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
