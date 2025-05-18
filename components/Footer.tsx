"use client";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  if (!currentTime) return null;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div className="flex justify-between text-xs items-center px-2 bg-[var(--bottombar-bg)] border-t border-bottombar fixed z-[999] w-full bottom-0">
      <ul className="flex gap-2 items-center text-gray-300">
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">Build in:</li>
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">NextJs</li>
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">React</li>
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">TypeScript</li>
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">Tailwind</li>
      </ul>
      <ul className="lg:flex hidden gap-4 items-center text-gray-300">
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">UTF 8</li>
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">Port:3000</li>
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">Prettier</li>
        <li className="p-1 hover:bg-[var(--bottombar-hover-bg)] cursor-pointer">
          {dateFormatter.format(currentTime)},{" "}
          {timeFormatter.format(currentTime)}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
