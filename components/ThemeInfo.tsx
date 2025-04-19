import Image from "next/image";

interface ThemeInfoProps {
  icon: string;
  name: string;
  publisher: string;
  theme: string;
}

const ThemeInfo = ({ icon, name, publisher, theme }: ThemeInfoProps) => {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="flex flex-col items-center text-center m-2 p-8 rounded border border-transparent relative bg-[var(--explorer-bg)]">
      <div className="w-20 h-20 flex items-center justify-center mb-2 p-1">
        <Image
          src={icon}
          alt={name}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="mt-3 flex flex-col justify-between w-full">
        <div>
          <h3 className="text-[0.95rem] text-[var(--text-color)] mb-[0.15rem] font-semibold">
            {name}
          </h3>
          <h5 className="text-xs font-normal mb-3 text-white/60">
            {publisher}
          </h5>
        </div>
        <button
          onClick={() => setTheme(theme)}
          className="mt-2 w-full px-2 py-1 text-sm font-semibold rounded bg-[var(--button-bg)] text-[var(--button-text)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
        >
          Set Color Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeInfo;
