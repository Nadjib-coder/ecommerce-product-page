import './NavBar.css';

export default function NavBar() {
  return (
    <header className="nav-container" id="home">
      <nav className="navbar">
        <div className="logo-menu-section">
          <img className="menu" src="/assets/icon-menu.svg" alt="Menu" />
          <a href="#home">
            <img src="/assets/logo.svg" alt="Logo" />
          </a>
        </div>
        <div className="mobile-menu-active"></div>
        <div className="links-section">
          <img className="close" src="/assets/icon-close.svg" alt="close" />
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
}
