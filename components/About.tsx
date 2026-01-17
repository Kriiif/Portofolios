import SocialIcons from "./SocialIcons";

interface AboutProps {
  onNavigate: () => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <section className="h-full flex flex-col justify-center items-center px-6 md:px-20 relative animate-in fade-in slide-in-from-bottom-4 duration-500 z-70">

      {/* Konten */}
      <div className="max-w-4xl text-center">
        <h3 className="text-2xl md:text-4xl font-bold leading-relaxed text-gray-200 tracking-wide">
          I am currently an active CS student at State University of Jakarta. I
          enjoy creating web apps with React JS and Next JS. And I have a good
          taste for UI/UX design.
        </h3>
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 flex flex-col items-center gap-6 w-full">
        <button
          onClick={onNavigate}
          className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer"
        >
          Skills
          <span className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-300 text-lg">
            &rarr;
          </span>
        </button>

        <SocialIcons />
      </div>
    </section>
  );
}