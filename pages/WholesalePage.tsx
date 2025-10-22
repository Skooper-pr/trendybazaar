
import React from 'react';
import WholesaleForm from '../components/WholesaleForm';

const WholesalePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
       <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Wholesale Inquiries
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Interested in carrying our products in your store? Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </section>
      <section>
        <WholesaleForm />
      </section>
    </div>
  );
};

export default WholesalePage;
