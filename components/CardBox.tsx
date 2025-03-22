import dynamic from 'next/dynamic';
import React from 'react';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface Card {
  title: string;
  videoUrl: string;
}

interface CardProps {
  anime: Card;
}

const CardBox: React.FC<CardProps> = ({anime}) => {
  return (
        <div className="w-full relative rounded-lg overflow-hidden">
          <ReactPlayer
            url={anime.videoUrl}
            playing
            loop
            muted
            width="100%"
            height="100%"
            className="object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/30 rounded-lg"></div>
          <div className="w-full absolute bottom-2 left-2 p-1">
            <h1 className="text-lg font-semibold capitalize">{anime.title}</h1>
          </div>
        </div>
  );
}

export default CardBox;
