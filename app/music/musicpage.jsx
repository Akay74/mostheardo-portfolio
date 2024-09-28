"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const MusicPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItems = [
    {
      image: '/images/welcome2collegegrove.jpg',
      title: 'WELCOME 2 COLLEGROVE',
      actionText: 'STREAM/DOWNLOAD'
    },
    // Add more carousel items here
  ];
  const albumList = [
    '/images/welcome2collegegrove.jpg',
    '/images/cigarettes.jpg',
    '/images/explosion.jpg',
    '/images/2step.jpg',
    '/images/its2chainz.jpg',
    '/images/redcrystal.jpg',
    '/images/popmusic.jpg',
    '/images/teeth.jpg',
  ];

  return (
    <div className="bg-black text-white min-h-screen flex">

      <div className="flex-1">
        {/* Carousel Section */}
        <div className="relative h-screen">
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
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <ChevronRight className="text-white w-8 h-8" />
          </div>
        </div>

        {/* Album List Section */}
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {albumList.map((album, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1">
                <Image
                  src={album}
                  alt={`Album ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;