"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cap from '../../assets/cap.png';
import Hoodie from '../../assets/hoodie.png';

const Shop = () => {
  return (
    <section className="bg-[#1a1a1a] text-white p-8 md:p-16 lg:p-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col items-center text-center">
          <Image 
            src={Cap} 
            alt="OGMK Baseball Hat" 
            width={400}
            height={400}
            className="w-full max-w-[400px] h-auto"
          />
          <h3 className="mt-2.5 mb-2.5 text-base uppercase">
            OGMK Baseball Hat
          </h3>
          <p className="mt-1.5 mb-1.5 font-bold">₦5,000</p>
          <button className="bg-yellow-300 text-black border-none py-2.5 px-5 cursor-pointer uppercase font-bold mt-2.5">
            Buy Now
          </button>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <Image 
            src={Hoodie} 
            alt="OGMK Hoodie" 
            width={400}
            height={400}
            className="w-full max-w-[400px] h-auto"
          />
          <h3 className="mt-2.5 mb-2.5 text-base uppercase">
            OGMK Hoodie
          </h3>
          <p className="mt-1.5 mb-1.5 font-bold">₦25,000</p>
          <button className="bg-yellow-300 text-black border-none py-2.5 px-5 cursor-pointer uppercase font-bold mt-2.5">
            Buy Now
          </button>
        </div>
      </div>
      <div className="text-right mt-8 md:mt-24">
        <Link href="/music" className="text-[#ccff00] no-underline uppercase text-base md:text-2xl md:font-bold">
          VIEW ALL
        </Link>
      </div>
    </section>
  );
};

export default Shop;