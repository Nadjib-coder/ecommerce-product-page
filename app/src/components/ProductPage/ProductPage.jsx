import './ProductPage.css';
import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  return (
    <div className="productPage flex flex-col md:flex-row items-center md:items-start mt-10 p-4">
      <ImageGallery />
      <hr></hr>
      <ProductDetails />
    </div>
  );
};

export default ProductPage;
