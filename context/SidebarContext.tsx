"use client"; // Context needs to be a client component

import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext({
    isSidebarOpen: true,
    toggleSidebar: () => { },
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

     // Hide sidebar by default on mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSidebarOpen(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    return useContext(SidebarContext);
}
