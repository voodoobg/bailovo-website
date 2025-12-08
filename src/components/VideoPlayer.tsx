'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  thumbnailSrc: string;
  videoId: string;
  title?: string;
  hideBottomAd?: boolean; // Adds a blur overlay above controls to hide ads
}

export default function VideoPlayer({ thumbnailSrc, videoId, title = 'Video', hideBottomAd = false }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-strong" style={{ paddingBottom: '56.25%' }}>
      {isPlaying ? (
        <>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          {/* Blur overlay to hide bottom ads */}
          {hideBottomAd && (
            <div 
              className="absolute left-0 right-0 bottom-0 pointer-events-none"
              style={{ 
                height: '40px',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            />
          )}
        </>
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute top-0 left-0 w-full h-full cursor-pointer group"
          aria-label="Play video"
        >
          <Image
            src={thumbnailSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/90 group-hover:bg-white group-hover:scale-110 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg">
              <Play className="w-10 h-10 md:w-12 md:h-12 text-secondary-600 ml-1" fill="currentColor" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

