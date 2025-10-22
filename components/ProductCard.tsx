

import React from 'react';
import { Product } from '../types.ts';

interface ProductCardProps {
  product: Product;
  onBuyNow: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuyNow }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
        <p className="text-slate-600 flex-grow mb-4">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-2xl font-black text-cyan-600">${product.price.toFixed(2)}</p>
          <button
            onClick={() => onBuyNow(product)}
            className="bg-cyan-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;