"use client"
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaAmazon, FaApple, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #F9F9F9;
  padding: 10px;
  color: #000;
`;

const Header = styled.header`
  display: flex;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

const Logo = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: bold;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNavigation = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 40%;
  }
`;

const NavLink = styled.a`
  color: ${props => props.isMobile ? '#ffff00' : '#000'};
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${props => props.isMobile ? '24px' : '16px'};
  margin: ${props => props.isMobile ? '20px 0' : '0 0 0 20px'};
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  @media (min-width: 768px) {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    height: auto;
  }
`;

const IconLink = styled.a`
  color: ${props => props.isMobile ? '#ffff00' : '#000'};
  font-size: ${props => props.isMobile ? '20px' : '30px'};
  margin: ${props => props.isMobile ? '0 10px' : '10px 0'};
`;

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
      <NavLink href="#" onClick={onClick} isMobile={isMobile}>MUSIC</NavLink>
      <NavLink href="#" onClick={onClick} isMobile={isMobile}>VIDEOS</NavLink>
      <NavLink href="#" onClick={onClick} isMobile={isMobile}>SHOP</NavLink>
      <NavLink href="#" onClick={onClick} isMobile={isMobile}>CONTACT</NavLink>
    </>
  );

  const SocialIconsComponent = ({ isMobile }) => (
    <SocialIcons>
      <IconLink href="#" isMobile={isMobile}><FaFacebookF /></IconLink>
      <IconLink href="#" isMobile={isMobile}><FaInstagram /></IconLink>
      <IconLink href="#" isMobile={isMobile}><FaTwitter /></IconLink>
      <IconLink href="#" isMobile={isMobile}><FaAmazon /></IconLink>
      <IconLink href="#" isMobile={isMobile}><FaApple /></IconLink>
      <IconLink href="#" isMobile={isMobile}><FaSoundcloud /></IconLink>
      <IconLink href="#" isMobile={isMobile}><FaSpotify /></IconLink>
      <IconLink href="#" isMobile={isMobile}><FaYoutube /></IconLink>
    </SocialIcons>
  );

  return (
    <HeaderContainer>
      <Header>
        <Logo>MOSTHEARDOF</Logo>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
        <DesktopNavigation>
          <NavLinks isMobile={false} />
        </DesktopNavigation>
      </Header>
      <MobileNavigation isOpen={isMenuOpen}>
        <NavLinks isMobile={true} onClick={toggleMenu} />
        <SocialIconsComponent isMobile={true} />
      </MobileNavigation>
      {!isMobile && <SocialIconsComponent isMobile={false} />}
    </HeaderContainer>
  );
};

export default HeaderComponent;