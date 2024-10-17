"use client"
import React from 'react';
import Image from 'next/image';
import heroImg from '../../assets/hero.jpg';

const Hero = () => {
  return (
    <div className="bg-white text-black h-auto md:min-h-screen flex flex-col md:flex-row">
      <div className="p-5 md:p-10 md:flex md:w-full md:justify-between">
        <div className="w-full md:w-1/2 text-center m-auto py-12 md:py-8">
          <h2 className="text-3xl md:text-4xl font-[700] tracking-[13px] text-[#a0522d]">
            THESE RICO TIMES
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-[#a0522d] py-4">
            OUT NOW
          </p>
        </div>
        <div className="w-full md:w-1/2 h-auto md:h-screen py-10 md:py-0">
          <Image 
            src={heroImg} 
            alt="roi hero image" 
            className="w-full h-auto object-cover object-top md:object-center md:h-full"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;