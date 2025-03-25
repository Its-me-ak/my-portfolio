"use client";
import MediaCard from "@/components/MediaCard";
import { useSidebar } from "@/context/SidebarContext";
const GamingPage = () => {
      const { isSidebarOpen } = useSidebar();
      const gamingData = [
        {
            title: "Battleground mobile india",
            image: "/assests/bgmi-2.jpg",
        },
             {
            title: "call of duty mobile",
            image: "/assests/codm-2.jpg",
        },
              {
            title: "need for speed - most wanted",
            image: "/assests/nfs-mw.jpg",
        },
              {
            title: "genshin impact",
            image: "/assests/gi.jpg",
        },
              {
            title: "need for speed - hot pursuit",
            image: "/assests/nfs-hp.jpg",
        },
              {
            title: "need for speed carbon",
            image: "/assests/nfsc.jpg",
        },
              {
            title: "delta force",
            image: "/assests/df.jpg",
        },
              {
            title: "rainbow 6",
            image: "/assests/rainbow.jpg",
        },
              {
            title: "cricket 07",
            image: "/assests/cr7.jpg",
        },
                     {
            title: "GTA vice city",
            image: "/assests/gta.jpg",
        },
      ]
    
    return (
        <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"}  mt-20 pb-20`}>
            <div className="mb-10">
                <h1 className="md:text-4xl text-3xl font-bold text-white mb-2 leading-normal">Legends Are Made in the Game</h1>
                <p className="text-sm">Every game is a battlefield where skills, strategy, and passion collide. Whether you’re looking for intense action, high-speed races, or open-world exploration, it’s time to level up and immerse yourself in a world of endless possibilities.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {gamingData.map((game) => (
                    <MediaCard key={game.title} media={game} />
                ))}
            </div>
        </main>
    )
}

export default GamingPage
