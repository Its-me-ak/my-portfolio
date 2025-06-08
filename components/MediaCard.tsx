import Image from 'next/image';
import React from 'react';

interface Card {
  title: string;
  image: string;
}

interface MangaCardProps {
  media: Card;
}

const MediaCard: React.FC<MangaCardProps> = ({media}) => {
  return (
        <div className="w-full relative rounded-lg overflow-hidden">
            <Image
            src={media.image}
            alt={media.title}
            width={300}
            height={300}
            className='sm:h-80 h-full w-full'
              quality={70} 
  loading="lazy"
            />
          <div className="absolute top-0 left-0 h-full w-full bg-black/20 rounded-lg"></div>
          <div className="w-full absolute bottom-2 left-2 p-1 z-10">
            <h1 className="text-lg font-semibold capitalize">{media.title}</h1>
          </div>
        </div>
  );
}

export default MediaCard;
