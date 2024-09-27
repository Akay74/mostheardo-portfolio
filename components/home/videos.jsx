"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TheseRicoTimes from '../../assets/theseRicoTimes.jpg';
import Yeah from '../../assets/yeah.jpg';

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
    <section className="bg-[#121212] text-white p-8 md:p-16 lg:p-32">
      <h2 className="text-gray-400 text-base font-bold tracking-[4px] border-t-2 border-gray-400 w-1/3 md:w-1/12 pt-2.5 mb-20">
        MUSIC
      </h2>
      <div className="flex flex-col gap-16 md:flex-row md:justify-between md:w-4/5 md:mx-auto">
        {albums.map((album, index) => (
          <div key={index} className="flex flex-col items-center w-full md:w-[48%] md:flex-row md:items-start">
            <div className="w-full max-w-[300px] mb-4 md:w-1/2 md:mb-0 md:mr-4">
              <Image src={album.cover} alt={album.title} width={500} height={500} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl mb-4">{album.title}</h3>
              <button className="bg-transparent border border-[#ccff00] text-[#ccff00] py-2 px-4 cursor-pointer uppercase text-base font-bold tracking-wide">
                STREAM/DOWNLOAD
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-8 md:mt-24">
        <Link href="/music" className="text-[#ccff00] no-underline uppercase text-base md:text-2xl md:font-bold">
          VIEW ALL
        </Link>
      </div>
    </section>
  );
};

export default VideoSection;