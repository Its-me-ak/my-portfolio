"use client";
import CardBox from "@/components/CardBox";
import { useSidebar } from "@/context/SidebarContext";

const AnimePage = () => {
  const { isSidebarOpen } = useSidebar();

  const animeData = [
    {
      title: "Bleach",
      videoUrl: "assests/video/bleach-anime.mp4"
    },
    {
      title: "Naruto",
      videoUrl: "assests/video/naruto.mp4"
    },
    {
      title: "dragon ball super",
      videoUrl: "assests/video/dbs.mp4"
    },
    {
      title: "dragon ball z",
      videoUrl: "assests/video/dbz.mp4"
    },
    {
      title: "Attack on titan",
      videoUrl: "assests/video/aot.mp4"
    },
    {
      title: "demon slayer",
      videoUrl: "assests/video/ds.mp4"
    },
    {
      title: "black clover",
      videoUrl: "assests/video/bc.mp4"
    },
    {
      title: "jujutsu kaisen",
      videoUrl: "assests/video/jjk.mp4"
    },
    {
      title: "one punch man",
      videoUrl: "assests/video/opm.mp4"
    },
    {
      title: "hunter x hunter",
      videoUrl: "assests/video/hxh.mp4"
    },
    {
      title: "death note",
      videoUrl: "assests/video/death-note.mp4"
    },
    {
      title: "vinland saga",
      videoUrl: "assests/video/vinland.mp4"
    },
    {
      title: "Monster",
      videoUrl: "assests/video/Johan_Liebert.mp4"
    },
    {
      title: "kaiju no. 8",
      videoUrl: "assests/video/Kaiju_No_8.mp4"
    },
    {
      title: "fire force",
      videoUrl: "assests/video/Fire_Force.mp4"
    },
    {
      title: "spy family",
      videoUrl: "assests/video/spy-family.mp4"
    },

    {
      title: "solo leveling",
      videoUrl: "assests/video/solo-leveling.mp4"
    },
    {
      title: "chainsaw man",
      videoUrl: "assests/video/chainsawmen.mp4"
    },
    {
      title: "boruto",
      videoUrl: "assests/video/boruto.mp4"
    },
    {
      title: "blue lock",
      videoUrl: "assests/video/bl.mp4"
    },
    {
      title: "tokyo ghoul",
      videoUrl: "assests/video/tg.mp4"
    },
    {
      title: "that time i got reincarnated as a slime",
      videoUrl: "assests/video/slime.mp4"
    },
    {
      title: "dandadan",
      videoUrl: "assests/video/dandadan.mp4"
    },
    {
      title: "dororo",
      videoUrl: "assests/video/dororo.mp4"
    },
    {
      title: "mushoku tensei",
      videoUrl: "assests/video/mt.mp4"
    },
    {
      title: "haikyu",
      videoUrl: "assests/video/haiyku.mp4"
    },
  ]
  return (
    <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"}  mt-20 pb-20`}>
      <div className="mb-10">
        <h1 className="md:text-4xl text-3xl font-bold text-white mb-2 leading-normal">Living Between Reality and Anime</h1>
        <p className="text-sm">Whether its action, mystery, or heartwarming moments, anime has a way of capturing emotions like nothing else. Sometimes I watch, sometimes I rewatch—but I’m always part of this universe.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {animeData.map((anime) => (
          <CardBox key={anime.title} anime={anime} />
        ))}
      </div>
    </main>
  )
}

export default AnimePage

