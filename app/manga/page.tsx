"use client";
import MediaCard from "@/components/MediaCard";
import { useSidebar } from "@/context/SidebarContext";
const MangaPage = () => {
      const { isSidebarOpen } = useSidebar();
      const mangaData = [
        {
            title: "Dragon ball super",
            image: "/assests/dbs.jpg",
        },
             {
            title: "Dragon ball kakumei",
            image: "/assests/dbk.jpg",
        },
              {
            title: "bleach",
            image: "/assests/bleach.jpg",
        },
              {
            title: "black clover",
            image: "/assests/bc.webp",
        },
              {
            title: "boruto",
            image: "/assests/boruto-2.jpg",
        },
              {
            title: "one punch man",
            image: "/assests/opm.jpg",
        },
              {
            title: "jujutsu kaisen",
            image: "/assests/jjk.jpg",
        },
              {
            title: "blue lock",
            image: "/assests/bl.jpg",
        },
              {
            title: "sakomoto days",
            image: "/assests/sd.jpg",
        },
                     {
            title: "solo leveling",
            image: "/assests/sl.jpg",
        },
                     {
            title: "kaiju no. 8",
            image: "/assests/kj.jpg",
        },
      ]
    
    return (
        <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"}  mt-20 pb-20`}>
            <div className="mb-10">
                <h1 className="md:text-4xl text-3xl font-bold leading-normal text-white mb-2"> Where Fantasy Meets Reality, Dive Into Manga</h1>
                <p className="text-sm">Manga is more than just stories; it’s an experience. Whether it’s epic battles, heartfelt friendships, or mind-bending mysteries, each chapter takes us on an unforgettable journey. Step into the world of manga and let your imagination run wild.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {mangaData.map((manga) => (
                    <MediaCard key={manga.title} media={manga} />
                ))}
            </div>
        </main>
    )
}

export default MangaPage
