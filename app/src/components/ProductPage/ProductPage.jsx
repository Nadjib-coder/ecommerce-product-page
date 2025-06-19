import './ProductPage.css';
import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start mt-10 gap-8 p-4 justify-between">
      <ImageGallery />
      <ProductDetails />
    </div>
  );
};

export default ProductPage;
