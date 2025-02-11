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
    <div className="flex justify-between text-xs items-center px-2 bg-vscodeFooter border-t border-vscodeHeader fixed w-full h-6 bottom-0">
      <ul className="flex gap-2 items-center">
        <li>Build in:</li>
        <li>NextJs</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
      </ul>
      <ul className="flex gap-4 items-center">
        <li>UTF 8</li>
        <li>Port:3000</li>
        <li>Prettier</li>
        <li>
          {dateFormatter.format(currentTime)},{" "}
          {timeFormatter.format(currentTime)}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
