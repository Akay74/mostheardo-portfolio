"use client"
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaDeezer, FaApple, FaSpotify, FaYoutube } from 'react-icons/fa';

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
      <a href="/music" onClick={onClick} className={`font-bold uppercase ${isMobile ? 'text-2xl my-5 text-[#ccff00]' : 'text-base ml-5 text-black'}`}>MUSIC</a>
      <a href="/videos" onClick={onClick} className={`font-bold uppercase ${isMobile ? 'text-2xl my-5 text-[#ccff00]' : 'text-base ml-5 text-black'}`}>VIDEOS</a>
      <a href="/shop" onClick={onClick} className={`font-bold uppercase ${isMobile ? 'text-2xl my-5 text-[#ccff00]' : 'text-base ml-5 text-black'}`}>SHOP</a>
      <a href="#" onClick={onClick} className={`font-bold uppercase ${isMobile ? 'text-2xl my-5 text-[#ccff00]' : 'text-base ml-5 text-black'}`}>CONTACT</a>
    </>
  );

  const SocialIconsComponent = ({ isMobile }) => (
    <div className={`flex ${isMobile ? 'justify-center p-5' : 'flex-col fixed left-5 top-1/2 -translate-y-1/2 z-50'}`}>
      <a href="https://www.facebook.com/mostheardof?mibextid=LQQJ4d" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-[#ccff00]' : 'my-2.5 text-3xl text-black hover:text-[#ccff00]'}`}><FaFacebookF /></a>
      <a href="https://www.instagram.com/mostheardof?igsh=eHc5ejloNnY3MzQ1" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-[#ccff00]' : 'my-2.5 text-3xl text-black hover:text-[#ccff00]'}`}><FaInstagram /></a>
      <a href="https://x.com/roi_iiii?s=21&t=c1irIz4BZtavX3lSYpAO4g" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-[#ccff00]' : 'my-2.5 text-3xl text-black hover:text-[#ccff00]'}`}><FaTwitter /></a>
      <a href="https://music.apple.com/ng/artist/r-o-i/1515339754" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-[#ccff00]' : 'my-2.5 text-3xl text-black hover:text-[#ccff00]'}`}><FaApple /></a>
      <a href="https://www.deezer.com/us/artist/95884522" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-[#ccff00]' : 'my-2.5 text-3xl text-black hover:text-[#ccff00]'}`}><FaDeezer /></a>
      <a href="https://open.spotify.com/artist/3CYXIXCQmsAsqHbolfiuc2?si=Fc6llAUMQ9GxLxswAhADHg" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-[#ccff00]' : 'my-2.5 text-3xl text-black hover:text-[#ccff00]'}`}><FaSpotify /></a>
      <a href="https://youtube.com/@roii1?si=sCFV-ik3qa-fcpJH" target='_blank' className={`${isMobile ? 'mx-2.5 text-xl text-[#ccff00]' : 'my-2.5 text-3xl text-black hover:text-[#ccff00]'}`}><FaYoutube /></a>
    </div>
  );

  return (
    <>
      <header className="bg-gray-100 p-2.5 text-black fixed top-0 left-0 right-0 z-50">
        <div className="flex h-[5vh] justify-between items-center py-5 px-4 md:p-8">
          <a href="/#" className="text-black text-xl md:text-2xl font-bold tracking-[2px] md:tracking-[6px] cursor-pointer">MOSTHEARDOF</a>
          <button onClick={toggleMenu} className="bg-transparent border-none text-black text-2xl cursor-pointer md:hidden">☰</button>
          <nav className="hidden md:flex md:justify-end md:items-center">
            <NavLinks isMobile={false} />
          </nav>
        </div>
        <nav className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-[1001] md:hidden`}>
          <NavLinks isMobile={true} onClick={toggleMenu} />
          <SocialIconsComponent isMobile={true} />
        </nav>
      </header>
      {!isMobile && <SocialIconsComponent isMobile={false} />}
      {/* Add a spacer div to push content below the header */}
      <div className="h-[calc(5vh+0px)] md:h-[calc(5vh+0px)]"></div>
    </>
  );
};

export default HeaderComponent;