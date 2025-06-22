import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { productInfo } from './products-data';

const ProductDetails = () => {
  const { addToCart, productCountity, setProductCountity } =
    useContext(CartContext);

  const handleIncrement = () => setProductCountity((prev) => prev + 1);
  const handleDecrement = () => {
    if (productCountity > 0) setProductCountity((prev) => prev - 1);
  };

  function handleAddToCart() {
    addToCart(productInfo, productCountity);
  }

  return (
    <section className="product-details flex flex-col aligne-start p-5">
      <p className="company-name text-xs font-bold text-gray-500 tracking-widest mb-4">
        SNEAKER COMPANY
      </p>
      <h2 className="product-title font-bold text-2xl mb-3">
        {productInfo.name}
      </h2>
      <p className="product-description text-xs text-gray-500 mb-5">
        {productInfo.description}
      </p>

      <div className="pricing">
        <span className="current-price mr-5 text-xl font-bold">
          ${productInfo.currentPrice}
        </span>
        <span className="discount bg-black text-white px-1.5 py-0.5 rounded text-xs">
          {productInfo.discount}%
        </span>
        <p className="original-price mt-1 text-gray-600 text-xs">
          <s>${productInfo.originalPrice}</s>
        </p>
      </div>

      <div className="buttons flex gap-3 mt-10 w-80">
        <div className="product-quantity py-1 px-3 w-40 flex justify-between rounded ">
          <button
            className="minus cursor-pointer font-bold text-xl"
            aria-label="Decrease quantity"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="quantity font-bold text-l">{productCountity}</span>
          <button
            className="plus cursor-pointer font-bold text-xl"
            aria-label="Increase quantity"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <button
          className="add-to-cart py-1 px-3 w-70 font-bold content-center rounded text-s hover:opacity-80 cursor-pointer"
          onClick={handleAddToCart}
        >
          <img
            src="./assets/icon-cart.svg"
            alt="shopping bag"
            className="inline shopping-bag-icon mr-3"
          />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
