
import React, { useState, FormEvent, useCallback } from 'react';
import { Product, OrderDetails } from '../types.ts';

interface OrderFormModalProps {
  product: Product;
  onClose: () => void;
  onOrderSuccess: () => void;
}

const OrderFormModal: React.FC<OrderFormModalProps> = ({ product, onClose, onOrderSuccess }) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    username: '',
    phone: '',
    location: '',
  });
  const [errors, setErrors] = useState<Partial<OrderDetails>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = useCallback(() => {
    const newErrors: Partial<OrderDetails> = {};
    if (!orderDetails.username.trim()) newErrors.username = 'Username is required';
    if (!orderDetails.phone.trim()) newErrors.phone = 'Telephone number is required';
    else if (!/^\+?[0-9\s-()]{7,}$/.test(orderDetails.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!orderDetails.location.trim()) newErrors.location = 'Location is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [orderDetails]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      console.log('Placing order for:', product.name);
      console.log('Order Details:', orderDetails);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        onOrderSuccess();
      }, 1500);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto flex flex-col overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-200">
           <h2 className="text-2xl font-bold text-slate-800">Complete Your Order</h2>
           <p className="text-slate-500 mt-1">You're ordering the <span className="font-semibold text-amber-600">{product.name}</span>.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={orderDetails.username}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500`}
                    required
                />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
             <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telephone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={orderDetails.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500`}
                    required
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
             <div>
                <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">Location / Address</label>
                <textarea
                    id="location"
                    name="location"
                    value={orderDetails.location}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-3 py-2 border ${errors.location ? 'border-red-500' : 'border-slate-300'} rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500`}
                    required
                />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
            </div>
            <div className="flex items-center justify-end pt-4 space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-sm font-semibold text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition-colors flex items-center disabled:bg-amber-300 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                 {isSubmitting ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Placing Order...
                    </>
                ) : `Place Order ($${product.price.toFixed(2)})`}
              </button>
            </div>
        </form>
      </div>
       <style>{`
        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.3s ease-out forwards;
        }
       `}</style>
    </div>
  );
};

export default OrderFormModal;