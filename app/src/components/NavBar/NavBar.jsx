import './NavBar.css';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';

const NavBar = () => {
  const { cartItems, productCountity, deleteItem } = useContext(CartContext);

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const menuOpenBg = isMenuOpen ? 'open-bg' : '';
  const menuOpen = isMenuOpen ? 'open-mn' : '';
  const cartOpen = isCartOpen ? 'cart-open' : '';

  const selectedProduct = () => {
    return cartItems.map((item, index) => {
      const priceToPay = productCountity * item.currentPrice;
      return (
        <div
          key={index}
          className="selected-product-item flex justify-between items-center  mb-2"
        >
          <img src={item.thumbnail} className="product-image rounded" />
          <div>
            <p className="text-xs text-gray-600">{item.name}</p>
            <span className="text-xs text-gray-600">{`${item.currentPrice} x ${productCountity}`}</span>
            <span className="text-xs ml-2 font-bold">
              ${priceToPay.toFixed(2)}
            </span>
          </div>
          <button onClick={() => deleteItem(index)}>
            <img
              src="./assets/icon-delete.svg"
              className="size-4 cursor-pointer"
            />
          </button>
        </div>
      );
    });
  };

  return (
    <header className="nav-container" id="home">
      <nav className="navbar">
        <div className="logo-menu-section">
          <button className="menu" onClick={toggleMenu}>
            <img className="menu-icon" src="/assets/icon-menu.svg" alt="Menu" />
          </button>
          <a href="#home">
            <img className="logo" src="/assets/logo.svg" alt="Logo" />
          </a>
        </div>

        <div className={`mobile-menu-active ${menuOpenBg}`}></div>

        <div className={`links-section ${menuOpen}`}>
          <button className="close-btn" onClick={toggleMenu}>
            <img
              className="close-icon"
              src="/assets/icon-close.svg"
              alt="close"
            />
          </button>
          <ul className="links">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="cart-avatar-section">
          <div className="cart cursor-pointer justify-center items-center">
            {productCountity > 0 && cartItems.length != 0 ? (
              <span className="cart-count flex justify-center items-center bg-orange-500 text-white">
                {productCountity}
              </span>
            ) : (
              ''
            )}
            <img
              className="cart-icon"
              src="/assets/icon-cart.svg"
              alt="Cart"
              onClick={toggleCart}
            />
          </div>

          <div className={`cart-dropdown rounded hidden ${cartOpen}`}>
            <h3 className="p-3 text-xs font-extrabold tracking-wider">Cart</h3>
            <hr />
            {cartItems.length === 0 ? (
              <div className="selected-product">
                <p className="text-xs text-gray-500 font-bold">
                  Your cart is empty.
                </p>
              </div>
            ) : (
              <div className="p-4">
                {selectedProduct()}
                <button className="bg-orange-500 w-full p-2 rounded font-bold tracking-wider my-2 cursor-pointer">
                  Checkout
                </button>
              </div>
            )}
          </div>
          <img
            className="avatar ml-5"
            src="/assets/image-avatar.png"
            alt="Avatar"
          />
        </div>
      </nav>
      <hr className="nav" />
    </header>
  );
};

export default NavBar;
