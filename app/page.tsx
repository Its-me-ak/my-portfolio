import SocialLinks from "@/components/SocialLinks";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Raj Savaliya</h1>
      <p className="text-lg text-gray-400">Software Development Engineer</p>

      <div className="mt-6">
        <h2 className="text-lg font-bold mb-2">Start</h2>
        <ul className="space-y-2">
          <li className="cursor-pointer text-vscodeAccent hover:underline">
            🔹 Skills ...
          </li>
          <li className="cursor-pointer text-vscodeAccent hover:underline">
            🔹 Projects ...
          </li>
          <li className="cursor-pointer text-vscodeAccent hover:underline">
            🔹 Anime ...
          </li>
          <li className="cursor-pointer text-vscodeAccent hover:underline">
            🔹 Get in Touch ...
          </li>
        </ul>
      </div>

      <SocialLinks />
    </main>
  );
}
