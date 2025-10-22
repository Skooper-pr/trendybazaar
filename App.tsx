import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import WholesalePage from './pages/WholesalePage';
import OrderFormModal from './components/OrderFormModal';
import OrderConfirmationToast from './components/OrderConfirmationToast';
import { Product } from './types';

function App() {
  const [route, setRoute] = useState(window.location.hash.replace('#', '') || '/');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.replace('#', '') || '/');
    };
    window.addEventListener('hashchange', handleHashChange, false);
    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderFormVisible(true);
  };

  const handleCloseModal = () => {
    setIsOrderFormVisible(false);
    setSelectedProduct(null);
  };

  const handleOrderSuccess = () => {
    setIsOrderFormVisible(false);
    setSelectedProduct(null);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 5000);
    window.location.hash = '/';
  };

  const renderPage = () => {
    switch (route) {
      case '/products':
        return <ProductsPage onBuyNow={handleBuyNow} />;
      case '/wholesale':
        return <WholesalePage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header currentRoute={route} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer />
      {isOrderFormVisible && selectedProduct && (
        <OrderFormModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onOrderSuccess={handleOrderSuccess}
        />
      )}
      <OrderConfirmationToast isVisible={isToastVisible} />
    </div>
  );
}

export default App;