"use client";

import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "./SocialIcons";

interface HeroProps {
  onNavigate: () => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="h-full flex flex-col justify-center items-center px-6 relative pt-10 animate-in fade-in zoom-in duration-500">
      
      {/* Konten Utama */}
      <div className="text-center gap-3 md:gap-4 flex flex-col mt-[-40px]">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          HI, I’m Fikri.
        </h1>

        <h2 className="text-xl md:text-3xl font-semibold text-gray-300 min-h-[40px]">
          <span className="text-yellow-500">
            <Typewriter
              words={["A Front-end Developer", "Based in Indonesia"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 flex flex-col items-center gap-6 w-full">
        <button
          onClick={onNavigate}
          className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer"
        >
          Discover
          <span className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-300 text-lg">
            &rarr;
          </span>
        </button>

        <SocialIcons />
      </div>
    </section>
  );
}