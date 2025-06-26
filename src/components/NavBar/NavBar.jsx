import './NavBar.css';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import { icons } from '../ProductPage/assets-and-data';
import { NavLink } from 'react-router-dom';

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
            <img src={icons.delete} className="size-4 cursor-pointer" />
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
            <img
              className="menu-icon cursor-pointer"
              src={icons.menuIcon}
              alt="Menu"
            />
          </button>
          <NavLink to="/">
            <img className="logo" src={icons.logo} alt="Logo" />
          </NavLink>
        </div>

        <div className={`mobile-menu-active ${menuOpenBg}`}></div>

        <div className={`links-section ${menuOpen}`}>
          <button className="close-btn" onClick={toggleMenu}>
            <img className="close-icon" src={icons.closeIcon} alt="close" />
          </button>
          <ul className="links">
            <li>
              <NavLink to="/">Collections</NavLink>
            </li>
            <li>
              <NavLink to="/productpage">ProductPage</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="cart-avatar-section">
          <button
            className="cart cursor-pointer justify-center items-center"
            onClick={toggleCart}
          >
            {productCountity > 0 && cartItems.length != 0 ? (
              <span className="cart-count flex justify-center items-center text-white">
                {productCountity}
              </span>
            ) : (
              ''
            )}
            <img className="cart-icon" src={icons.cartIcon} alt="Cart" />
          </button>

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
                <button className="checkout-btn w-full p-2 rounded font-bold tracking-wider my-2 cursor-pointer">
                  Checkout
                </button>
              </div>
            )}
          </div>
          <img className="avatar ml-5" src={icons.avatar} alt="Avatar" />
        </div>
      </nav>
      <hr className="nav" />
    </header>
  );
};

export default NavBar;
