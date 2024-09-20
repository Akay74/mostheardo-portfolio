"use client"
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaAmazon, FaApple, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #000;
  color: #fff;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #ffff00;
  font-size: 24px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  @media (min-width: 768px) {
    position: static;
    transform: none;
    flex-direction: row;
    justify-content: flex-end;
    background-color: transparent;
    height: auto;
  }
`;

const NavLink = styled.a`
  color: #ffff00;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 24px;
  margin: 20px 0;
  @media (min-width: 768px) {
    margin: 0 0 0 20px;
    font-size: 16px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: #ffff00;
  font-size: 20px;
  @media (min-width: 768px) {
    margin: 10px 0;
  }
`;

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Header>
        <Logo>2CHAINZ</Logo>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
      </Header>
      <Navigation isOpen={isMenuOpen}>
        <NavLink href="#" onClick={toggleMenu}>MUSIC</NavLink>
        <NavLink href="#" onClick={toggleMenu}>VIDEOS</NavLink>
        <NavLink href="#" onClick={toggleMenu}>TOUR</NavLink>
        <NavLink href="#" onClick={toggleMenu}>LOGIN</NavLink>
      </Navigation>
      <SocialIcons>
        <IconLink href="#"><FaFacebookF /></IconLink>
        <IconLink href="#"><FaInstagram /></IconLink>
        <IconLink href="#"><FaTwitter /></IconLink>
        <IconLink href="#"><FaAmazon /></IconLink>
        <IconLink href="#"><FaApple /></IconLink>
        <IconLink href="#"><FaSoundcloud /></IconLink>
        <IconLink href="#"><FaSpotify /></IconLink>
        <IconLink href="#"><FaYoutube /></IconLink>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default HeaderComponent;