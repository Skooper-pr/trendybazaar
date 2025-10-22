
import React from 'react';

interface OrderConfirmationToastProps {
  isVisible: boolean;
}

const OrderConfirmationToast: React.FC<OrderConfirmationToastProps> = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 transition-all duration-300 animate-slide-in-up">
      <div className="flex items-center bg-green-500 text-white text-sm font-bold px-4 py-3 rounded-lg shadow-2xl">
        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <p>Order placed successfully! We will contact you shortly.</p>
      </div>
      <style>{`
        @keyframes slide-in-up {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        .animate-slide-in-up {
            animation: slide-in-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
       `}</style>
    </div>
  );
};

export default OrderConfirmationToast;
