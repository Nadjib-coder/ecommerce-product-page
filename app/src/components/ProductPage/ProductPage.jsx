import './ProductPage.css';
import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';
// import MobileImageGallery from './MobileImageGallery';
// import { useContext } from 'react';
// import { CartContext } from '../CartContext';

const ProductPage = () => {
  // const { showMobileGallery } = useContext(CartContext);
  return (
    <div className="productPage flex flex-col md:flex-row items-center md:items-start mt-10 p-4">
      {/* {showMobileGallery && <MobileImageGallery />} */}
      <ImageGallery />
      <hr></hr>
      <ProductDetails />
    </div>
  );
};

export default ProductPage;
