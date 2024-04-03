import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="flex h-auto w-full md:h-[40rem] flex-col justify-center items-center relative overflow-hidden mx-auto py-4 md:py-0">
      <div className="z-10 relative w-full text-center">
        {" "}
        <Spotlight
          className="-top-50 left-0 md:left-60  md:-top-10"
          fill="white"
        />
        <h1 className="text-4xl mt-32  md:mt-32 md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          Master the art of Music
        </h1>
        <p className="mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          debitis veniam eveniet alias ducimus magni? Molestias repellat
          voluptates, facere vel quo ex voluptatem officia qui repellendus a,
          unde tenetur. Rem.
        </p>
        <div className="mt-8">
          <Link href={"/"} className="dark">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white  border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
