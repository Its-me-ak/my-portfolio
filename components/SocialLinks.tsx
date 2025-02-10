import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
const SocialLinks = () => {
  return (
    <div className="flex-1">
      <h2 className="text-lg font-bold mb-2">About</h2>
      <div className="space-y-4">
        <Link
          href="https://www.linkedin.com/in/mohd-aquib-936140225/"
          target="_blank"
          className="flex items-center justify-start px-3 py-1 border-b-4 border-vscodeAccent space-x-2 bg-[#262626]"
        >
          <FaLinkedin className="text-[#0a66c2]" />
          <span>LinkedIn Profile</span>
        </Link>
        <Link
          href="https://github.com/Its-me-ak"
          target="_blank"
          className="flex items-center justify-start px-3 py-1 border-b-4 border-vscodeAccent space-x-2 bg-[#262626]"
        >
          <FaGithub className="text-gray-300" />
          <span>GitHub Page</span>
        </Link>
        <Link
          href="https://x.com/Aquib_Techie77"
          target="_blank"
          className="flex items-center justify-start px-3 py-1 border-b-4 border-vscodeAccent space-x-2 bg-[#262626]"
        >
          <FaTwitter className="text-[#1da1f2]" />
          <span>Twitter Handle</span>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/akib__077?igsh=MTUwbXZ2ZmgzZjM0bw=="
          className="flex items-center justify-start px-3 py-1 border-b-4 border-vscodeAccent space-x-2 bg-[#262626]"
        >
          <FaInstagram className="text-[#c13584]" />
          <span>Instagram Handle</span>
        </Link>
        <Link
          target="_blank"
          href="https://wa.me/9129123517"
          className="flex items-center justify-start px-3 py-1 border-b-4 border-vscodeAccent space-x-2 bg-[#262626]"
        >
          <FaWhatsapp className="text-[#3cc14c]" />
          <span>Whatsapp Chat</span>
        </Link>
        <Link
          href="https://peerlist.io/aquib_"
          target="_blank"
          className="flex items-center justify-start px-3 py-1 border-b-4 border-vscodeAccent space-x-2 bg-[#262626]"
        >
          <SiPeerlist className="text-[#00a742]" />
          <span>Peerlist Page</span>
        </Link>
      </div>
    </div>
  );
};

export default SocialLinks;
