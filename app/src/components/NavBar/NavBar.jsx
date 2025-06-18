import './NavBar.css';
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const menuOpenBg = isMenuOpen ? 'open-bg' : '';
  const menuOpen = isMenuOpen ? 'open-mn' : '';

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
          <img className="cart" src="/assets/icon-cart.svg" alt="Cart" />
          <img className="avatar" src="/assets/image-avatar.png" alt="Avatar" />
        </div>
      </nav>
      <hr />
    </header>
  );
};

export default NavBar;
