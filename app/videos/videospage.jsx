"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import YouTube from 'react-youtube';
import { X } from 'lucide-react';

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const featuredVideos = [
    { id: 'video1', title: '2 CHAINZ - NEIGHBORS KNOW MY NAME', youtubeId: 'dQw4w9WgXcQ' },
    // Add more featured videos as needed
  ];

  const thumbnailVideos = [
    { id: 'thumb1', title: 'Video 1', youtubeId: 'dQw4w9WgXcQ', thumbnailUrl: '/images/thumbnail1.jpg' },
    { id: 'thumb2', title: 'Video 2', youtubeId: 'dQw4w9WgXcQ', thumbnailUrl: '/images/thumbnail2.jpg' },
    // Add more thumbnail videos as needed
  ];

  const handleThumbnailClick = (youtubeId) => {
    setSelectedVideo(youtubeId);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Featured Videos Section */}
      <section className="mb-8">
        {featuredVideos.map((video) => (
          <div key={video.id} className="mb-4">
            <h2 className="text-xl font-bold mb-2">{video.title}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <YouTube
                videoId={video.youtubeId}
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 0,
                  },
                }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Thumbnail Videos Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {thumbnailVideos.map((video) => (
            <div key={video.id} className="cursor-pointer" onClick={() => handleThumbnailClick(video.youtubeId)}>
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Popup */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={closePopup}
            >
              <X size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <YouTube
                videoId={selectedVideo}
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosPage;