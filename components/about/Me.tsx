import { useSidebar } from "@/context/SidebarContext";
import Image from "next/image";
import React from "react";
import { ShimmerButton } from "../magicui/shimmer-button";
import { TextAnimate } from "../magicui/text-animate";
import { TypingAnimation } from "../magicui/typing-animation";
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";

const Me = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="flex lg:flex-row flex-col gap-2 justify-between">
      <div
        className={`${isSidebarOpen ? "max-w-xl" : "max-w-4xl"
          }  text-justify space-y-3`}
      >
        <h3 className="text-md font-semibold text-vscodeAccent">
          <TextAnimate animate="slideUp" by="word">
            Hello, Welcome
          </TextAnimate>
        </h3>
        <h1 className="text-4xl font-bold">
          <TextAnimate animate="slideLeft" by="word">
            I&apos;m Mohd Aquib
          </TextAnimate>
        </h1>
        <div className="pb-4">
          <TypingAnimation className="text-md" duration={30}>
            A passionate frontend developer with a flair for crafting immersive
            and visually appealing web experiences. Fluent in the languages of
            the web, I&apos;m well-versed in HTML, CSS, SASS, Bootstrap, JavaScript,
            and WordPress. I have a strong command of modern frontend frameworks
            such as React, and I&apos;m always eager to explore new tools and
            technologies that push the boundaries of what&apos;s possible on the web.
          </TypingAnimation>
        </div>
        <div className="flex gap-5">
          <Link href={"/contact"}>
            <ShimmerButton>Contact Me</ShimmerButton>
          </Link>
          <Link href="assests/Mohd_Aquib_Frontend_Developer_CV.pdf" target="_blank" rel="noopener noreferrer" download>
            <ShimmerButton>Download CV</ShimmerButton>
          </Link>
        </div>
      </div>
      <div className="relative rounded-xl lg:h-[450px] lg:w-[450px] lg:mt-0 mt-6 ">
        <Image
          src={"/assests/about.jpg"}
          alt="About Image"
          height={450}
          width={500}
          className="rounded-xl"
        />
        <BorderBeam duration={8} size={200} />
      </div>
    </div>
  );
};

export default Me;
