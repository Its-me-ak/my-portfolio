import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const CardBox = () => {
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
    // {
    //   title: "Monster",
    //   videoUrl: "assests/video/monster.mp4"
    // },
    {
      title: "kaiju no. 8",
      videoUrl: "assests/video/Kaiju_No_8.mp4"
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {animeData.map((anime, index) => (
        <div key={index} className="w-full relative rounded-lg overflow-hidden">
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
      ))}
    </div>
  );
}

export default CardBox;
