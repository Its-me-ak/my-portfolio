import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-vscodeSidebar border-r border-vscodeBorder p-4">
      <h2 className="text-lg font-bold">EXPLORER</h2>
      <div className="mt-4">
        <p className="text-sm text-gray-400">About</p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white">
            <FaHtml5 className="text-orange-500" />
            <span>index.html</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white">
            <FaCss3Alt className="text-blue-500" />
            <span>experience.css</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white">
            <FaJs className="text-yellow-500" />
            <span>skills.js</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-white">
            <FaReact className="text-cyan-400" />
            <span>projects.ts</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
