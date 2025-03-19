import Heading from "@/components/Heading";
import SocialLinks from "@/components/SocialLinks";
import HomeContainer from "@/components/HomeContainer"

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto lg:mt-20 mt-12 lg:ml-96 ml-12 pb-20">
      <Heading />
      <div className="mt-6 lg:flex justify-between">
        <HomeContainer/>
        <SocialLinks />
      </div>
    </main>
  );
}
