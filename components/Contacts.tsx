"use client"; 

import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import SocialIcons from "./SocialIcons";

export default function Contacts() {
  const [isCopied, setIsCopied] = useState(false);

  const email = "muhammadfikrifirmansyah0@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="h-full w-full relative flex flex-col justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-500 px-6">
      
      <div className="flex flex-col items-center gap-6 md:gap-8 mt-[-50px] text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-200 tracking-tight leading-tight">
          Hit me up, let&apos;s work together!
        </h2>

        {/* --- AREA TOMBOL COPY --- */}
        <button 
          onClick={handleCopy}
          className="group flex flex-col md:flex-row items-center gap-3 text-lg md:text-2xl font-semibold transition-all duration-300 bg-transparent border-none cursor-pointer outline-none"
        >
          
          <div className="relative flex items-center justify-center w-12 h-12">
            {isCopied ? (
              <FaCheck className="text-green-500 text-4xl md:text-5xl" />
            ) : (
              <IoMdMail className="text-yellow-500 text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300" />
            )}
          </div>
          
          <span className={`${isCopied ? "text-green-500" : "text-gray-300 group-hover:text-white"} transition-colors duration-300`}>
            {isCopied ? "Email Copied to Clipboard!" : email}
          </span>

        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 flex flex-col items-center gap-6 w-full">
        <SocialIcons />
      </div>

    </section>
  );
}