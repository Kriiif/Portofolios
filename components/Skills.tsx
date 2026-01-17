import { 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiMysql, 
  SiGit, 
  SiJavascript, 
  SiDocker 
} from "react-icons/si";
import SocialIcons from "./SocialIcons";

interface SkillsProps {
  onNavigate: () => void;
}

export default function Skills({ onNavigate }: SkillsProps) {
  const skills = [
    { icon: SiHtml5, color: "text-orange-600", name: "HTML" },
    { icon: SiCss3, color: "text-blue-600", name: "CSS" },
    { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind" },
    { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
    { icon: SiReact, color: "text-cyan-300", name: "React" },
    { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
    { icon: SiMysql, color: "text-blue-400", name: "MySQL" },
    { icon: SiGit, color: "text-red-500", name: "Git" },
    { icon: SiJavascript, color: "text-yellow-400", name: "JavaScript" },
    { icon: SiDocker, color: "text-blue-500", name: "Docker" },
  ];

  return (
    <section className="h-full flex flex-col justify-center items-center px-6 relative animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Judul */}
      <div className="text-center mb-16 mt-[-40px]">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-200 tracking-tight">
          Techs & Stacks
        </h2>
      </div>

      {/* Grid Icon Skills */}
      <div className="max-w-4xl flex flex-wrap justify-center gap-10 md:gap-16">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="group relative flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            {/* ICON */}
            <skill.icon className={`text-5xl md:text-7xl ${skill.color} drop-shadow-lg`} />
            
            {/* NAMA */}
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold tracking-wide text-gray-300 whitespace-nowrap bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="absolute bottom-10 flex flex-col items-center gap-6 w-full">
        <button
          onClick={onNavigate}
          className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer"
        >
          Projects
          <span className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-300 text-lg">
            &rarr;
          </span>
        </button>

        <SocialIcons />
      </div>
    </section>
  );
}