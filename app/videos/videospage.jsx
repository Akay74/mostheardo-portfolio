"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import vid1 from '../../assets/vid1.jpg';
import vid2 from '../../assets/vid2.jpg';
import vid3 from '../../assets/vid3.jpg';
import vid4 from '../../assets/vid4.jpg';
import vid5 from '../../assets/vid5.jpg';
import vid6 from '../../assets/vid6.jpg';
import Dice from '../../assets/dice-vid.jpg';
import Street from '../../assets/street-codes.jpg';

const VideoCard = ({ thumbnail, title, videoId, onPlay }) => (
  <div className="relative group cursor-pointer" onClick={() => onPlay(videoId)}>
    <Image src={thumbnail} alt={title} className="w-full h-auto rounded-lg" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
      <div className="text-white text-xl">▶</div>
    </div>
  </div>
);

const YouTubePlayer = ({ videoId, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="relative w-full max-w-4xl">
      <button
        onClick={onClose}
        className="absolute -top-10 right-0 text-white hover:text-gray-300"
      >
        <X size={24} />
      </button>
      <div className="aspect-w-16 h-[60vh] md:h-[80vh]">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
);

const VideosPage = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const mainVideoId = "bv8a5OuQztE?si=SRC95rwqNSqT_EvJ";
  const mainVideoTitle = "R O I - T.H.C";

  const videoCards = [
    { id: "video1", thumbnail: vid1, title: "Video 1", videoId: "lYJA0iEyISg?si=CH81n1Kaob25eUvm"  },
    { id: "video2", thumbnail: vid2, title: "Video 2", videoId: "SC_4_JuQ84k?si=r6ODWOZBDyyvcnt0" },
    { id: "video3", thumbnail: vid3, title: "Video 3", videoId: "ZZmhABPVksE?si=3UGeeXcS6rcIeMdp" },
    { id: "video4", thumbnail: vid4, title: "Video 4", videoId: "5MVaX3i5CX4?si=sOZrK8jVsv7xV6eH" },
    { id: "video3", thumbnail: vid5, title: "Video 5", videoId: "zxi_XgrtYFc?si=aW2glkHgEbS6TFkF" },
    { id: "video4", thumbnail: vid6, title: "Video 6", videoId: "r6BeHaH2gcM?si=mlC8VbORxVT5yjrY" },
    { id: "video2", thumbnail: Dice, title: "Video 2", videoId: "uwDhm2YU-ZU?si=HBbQoKfFD5zuIxSl" },
    { id: "video3", thumbnail: Street, title: "Video 3", videoId: "kWz_iIig6oo?si=Gfr4mL4begw-sDzf" },
  ];

  return (
    <div className="py-8">
      <div className="bg-black p-4 md:p-24 md:mb-12 md:flex flex-start h-auto md:h-screen">
        <div className=" mb-4 md:w-[55%]">
          <iframe
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <h2 className="text-xl md:text-2xl text-center py-4 md:py-0 font-bold text-white md:m-auto">{mainVideoTitle}</h2>
      </div>

      <div className="mx-4 my-10 md:m-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videoCards.map((video) => (
          <VideoCard
            key={video.id}
            {...video}
            onPlay={setPlayingVideoId}
          />
        ))}
      </div>

      {playingVideoId && (
        <YouTubePlayer
          videoId={playingVideoId}
          onClose={() => setPlayingVideoId(null)}
        />
      )}
    </div>
  );
};

export default VideosPage;