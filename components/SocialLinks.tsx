import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">About</h2>
      <div className="space-y-2">
        <a
          href="https://linkedin.com"
          className="flex items-center space-x-2 hover:text-vscodeAccent"
        >
          <FaLinkedin className="text-blue-500" />
          <span>LinkedIn Profile</span>
        </a>
        <a
          href="https://github.com"
          className="flex items-center space-x-2 hover:text-vscodeAccent"
        >
          <FaGithub className="text-gray-300" />
          <span>GitHub Page</span>
        </a>
        <a
          href="https://twitter.com"
          className="flex items-center space-x-2 hover:text-vscodeAccent"
        >
          <FaTwitter className="text-blue-400" />
          <span>Twitter Handle</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
