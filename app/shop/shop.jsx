import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ShoppingCart className="w-24 h-24 text-blue-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800">Coming Soon</h1>
    </div>
  );
};

export default Shop;