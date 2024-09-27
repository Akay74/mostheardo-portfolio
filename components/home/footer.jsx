"use client"
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaAmazon, FaApple, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-yellow-300 p-5 flex flex-col items-center md:flex-row md:justify-between md:py-5 md:px-5">
      <div className="flex gap-2.5 mb-5 md:mb-0">
        {[FaFacebookF, FaInstagram, FaTwitter, FaAmazon, FaApple, FaSoundcloud, FaSpotify, FaYoutube].map((Icon, index) => (
          <a key={index} href="#" className="text-yellow-300 hover:text-white">
            <Icon size={24} />
          </a>
        ))}
      </div>
      <div className="text-xs text-center mb-5 md:mb-0 md:text-right">
        © 2024 OGMK RECORDS
        <a href="/terms" className="text-yellow-300 no-underline ml-1.5 hover:underline">TERMS & CONDITIONS</a> /
        <a href="/why-music-matters" className="text-yellow-300 no-underline ml-1.5 hover:underline">WHY MUSIC MATTERS</a> /
        <a href="/privacy" className="text-yellow-300 no-underline ml-1.5 hover:underline">PRIVACY POLICY</a>
      </div>
      <div className="bg-white text-black py-1.5 px-2.5 rounded text-xs cursor-pointer md:ml-5">
        Cookie Consent
      </div>
    </footer>
  );
};

export default Footer;