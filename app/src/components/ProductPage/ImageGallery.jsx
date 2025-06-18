const ImageGallery = () => {
  const thumbnail = [
    '/assets/image-product-1-thumbnail.jpg',
    '/assets/image-product-2-thumbnail.jpg',
    '/assets/image-product-3-thumbnail.jpg',
    '/assets/image-product-4-thumbnail.jpg',
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="w-72 h-72">
        <img src="/assets/image-product-1.jpg" alt="" className="" />
      </div>
      <div>
        {thumbnail.map((src, index) => (
          <img key={index} src={src} alt={`Thumbnail ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
