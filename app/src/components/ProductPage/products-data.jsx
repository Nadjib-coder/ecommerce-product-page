const thumbnail = [
  '/assets/image-product-1-thumbnail.jpg',
  '/assets/image-product-2-thumbnail.jpg',
  '/assets/image-product-3-thumbnail.jpg',
  '/assets/image-product-4-thumbnail.jpg',
];

const images = [
  '/assets/image-product-1.jpg',
  '/assets/image-product-2.jpg',
  '/assets/image-product-3.jpg',
  '/assets/image-product-4.jpg',
];

const productInfo = {
  name: 'Fall Limited Edition Sneakers',
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  originalPrice: 250,
  discount: 50,
  currentPrice: null,
  image: '/assets/image-product-1.jpg',
  thumbnail: '/assets/image-product-1-thumbnail.jpg',
  productCountity: 0,
};

// calculate the current price
productInfo.currentPrice = Number(
  productInfo.originalPrice * (productInfo.discount / 100),
).toFixed(2);

// display the originalPrice with two decimal places
productInfo.originalPrice = Number(productInfo.originalPrice).toFixed(2);

export { images, thumbnail, productInfo };
