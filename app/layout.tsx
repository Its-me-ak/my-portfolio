import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";
import "@fontsource/fira-code";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";
import { SidebarProvider } from "@/context/SidebarContext";
import { Toaster } from "react-hot-toast"

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
        <SidebarProvider>
          <Toaster />
          <TopHeader />
          <div className="flex h-screen bg-vscodeBg text-vscodeText overflow-auto">
            <Sidebar />
            <main className="flex-grow p-6">{children}</main>
            <Analytics />
          </div>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
