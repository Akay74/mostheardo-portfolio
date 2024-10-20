"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import TRT from '../../assets/theseRicoTimes.jpg';
import Yeah from '../../assets/yeah.jpg';
import RoiBkt from '@/assets/roibktht.jpg';
import RoiBkt2 from '@/assets/roibktht2.jpg';
import RoiSt from '@/assets/roisit.jpg';
import Link from 'next/link';
import RoiStnd from '@/assets/roistnd.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MusicPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItems = [
    {
      image: TRT,
      title: 'THESE RICO TIMES',
      actionText: 'STREAM/DOWNLOAD',
      link: "https://ditto.fm/these-rico-times"
    },
    {
      image: RoiBkt,
      title: 'THC',
      actionText: 'STREAM/DOWNLOAD',
      link: "https://ditto.fm/these-rico-times"
    },
    {
      image: RoiBkt2,
      title: 'GOODIE MAN',
      actionText: 'STREAM/DOWNLOAD',
      link: "https://ditto.fm/these-rico-times"
    },
    {
      image: RoiSt,
      title: 'YEAH',
      actionText: 'STREAM/DOWNLOAD',
      link: "https://ditto.fm/these-rico-times"
    },
  ];
  const albumList = [
    { src: RoiBkt, alt: 'Rico' },
    { src: RoiBkt2, alt: 'Rico 2' },
    { src: Yeah, alt: 'Yeah music art' },
    { src: RoiBkt, alt: 'Rico' },
    { src: RoiBkt2, alt: 'Rico 2' },
    { src: RoiStnd, alt: 'Roi Stand' },
    { src: RoiBkt, alt: 'Rico' },
    { src: RoiBkt2, alt: 'Rico 2' }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Carousel Section */}
      <div className="relative h-[95vh] flex-shrink-0">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <a 
                href={item.link}
                target="_blank"
                className="inline-block w-[18%] text-center bg-transparent border border-[#ccff00] text-[#ccff00] py-2 px-4 cursor-pointer text-base font-bold tracking-wide transition-all duration-300 hover:bg-[#ccff00] hover:text-black"
              >
                STREAM/DOWNLOAD
              </a>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={handlePrevSlide}
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </button>
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
          onClick={handleNextSlide}
        >
          <ChevronRight className="text-white w-8 h-8" />
        </button>
      </div>

      {/* Album List Section */}
      <div className="flex-grow overflow-y-auto px-20 py-12">
        <div className="flex flex-wrap justify-center">
          {albumList.map((album, index) => (
            <div key={index} className="w-1/1 md:w-1/3 lg:w-1/4 p-2">
              <Link href="/music" passHref>
                <div className="aspect-w-1 aspect-h-1 relative cursor-pointer mb-4">
                  <Image
                    src={album.src}
                    alt={album.alt}
                    width={250}
                    height={250}
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;