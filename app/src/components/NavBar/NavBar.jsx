import './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <div className="left-side">
          <img className="sneakers" alt="sneakers" src="/assets/logo.svg" />
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="right-side">
          <button className="cart">
            <img
              className="shopping-bag-icon"
              alt="shopping bag"
              src="/assets/icon-cart.svg"
            />
          </button>
          <button className="profile">
            <img
              className="avatar"
              alt="Avatar"
              src="/assets/image-avatar.png"
            />
          </button>
        </div>
      </div>
      <hr />
    </nav>
  );
}
