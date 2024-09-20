import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter, FaAmazon, FaApple, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const HeroContainer = styled.div`
  background-color: #000;
  color: #fff;
  height: 100vh;
  display: flex;
  position: relative;
`;

const SidebarIcons = styled.div`
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffff00;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
`;

const Logo = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #ffff00;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
`;

const AlbumInfo = styled.div`
  margin-bottom: 40px;
`;

const AlbumTitle = styled.h2`
  font-size: 36px;
  color: #a0522d;
`;

const ReleaseInfo = styled.p`
  font-size: 24px;
  color: #a0522d;
`;

const HeroImage = styled.img`
  width: 50%;
  object-fit: cover;
  object-position: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <SidebarIcons>
        <IconLink href="#"><FaFacebookF /></IconLink>
        <IconLink href="#"><FaInstagram /></IconLink>
        <IconLink href="#"><FaTwitter /></IconLink>
        <IconLink href="#"><FaAmazon /></IconLink>
        <IconLink href="#"><FaApple /></IconLink>
        <IconLink href="#"><FaSoundcloud /></IconLink>
        <IconLink href="#"><FaSpotify /></IconLink>
        <IconLink href="#"><FaYoutube /></IconLink>
      </SidebarIcons>
      <Content>
        <Logo>2CHAINZ</Logo>
        <Navigation>
          <NavLink href="#">MUSIC</NavLink>
          <NavLink href="#">VIDEOS</NavLink>
          <NavLink href="#">TOUR</NavLink>
          <NavLink href="#">LOGIN</NavLink>
        </Navigation>
        <AlbumInfo>
          <AlbumTitle>WELCOME 2 COLLEGROVE</AlbumTitle>
          <ReleaseInfo>OUT NOW</ReleaseInfo>
        </AlbumInfo>
      </Content>
      <HeroImage src="/path-to-hero-image.jpg" alt="2Chainz Album Cover" />
    </HeroContainer>
  );
};

export default Hero;