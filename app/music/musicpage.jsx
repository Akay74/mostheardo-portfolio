"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import TRT from '../../assets/theseRicoTimes.jpg';
import RoiBkt from '@/assets/roibktht.jpg';
import RoiBkt2 from '@/assets/roibktht2.jpg';
import RoiSt from '@/assets/roisit.jpg';
import RoiSt2 from '@/assets/roisit2.jpg';
import RoiSt3 from '@/assets/roisit3.jpg';
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
      title: 'GOODI MAN',
      actionText: 'STREAM/DOWNLOAD'
    },
    {
      image: RoiSt,
      title: 'YEAH',
      actionText: 'STREAM/DOWNLOAD'
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="bg-black text-white h-[90vh]">
      <div className="relative ">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div>
              <Image
                src={item.image}
                alt={item.title}
                objectFit="cover"
              />
            </div>
            <div className="px-4 py-10 md:p-6 text-center">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 uppercase">{item.title}</h2>
              <button className="bg-red-600 text-white py-2 px-4 rounded-sm text-sm md:text-base uppercase font-bold tracking-wide">
                {item.actionText}
              </button>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default MusicPage;