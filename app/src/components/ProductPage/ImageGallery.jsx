import { useState } from 'react';
import { images, thumbnail } from './images';

const ImageGallery = () => {
  const [activeImage, setActiveImage] = useState('/assets/image-product-1.jpg');
  const [activeThumbnail, setActiveThumbnail] = useState(
    '/assets/image-product-1-thumbnail.jpg',
  );
  return (
    <div className="flex flex-col items-center">
      <button className="w-80 h-80 cursor-pointer">
        <img
          src={activeImage}
          alt="Active Product"
          className="object-cover rounded-xl"
        />
      </button>
      <div className="flex gap-4 mt-4">
        {thumbnail.map((src, index) => (
          <button
            key={index}
            className="border-none"
            onClick={() => {
              setActiveImage(images[index]);
              setActiveThumbnail(thumbnail[index]);
            }}
          >
            <img
              src={src}
              alt={`Thumbnail ${index + 1}`}
              className={`w-17 h-17 object-cover rounded-lg cursor-pointer hover:opacity-70 ${
                src === activeThumbnail
                  ? 'ring-2 ring-orange-500 opacity-55'
                  : ''
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
