"use client";
import Audio from "@/components/Audio";
import CardBox from "@/components/CardBox";
import { useSidebar } from "@/context/SidebarContext";
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const AnimePage = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <main className={`${isSidebarOpen ? "ml-80" : "ml-12"} mt-5`}>
      {/* Video Background */}
      <div className="w-full relative overflow-hidden">
        <ReactPlayer
          url="assests/video/bleach.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="object-cover"
        />
        <div className="w-[calc(100%-5rem)] absolute top-16 bottom-6 left-10 z-10 pt-8 pb-14 px-6 bg-black bg-opacity-50 rounded-xl overflow-y-scroll h-[90%] scrollbar-hide">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Living Between Reality and Anime</h1>
            <p className="text-sm">Whether it's action, mystery, or heartwarming moments, anime has a way of capturing emotions like nothing else. Sometimes I watch, sometimes I rewatch—but I’m always part of this universe.</p>
          </div>

          <CardBox />

        </div>
      </div>
      <Audio />


    </main>
  )
}

export default AnimePage

/*
{
  vinland saga
  tokyo ghoul
  as a slime
  jobless reincarnation
  blue lock
  spy family
  parasyte
}
*/
