import React, { useState } from 'react';
import { Product } from '../types';

interface ProductListProps {
  onBuyNow: (product: Product) => void;
}

const productData = {
  id: 1,
  name: 'The Keepsake Tooth Box',
  description: 'Crafted from premium materials and finished with a non-toxic, child-safe lacquer, our Keepsake Tooth Box is the perfect way to treasure the tiny milestones. The lid fits snugly to protect its precious contents. A timeless heirloom for generations to come.',
  price: 39.99,
  imageUrls: [
    'https://i.ibb.co/6wmCCz2/product-1.jpg',
    'https://i.ibb.co/3kZ51C8/product-2.jpg',
    'https://i.ibb.co/Xz9GzV8/product-3.jpg',
    'https://i.ibb.co/68v8z5j/product-4.jpg'
  ],
};

const ProductList: React.FC<ProductListProps> = ({ onBuyNow }) => {
  const [activeImage, setActiveImage] = useState(productData.imageUrls[0]);

  const handleBuyClick = () => {
    onBuyNow({
      id: productData.id,
      name: productData.name,
      description: productData.description,
      price: productData.price,
      imageUrl: activeImage,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Image Column */}
        <div>
          <img 
            src={activeImage} 
            alt={productData.name} 
            className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[4/5] mb-4 transition-all duration-300"
          />
          <div className="grid grid-cols-4 gap-2">
            {productData.imageUrls.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all aspect-square ${activeImage === img ? 'ring-2 ring-amber-500' : 'ring-0'}`}
                aria-label={`View product image ${index + 1}`}
              >
                <img
                  src={img}
                  alt={`Tooth box thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${activeImage !== img ? 'opacity-60 hover:opacity-100' : 'opacity-100'}`}
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Details Column */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{productData.name}</h2>
          <p className="text-4xl font-black text-amber-600 mt-2 mb-4">${productData.price.toFixed(2)}</p>
          <p className="text-slate-600 leading-relaxed mb-6">{productData.description}</p>
          
          <ul className="space-y-2 text-slate-700 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              High-Quality, Durable Material
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              Secure Lid to Keep Teeth Safe
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              Child-Safe, Non-Toxic Finish
            </li>
          </ul>
          
          <button
            onClick={handleBuyClick}
            className="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;