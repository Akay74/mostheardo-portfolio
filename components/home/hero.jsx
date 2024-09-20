"use client"
import React from 'react';
import Image from 'next/image';
import heroImg from '../../assets/hero.jpg';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background-color: #fff;
  color: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 40px;
  }
`;

const AlbumInfo = styled.div`
  width: 50%;
  text-align: center;
  margin: auto;
`;

const AlbumTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 15px;
  color: #a0522d;
`;

const ReleaseInfo = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: #a0522d;
`;

const HeroImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center top;
  @media (min-width: 768px) {
    width: 50%;
    height: 100vh;
    object-position: center;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <AlbumInfo>
          <AlbumTitle>THESE RICO TIMES</AlbumTitle>
          <ReleaseInfo>OUT NOW</ReleaseInfo>
        </AlbumInfo>
        <HeroImage src={heroImg} alt="roi hero image" />
      </Content>
    </HeroContainer>
  );
};

export default Hero;
