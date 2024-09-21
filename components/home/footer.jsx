"use client"
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaAmazon, FaApple, FaSoundcloud, FaSpotify, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: #ffff00;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Icon = styled(Image)`
  width: 24px;
  height: 24px;
`;

const FooterText = styled.div`
  font-size: 12px;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    text-align: right;
  }
`;

const Link = styled.a`
  color: #ffff00;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const CookieConsent = styled.div`
  background-color: white;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <Icon href="#"><FaFacebookF /></Icon>
        <Icon href="#"><FaInstagram /></Icon>
        <Icon href="#"><FaTwitter /></Icon>
        <Icon href="#"><FaAmazon /></Icon>
        <Icon href="#"><FaApple /></Icon>
        <Icon href="#"><FaSoundcloud /></Icon>
        <Icon href="#"><FaSpotify /></Icon>
        <Icon href="#"><FaYoutube /></Icon>
      </SocialIcons>
      <FooterText>
        © 2024 OGMK RECORDS
        <Link href="/terms">TERMS & CONDITIONS</Link> /
        <Link href="/why-music-matters">WHY MUSIC MATTERS</Link> /
        <Link href="/privacy">PRIVACY POLICY</Link>
      </FooterText>
      <CookieConsent>Cookie Consent</CookieConsent>
    </FooterContainer>
  );
};

export default Footer;