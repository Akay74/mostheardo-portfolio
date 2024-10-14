import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaApple, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

const socialIcons = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/mostheardof?mibextid=LQQJ4d" },
  { Icon: FaInstagram, href: "https://www.instagram.com/mostheardof?igsh=eHc5ejloNnY3MzQ1" },
  { Icon: FaTwitter, href: "https://x.com/roi_iiii?s=21&t=c1irIz4BZtavX3lSYpAO4g" },
  { Icon: FaApple, href: "https://music.apple.com/us/artist/ogmkrecords" },
  { Icon: FaSoundcloud, href: "https://soundcloud.com/ogmkrecords" },
  { Icon: FaSpotify, href: "https://open.spotify.com/artist/3CYXIXCQmsAsqHbolfiuc2?si=Fc6llAUMQ9GxLxswAhADHg" },
  { Icon: FaYoutube, href: "https://youtube.com/@roii1?si=sCFV-ik3qa-fcpJH" }
];

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-yellow-300 p-5 flex flex-col items-center md:flex-row md:justify-between md:py-8 md:px-8">
      <div className="flex gap-3.5 mb-5 md:mb-0">
        {socialIcons.map(({ Icon, href }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-white">
            <Icon size={30} />
          </a>
        ))}
      </div>
      <div className="text-xs text-bold text-center mb-5 md:mb-0 md:text-right">
        © 2024 OGMK RECORDS
        <a href="/terms" target="_blank" className="text-yellow-300 no-underline ml-1.5 hover:underline">TERMS & CONDITIONS</a> /
        <a href="/why-music-matters" target="_blank" className="text-yellow-300 no-underline ml-1.5 hover:underline">WHY MUSIC MATTERS</a> /
        <a href="/privacy" target="_blank" className="text-yellow-300 no-underline ml-1.5 hover:underline">PRIVACY POLICY</a>
      </div>
    </footer>
  );
};

export default Footer;