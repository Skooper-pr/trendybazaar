

import React from 'react';
import ProductList from '../components/ProductList.tsx';
import { Product } from '../types.ts';

interface ProductsPageProps {
  onBuyNow: (product: Product) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onBuyNow }) => {
  return (
    <div className="space-y-8">
       <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Our Featured Product
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          A timeless heirloom to cherish the small moments that make life grand.
        </p>
      </section>
      
      <section>
        {/* In a real app, this would map over an array of products */}
        <ProductList onBuyNow={onBuyNow} />
      </section>
    </div>
  );
};

export default ProductsPage;