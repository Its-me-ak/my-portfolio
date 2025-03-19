"use client";

import { createContext, useContext, useEffect, useState, useRef, RefObject } from "react";

interface SidebarContextProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    sidebarRef: RefObject<HTMLDivElement>;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const handleSidebar = (e: MouseEvent) => {
            if (!sidebarRef.current) return;

            if (!sidebarRef.current.contains(e.target as Node)) {
                setIsSidebarOpen(false);
            }
        };
        document.addEventListener("click", handleSidebar, true);

        return () => {
            document.removeEventListener("click", handleSidebar);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSidebarOpen(window.innerWidth >= 848);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar, sidebarRef }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
}
