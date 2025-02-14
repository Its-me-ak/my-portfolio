import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import React from "react";
import { ShimmerButton } from "../magicui/shimmer-button";
import { TextAnimate } from "../magicui/text-animate";
import { TypingAnimation } from "../magicui/typing-animation";
import Link from "next/link";

const Me = () => {

  const { isSidebarOpen } = useSidebar();

  return (
    <div className="flex gap-2 justify-between">
      <div
        className={`${
          isSidebarOpen ? "max-w-xl" : "max-w-4xl"
        }  text-justify space-y-3`}
      >
        <h3 className="text-md font-semibold text-vscodeAccent">
          <TextAnimate animate="slideUp" by="word">
            Hello, Welcome
          </TextAnimate>
        </h3>
        <h1 className="text-4xl font-bold">
          <TextAnimate animate="slideLeft" by="word">
            I'm Mohd Aquib
          </TextAnimate>
        </h1>
        <div className="pb-4">
          <TypingAnimation className="text-md" duration={30}>
            A passionate frontend developer with a flair for crafting immersive
            and visually appealing web experiences. Fluent in the languages of
            the web, I'm well-versed in HTML, CSS, SASS, Bootstrap, JavaScript,
            and WordPress. I have a strong command of modern frontend frameworks
            such as React, and I'm always eager to explore new tools and
            technologies that push the boundaries of what's possible on the web.
          </TypingAnimation>
        </div>
        <Link href={'/contact'}>
          <ShimmerButton>Contact Me</ShimmerButton>
        </Link>
      </div>
      <div>
        <Image
          src={"/assests/about.jpg"}
          alt=""
          height={450}
          width={450}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Me;
