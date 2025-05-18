"use client"
import ThemeInfo from "@/components/ThemeInfo";
import { useSidebar } from "@/context/SidebarContext";

const SettingsPage = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"}  mt-10 pb-10`}>
      <div
        className="
          w-full 
          grid 
          grid-cols-[repeat(auto-fill,minmax(220px,1fr))] 
          gap-4 
          rounded-lg 
          p-4 
          sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] 
          xs:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] 
          xs:gap-3 
          xs:p-2
        "
      >
        <ThemeInfo
          name="Cobalt2"
          icon="/assests/cobalt2.jpg"
          publisher="Wes Bos"
          theme="cobalt2"
        />
        <ThemeInfo
          name="GitHub Dark"
          icon="/assests/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
        />
        <ThemeInfo
          name="Dracula"
          icon="/assests/dracula.png"
          publisher="Dracula Theme"
          theme="dracula"
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/assests/ayu.png"
          publisher="teabyii"
          theme="ayu-dark"
        />
        <ThemeInfo
          name="SynthWave '84"
          icon="/assests/synthwave84.jpg"
          publisher="Robb Owen"
          theme="synthwave84"
        />
        <ThemeInfo
          name="Nord"
          icon="/assests/nord.png"
          publisher="arcticicestudio"
          theme="nord"
        />
        <ThemeInfo
          name="Night Owl"
          icon="/assests/night-owl.png"
          publisher="sarah.drasner"
          theme="night-owl"
        />
      </div>
    </main>
  );
};

// export async function getStaticProps() {
//   return {
//     props: { title: "Settings" },
//   };
// }

export default SettingsPage;
