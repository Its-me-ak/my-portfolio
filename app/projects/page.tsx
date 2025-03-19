"use client";
import React from "react";
import { useSidebar } from "@/context/SidebarContext";
import ProjectCard from "@/components/project/ProjectCard";

// Sample Projects Array
const projects = [
  {
    title: "X Clone",
    description:
      "A fully functional Twitter clone built with the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates key features such as real-time chat with Socket.io",
    image: "/assests/p0.png",
    technologies: ["Tailwind", "DaisyUI", "React",  "Node", "ExpressJS", "MongoDB", "Socket.io", "React Query", "JWT"],
    liveLink: "https://twtter-mern-project.onrender.com/",
    githubLink: "https://github.com/Its-me-ak/twtter-mern-project",
  },
  {
    title: "Movie App",
    description: "This project is a movie website built with React and Redux, and fetches data from the TMDB API to display movie details, cast, and crew information.",
    image: "/assests/p28.png",
    technologies: ["Tailwind", "React", "Redux Toolkit", "TMDB API", "Clerk"],
    liveLink: "https://filmfolio-movie-website.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/FilmFolio-Redux",
  },
  {
    title: "Weather App",
    description: "A modern weather application built with React and OpenWeather API. It provides real-time weather updates, temperature, humidity, and wind speed for any location worldwide.",
    image: "/assests/p21.png",
    technologies: ["Tailwind", "React", "OpenWeather API", "Fetch API"],
    liveLink: "https://react-weather-app-v7.netlify.app/",
    githubLink: "https://github.com/Its-me-ak/React-Weather-App",
  },
    {
    title: "Frequent Research",
    description: "Frequent Research is a modern and user-friendly website designed for seamless navigation and accessibility. It offers a clean and professional layout, ensuring a smooth experience across all devices.",
    image: "/assests/p23.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Animation", "React", "Context API", "JSON", ],
    liveLink: "https://frequentresearch.com/",
    githubLink: "https://github.com/Its-me-ak",
  },
    {
    title: "VEI Institute",
    description: "VEI Website is a visually engaging and seamlessly designed platform that delivers a smooth and immersive browsing experience. With a sleek layout and intuitive navigation.",
    image: "/assests/p19.png",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Animation"],
    liveLink: "https://vei-website.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/vei-website",
  },
    {
    title: "TODO App",
    description: "Stay organized with this simple and intuitive to-do app. Easily add, edit, and remove tasks to keep track of your daily goals and boost productivity.",
    image: "/assests/p27.png",
    technologies: ["Tailwind", "React", "Redux", "RTK Query", "JSON Server"],
    liveLink: "https://rtk-todo-web-app.netlify.app/",
    githubLink: "https://github.com/Its-me-ak/todo-app-with-redux",
  },
      {
    title: "Youtube Clone",
    description: "YouTube Clone Lite is a minimal yet functional YouTube-inspired web app built with React and RapidAPI. It allows users to search for videos, browse trending content, and watch videos seamlessly with a clean and responsive UI.",
    image: "/assests/p25.png",
    technologies: ["Tailwind", "JavaScript", "React", "Context API", "Youtube API","Axios"],
    liveLink: "https://youtube-clone-lite.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/youtube_lite",
  },
      {
    title: "Password Generator",
    description: "React Password Generator is a simple and efficient password generator built with React. It allows users to create strong, customizable passwords with options for length, numbers, and special characters.",
    image: "/assests/p29.png",
    technologies: ["Tailwind", "React", "React Hooks"],
    liveLink: "https://password-generator-76.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/password-generator",
  },
      {
    title: "Fam Photography",
    description: "A modern and elegant photography portfolio website with a clean, minimalist design. It features a visually appealing layout, smooth transitions, and a well-structured gallery to showcase stunning photography work.",
    image: "/assests/p17.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Animation", "jQuery", ],
    liveLink: "https://fam-photography.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/Fam-Studio",
  },
    {
    title: "Music Player",
    description: "A sleek and interactive JavaScript music player with a user-friendly interface. It features smooth playback controls, a dynamic playlist, and an intuitive design for an enjoyable listening experience.",
    image: "/assests/p18.png",
    technologies: ["HTML", "CSS", "JavaScript",],
    liveLink: "https://music-player-weld-psi.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/music-player",
  },
    {
    title: "Currency Converter",
    description: "A simple and efficient currency converter app with a clean UI. It allows users to quickly convert currencies in real-time, providing accurate exchange rates for seamless conversions.",
    image: "/assests/p30.png",
    technologies: ["Tailwind", "React", "Custom Hook", "Axios", "Exchange Rate API"],
    liveLink: "https://currency-converter-ap.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/currency-converter",
  },
      {
    title: "Digital Clock",
    description: "Digital Clock is a simple and responsive web-based clock built using JavaScript. It dynamically updates the current time in real-time, featuring a clean and minimal design.",
    image: "/assests/p1.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://digital-clock-tau-sooty.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/Digital-Clock",
  },
      {
    title: "Dice Game",
    description: "Dice Game is an interactive and fun web-based game built with JavaScript. Players roll the dice to get random outcomes, making it an engaging way to test their luck. The game features a clean and responsive design for a smooth user experience.",
    image: "/assests/p26.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://dice-game-three-livid.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/dice-game",
  },
      {
    title: "The Cappa",
    description: "The Cappa is a modern and fully responsive web project showcasing a stylish and elegant design. Built with HTML, CSS, and Bootstrap, it features a sleek layout, smooth animations, and a user-friendly interface, making it perfect for hotels, resorts, or luxury businesses.",
    image: "/assests/p10.png",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    liveLink: "https://the-cappa-one.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/The-Cappa",
  },
        {
    title: "Form Validation",
    description: "Form Validation App is a user-friendly web application built with HTML, CSS, and JavaScript that ensures correct input values by validating user entries in real-time. It provides instant feedback, preventing invalid submissions and enhancing form accuracy.",
    image: "/assests/p13.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://form-validation-livid-seven.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/form-validation",
  },
          {
    title: "Cafephile Website",
    description: "CafePhile is a beautifully designed, responsive cafe website built with HTML, CSS. It features an elegant layout, smooth animations, making it perfect for showcasing a cafe’s menu, ambiance, and services.",
    image: "/assests/p5.png",
    technologies: ["HTML", "CSS"],
    liveLink: "https://cafephile.vercel.app/",
    githubLink: "https://github.com/Its-me-ak/Cafephile",
  },
];

const ProjectPage = () => {
  const { isSidebarOpen } = useSidebar();

  return (
   <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"}  mt-20 pb-20`}>
      <h1 className="text-4xl font-bold">Featured Projects</h1>
      <p className="text-sm text-gray-300 leading-6 mt-3">
        College and Side Projects for practice.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project}/>
        ))}
      </div>
    </main>
  );
};

export default ProjectPage;
