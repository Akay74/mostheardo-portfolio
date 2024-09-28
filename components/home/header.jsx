"use client"
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaAmazon, FaApple, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = ({ isMobile, onClick }) => (
    <>
      <a href="/music" onClick={onClick} className={`font-bold uppercase ${isMobile ? 'text-2xl my-5 text-yellow-300' : 'text-base ml-5 text-black'}`}>MUSIC</a>
      <a href="/videos" onClick={onClick} className={`font-bold uppercase ${isMobile ? 'text-2xl my-5 text-yellow-300' : 'text-base ml-5 text-black'}`}>VIDEOS</a>
      <a href="/shop" onClick={onClick} className={`font-bold uppercase ${isMobile ? 'text-2xl my-5 text-yellow-300' : 'text-base ml-5 text-black'}`}>SHOP</a>
      <a href="#" onClick={onClick} className={`font-bold uppercase ${isMobile ? 'text-2xl my-5 text-yellow-300' : 'text-base ml-5 text-black'}`}>CONTACT</a>
    </>
  );

  const SocialIconsComponent = ({ isMobile }) => (
    <div className={`flex ${isMobile ? 'justify-center p-5' : 'flex-col fixed left-5 top-1/2 -translate-y-1/2 z-50'}`}>
      <a href="https://www.facebook.com/mostheardof?mibextid=LQQJ4d" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-yellow-300' : 'my-2.5 text-3xl text-black'}`}><FaFacebookF /></a>
      <a href="https://www.instagram.com/mostheardof?igsh=eHc5ejloNnY3MzQ1" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-yellow-300' : 'my-2.5 text-3xl text-black'}`}><FaInstagram /></a>
      <a href="https://x.com/roi_iiii?s=21&t=c1irIz4BZtavX3lSYpAO4g" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-yellow-300' : 'my-2.5 text-3xl text-black'}`}><FaTwitter /></a>
      <a href="#" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-yellow-300' : 'my-2.5 text-3xl text-black'}`}><FaAmazon /></a>
      <a href="#" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-yellow-300' : 'my-2.5 text-3xl text-black'}`}><FaApple /></a>
      <a href="#" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-yellow-300' : 'my-2.5 text-3xl text-black'}`}><FaSoundcloud /></a>
      <a href="https://open.spotify.com/artist/3CYXIXCQmsAsqHbolfiuc2?si=Fc6llAUMQ9GxLxswAhADHg" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-yellow-300' : 'my-2.5 text-3xl text-black'}`}><FaSpotify /></a>
      <a href="https://youtube.com/@roii1?si=sCFV-ik3qa-fcpJH" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-yellow-300' : 'my-2.5 text-3xl text-black'}`}><FaYoutube /></a>
    </div>
  );

  return (
    <>
      <div className="bg-gray-100 p-2.5 text-black fixed top-0 left-0 right-0 z-50">
        <header className="flex h-[10vh] justify-between items-center p-5 md:p-8">
          <h1 className="text-black text-2xl font-bold">MOSTHEARDOF</h1>
          <button onClick={toggleMenu} className="bg-transparent border-none text-black text-2xl cursor-pointer md:hidden">☰</button>
          <nav className="hidden md:flex md:justify-end md:items-center">
            <NavLinks isMobile={false} />
          </nav>
        </header>
        <nav className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-[1001] md:hidden`}>
          <NavLinks isMobile={true} onClick={toggleMenu} />
          <SocialIconsComponent isMobile={true} />
        </nav>
      </div>
      {!isMobile && <SocialIconsComponent isMobile={false} />}
    </>
  );
};

export default HeaderComponent;