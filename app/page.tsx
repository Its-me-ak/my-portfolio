import Heading from "@/components/Heading";
import SocialLinks from "@/components/SocialLinks";
import HomeContainer from "@/components/HomeContainer"

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto mt-20 ml-96">
      <Heading />
      <div className="mt-6 flex justify-between">
        <HomeContainer/>
        <SocialLinks />
      </div>
    </main>
  );
}
