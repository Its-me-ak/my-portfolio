import Heading from "@/components/Heading";
import SocialLinks from "@/components/SocialLinks";
import HomeContainer from "@/components/HomeContainer"
// import {
//   FaHtml5,
// } from "react-icons/fa";

export default function Home() {
  return (
    <>
       {/* <div className="flex bg-[#122738] text-white text-sm">
        <div className="flex items-center gap-1 px-4 py-2 bg-[#193549] border-r border-slate-700">
          <FaHtml5 className="text-[#e65100]" />
          <span>index.html</span>
        </div>
      </div> */}
    <main className="max-w-5xl mx-auto lg:mt-20 mt-12 lg:ml-96 ml-12 pb-20">
      <Heading />
      <div className="mt-6 lg:flex justify-between">
        <HomeContainer/>
        <SocialLinks />
      </div>
    </main>
    </>
  );
}
