import './App.css';
import Navbar from './components/NavBar/NavBar';
import ProductPage from './components/ProductPage/ProductPage';
import { CartProvider } from './components/CartProvider';

function App() {
  return (
    <CartProvider>
      <div className="container">
        <Navbar />
        <ProductPage />
      </div>
    </CartProvider>
  );
}

export default App;
