import { useState } from 'react';
import { images } from './assets-and-data';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { icons } from './assets-and-data.js';

const MobileImageGallery = () => {
  const [rotation, setRotation] = useState(0);

  const handleNext = () => setRotation((prev) => prev - 60); // Rotate clockwise
  const handlePrev = () => setRotation((prev) => prev + 60); // Rotate counter-clockwise

  const { showMobileGallery, closeImageGallery } = useContext(CartContext);

  return (
    <div
      className={`mobile-image-gallery hidden ${
        showMobileGallery ? 'visible' : ''
      }`}
    >
      <button>
        <img
          src={icons.closeIcon}
          className={`close-image-gallery-ls-only hidden ${
            showMobileGallery ? 'visible' : ''
          }`}
          onClick={closeImageGallery}
        />
      </button>
      <div
        className="image-container"
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {images.map((src, index) => (
          <span key={index} style={{ '--i': index + 1 }}>
            <img src={src} alt={`Image ${index + 1}`} />
          </span>
        ))}
      </div>
      <div className="btn-container">
        <button className="btn" id="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="btn" id="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};
export default MobileImageGallery;
