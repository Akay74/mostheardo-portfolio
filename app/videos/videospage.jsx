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
      <div className="aspect-w-16 aspect-h-9">
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

  const mainVideoId = "gi3iUIqBqylodN3w";
  const mainVideoTitle = "R O I - GOODI MAN";

  const videoCards = [
    { id: "video1", thumbnail: vid1, title: "Video 1", videoId: "gi3iUIqBqylodN3w" },
    { id: "video2", thumbnail: vid2, title: "Video 2", videoId: "7fOMhk2BPjBh83UW" },
    { id: "video3", thumbnail: vid3, title: "Video 3", videoId: "Yid3eFDMgVW26lIY" },
    { id: "video4", thumbnail: vid4, title: "Video 4", videoId: "JBVB5YuW3IxEPZJq" },
    { id: "video3", thumbnail: vid5, title: "Video 3", videoId: "s8gtmwCPW2w4_n0O" },
    { id: "video4", thumbnail: vid6, title: "Video 4", videoId: "zM5OnVz1bem20ET9" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <h2 className="text-2xl font-bold text-white">{mainVideoTitle}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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