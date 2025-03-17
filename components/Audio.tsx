"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Audio = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        setIsPlaying(true);
    }, []);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <div className="fixed top-14 right-10 z-20">
            <button
                onClick={togglePlayPause}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                {isPlaying ? "Pause" : "Play"}
            </button>
            <ReactPlayer
                url="https://ik.imagekit.io/cdawtccmt/assests/aizen-theme.mp3"
                playing={isPlaying}
                loop
                controls={false} 
                width="0"
                height="0"
            />
        </div>
    );
};

export default Audio;
