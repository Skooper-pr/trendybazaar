import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center rounded-2xl shadow-xl overflow-hidden text-white min-h-[400px] flex items-center justify-center p-8 text-center"
        style={{ backgroundImage: "url('https://i.ibb.co/6wmCCz2/product-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Welcome to Trendy Bazaar
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl drop-shadow-sm">
            Discover beautifully crafted treasures that preserve life's most precious memories.
          </p>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">About Our Bazaar</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At Trendy Bazaar Algeria, we believe that the smallest moments create the biggest memories. Our journey began with a simple idea: to create beautiful, high-quality keepsakes that families can cherish for a lifetime.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Every product is designed with love and crafted from the finest, child-safe materials. We are dedicated to helping you celebrate the beautiful story of your family, one tiny tooth at a time.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://i.ibb.co/3kZ51C8/product-2.jpg" 
              alt="A mother and son smiling with the Keepsake Tooth Box"
              className="w-full h-auto object-cover rounded-xl shadow-lg aspect-square" 
            />
          </div>
        </div>
      </section>

      {/* Explore Products Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Discover Our Treasure</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Ready to find the perfect home for those precious pearls? Explore our exclusive Keepsake Tooth Box.
        </p>
        <div className="mt-8">
          <a 
            href="#/products"
            className="inline-block bg-amber-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
          >
            Explore the Keepsake Box
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;