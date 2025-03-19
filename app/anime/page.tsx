"use client";
import CardBox from "@/components/CardBox";
import { useSidebar } from "@/context/SidebarContext";

const AnimePage = () => {
  const { isSidebarOpen } = useSidebar();

  return (
      <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"}  mt-20 pb-20`}>
       <div className="mb-10">
            <h1 className="text-3xl font-bold text-white mb-2">Living Between Reality and Anime</h1>
            <p className="text-sm">Whether its action, mystery, or heartwarming moments, anime has a way of capturing emotions like nothing else. Sometimes I watch, sometimes I rewatch—but I’m always part of this universe.</p>
          </div>
          <CardBox />
    </main>
  )
}

export default AnimePage

