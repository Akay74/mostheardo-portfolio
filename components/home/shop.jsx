"use client"
import React from 'react';
import Image from 'next/image';
import Cap from '../../assets/cap.jpg';
import Hoodie from '../../assets/hoodie.jpg';

const Shop = () => {
  return (
    <section className="bg-[#1a1a1a] text-white p-5 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col items-center text-center">
          <Image 
            src={Cap} 
            alt="Collegegrove Dispensary Trucker Hat" 
            width={300}
            height={300}
            className="w-full max-w-[300px] h-auto"
          />
          <h3 className="mt-2.5 mb-2.5 text-base uppercase">
            Collegegrove Dispensary Trucker Hat on Green
          </h3>
          <p className="mt-1.5 mb-1.5 font-bold">$30.00</p>
          <button className="bg-yellow-300 text-black border-none py-2.5 px-5 cursor-pointer uppercase font-bold mt-2.5">
            Buy Now
          </button>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <Image 
            src={Hoodie} 
            alt="Collegegrove Photo Hoodie" 
            width={300}
            height={300}
            className="w-full max-w-[300px] h-auto"
          />
          <h3 className="mt-2.5 mb-2.5 text-base uppercase">
            Collegegrove Photo Hoodie on Black
          </h3>
          <p className="mt-1.5 mb-1.5 font-bold">$50.00</p>
          <button className="bg-yellow-300 text-black border-none py-2.5 px-5 cursor-pointer uppercase font-bold mt-2.5">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;