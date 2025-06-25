import './App.css';
import Navbar from './components/NavBar/NavBar';
import { CartProvider } from './components/CartProvider';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </CartProvider>
  );
}

export default App;
