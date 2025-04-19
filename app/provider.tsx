"use client";

import { useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SidebarProvider } from "@/context/SidebarContext";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return (
    <SidebarProvider>
      <Toaster />
      <TopHeader />
      <div className="flex h-screen bg-[var(--main-bg)] text-vscodeText overflow-auto">
        <Sidebar />
        <main className="flex-grow p-6">{children}</main>
        <Analytics />
        <SpeedInsights />
      </div>
      <Footer />
    </SidebarProvider>
  );
}
