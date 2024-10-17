"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import TRT from '../../assets/theseRicoTimes.jpg';
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
      actionText: 'STREAM/DOWNLOAD'
    },
    {
      image: RoiBkt,
      title: 'THESE RICO TIMES',
      actionText: 'STREAM/DOWNLOAD'
    },
    {
      image: RoiBkt2,
      title: 'THESE RICO TIMES',
      actionText: 'STREAM/DOWNLOAD'
    },
    {
      image: RoiSt,
      title: 'THESE RICO TIMES',
      actionText: 'STREAM/DOWNLOAD'
    },
  ];
  const albumList = [
    { src: RoiBkt, alt: 'Rico' },
    { src: RoiBkt2, alt: 'Rico 2' },
    { src: RoiStnd, alt: 'Roi Stand' },
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
              <button className="bg-transparent border border-yellow-400 text-yellow-400 py-2 px-4 uppercase font-bold tracking-wide w-max">
                {item.actionText}
              </button>
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
      <div className="flex-grow overflow-y-auto p-4">
        <div className="flex flex-wrap justify-center">
          {albumList.map((album, index) => (
            <div key={index} className="w-1/1 md:w-1/3 lg:w-1/4 p-2">
              <Link href="/music" passHref>
                <div className="aspect-w-1 aspect-h-1 relative cursor-pointer">
                  <Image
                    src={album.src}
                    alt={album.alt}
                    width={300}
                    height={300}
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