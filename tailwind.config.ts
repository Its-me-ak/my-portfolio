import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vscodeBg: "#193549",
        vscodeHeader: "#1f4662",
        vscodeSidebar: "#15232d",
        vscodeBorder: "#3c3c3c",
        vscodeText: "#d4d4d4",
        vscodeAccent: "#007acc",
      },
    },
  },
  plugins: [],
} satisfies Config;
