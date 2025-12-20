"use client";
import { useInView } from "react-intersection-observer";

interface AnimeVideoCardProps {
  title: string;
  videoId: string;
}

const AnimeVideoCard = ({ title, videoId }: AnimeVideoCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const videoSrc = `https://res.cloudinary.com/${cloudName}/video/upload/v1766235890/${videoId}.mp4`;

  return (
    <div ref={ref} className="rounded-xl overflow-hidden relative">
      {inView && (
        <video
          src={videoSrc}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute top-0 left-0 h-full w-full bg-black/30 rounded-lg"></div>
      <div className="w-full absolute bottom-2 left-2 p-1">
        <h1 className="text-lg font-semibold capitalize">{title}</h1>
      </div>
    </div>
  );
};

export default AnimeVideoCard;
