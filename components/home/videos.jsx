"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import TheseRicoTimes from '../../assets/theseRicoTimes.jpg';
import Yeah from '../../assets/yeah.jpg';

const Section = styled.section`
  background-color: #121212;
  color: #ffffff;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 4rem 8rem;
  }
`;

const Title = styled.h2`
  color: #808080;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 4px;
  border-top: 2px solid #808080;
  width: 30%;
  padding-top: 10px;
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    width: 8%;
    padding-top: 10px;
    margin-bottom: 5rem;
  }
`;

const AlbumGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    margin: auto;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    width: 70%;
  }
`;

const Album = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const AlbumCover = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const AlbumInfo = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const AlbumTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 1rem;
`;

const StreamButton = styled.button`
  background-color: transparent;
  border: 1px solid #ccff00;
  color: #ccff00;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const ViewAllLink = styled.div`
  text-align: right;
  margin-top: 2rem;
  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`;

const StyledLink = styled(Link)`
  color: #ccff00;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 28px;
    font-weight: bold;
  }
`;

const VideoSection = () => {
  const albums = [
    {
      title: "THESE RICO TIMES",
      cover: TheseRicoTimes,
    },
    {
      title: "YEAH",
      cover: Yeah,
    },
  ];

  return (
    <Section>
      <Title>VIDEOS</Title>
      <AlbumGrid>
        {albums.map((album, index) => (
          <Album key={index}>
            <AlbumCover>
              <Image src={album.cover} alt={album.title} width={500} height={500} />
            </AlbumCover>
            <AlbumInfo>
              <AlbumTitle>{album.title}</AlbumTitle>
              <StreamButton>STREAM/DOWNLOAD</StreamButton>
            </AlbumInfo>
          </Album>
        ))}
      </AlbumGrid>
      <ViewAllLink>
        <StyledLink href="/video">VIEW ALL</StyledLink>
      </ViewAllLink>
    </Section>
  );
};

export default VideoSection;