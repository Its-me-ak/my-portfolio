import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/fira-code";
import Providers from "./provider";


export const metadata: Metadata = {
  title: "Mohd Aquib | Frontend Developer & Web Designer",
  description: "Creative Frontend Developer & Web Designer specializing in React.js, Next.js, and modern UI frameworks. Focused on delivering high-performance, user-friendly websites with responsive design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
       <Providers>
        {children}
       </Providers>
      </body>
    </html>
  );
}
