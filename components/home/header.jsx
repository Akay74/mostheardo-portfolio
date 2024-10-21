"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaDeezer, FaApple, FaSpotify, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

const NavLinks = React.memo(({ isMobile, onClick }) => (
  <>
    {['MUSIC', 'VIDEOS', 'SHOP', 'CONTACT'].map((item) => (
      <a
        key={item}
        href={item === 'CONTACT' ? '#' : `/${item.toLowerCase()}`}
        onClick={onClick}
        className={`font-bold uppercase ${
          isMobile
            ? 'text-2xl my-5 text-[#ccff00]'
            : 'text-base ml-5 text-black'
        }`}
      >
        {item}
      </a>
    ))}
  </>
));
NavLinks.displayName = 'NavLinks';

const SocialIconsComponent = React.memo(({ isMobile }) => {
  const socialIcons = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/mostheardof?mibextid=LQQJ4d" },
    { Icon: FaInstagram, url: "https://www.instagram.com/mostheardof?igsh=eHc5ejloNnY3MzQ1" },
    { Icon: FaTwitter, url: "https://x.com/roi_iiii?s=21&t=c1irIz4BZtavX3lSYpAO4g" },
    { Icon: FaApple, url: "https://music.apple.com/ng/artist/r-o-i/1515339754" },
    { Icon: FaDeezer, url: "https://www.deezer.com/us/artist/95884522" },
    { Icon: FaSpotify, url: "https://open.spotify.com/artist/3CYXIXCQmsAsqHbolfiuc2?si=Fc6llAUMQ9GxLxswAhADHg" },
    { Icon: FaYoutube, url: "https://youtube.com/@roii1?si=sCFV-ik3qa-fcpJH" },
  ];

  return (
    <div className={`flex ${isMobile ? 'flex-wrap justify-center p-5' : 'flex-col fixed left-5 top-1/2 -translate-y-1/2 z-50'}`}>
      {socialIcons.map(({ Icon, url }) => (
        <a
          key={url}
          href={url}
          target='_blank'
          rel="noopener noreferrer"
          className={`${
            isMobile
              ? 'mx-2.5 my-2 text-3xl text-[#ccff00]'
              : 'my-2.5 text-3xl text-black hover:text-[#ccff00]'
          }`}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
});
SocialIconsComponent.displayName = 'SocialIconsComponent';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <header className="bg-gray-100 p-2.5 text-black fixed top-0 left-0 right-0 z-50">
        <div className="flex h-[5vh] justify-between items-center py-5 px-4 md:p-8">
          <a href="/#" className="text-black text-xl md:text-2xl font-bold tracking-[2px] md:tracking-[6px] cursor-pointer">MOSTHEARDOF</a>
          <button onClick={toggleMenu} className="bg-transparent border-none text-black text-2xl cursor-pointer md:hidden">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className="hidden md:flex md:justify-end md:items-center">
            <NavLinks isMobile={false} />
          </nav>
        </div>
        <nav className={`fixed top-0 left-0 w-[80%] h-screen bg-black flex flex-col justify-center items-center transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-[1001] md:hidden`}>
          <NavLinks isMobile={true} onClick={toggleMenu} />
          <SocialIconsComponent isMobile={true} />
        </nav>
      </header>
      {!isMobile && <SocialIconsComponent isMobile={false} />}
      <div className="h-[calc(5vh+0px)] md:h-[calc(5vh+0px)]"></div>
    </>
  );
};

export default HeaderComponent;