import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import SocialIcons from "./SocialIcons";

interface ProjectsProps {
  onNavigate: () => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const projectList = [
    {
      title: "Gaskeeun Project",
      techs: [
        { icon: SiReact, color: "text-cyan-400" },
        { icon: SiTailwindcss, color: "text-cyan-500" }
      ],
      image: "./gaskeeun.jpg",
      link: "https://github.com/Kriiif/GaskeeunProject", 
    },
    {
      title: "SIP Project",
      techs: [
        { icon: SiNextdotjs, color: "text-white" },
        { icon: SiTailwindcss, color: "text-cyan-500" }
      ],
      image: "./sip.jpg",
      link: "https://sipp.eatzy.web.id/", 
    },
    {
      title: "Hafrin Coffee",
      techs: [
        { icon: SiNextdotjs, color: "text-white" },
        { icon: SiTailwindcss, color: "text-cyan-500" }
      ],
      image: "./hafrin.jpg",
      link: "https://hafrin-coffee.vercel.app/", 
    },
  ];

return (
    <section className="h-full w-full overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500 custom-scrollbar">
      <div className="min-h-full flex flex-col items-center px-6 pt-24 pb-10">

        {/* KONTEN */}
        <div className="w-full max-w-6xl flex flex-col items-center">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-200 tracking-tight z-70">
              Works & Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {projectList.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 z-70"
              >
                {/* Header Card */}
                <div className="flex justify-between items-center p-4 bg-[#0d1117] border-b border-gray-700">
                  <h3 className="text-lg font-bold text-gray-200 group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-xl">
                    {project.techs.map((tech, idx) => (
                      <tech.icon 
                        key={idx} 
                        className={`${tech.color}`} 
                        title={tech.icon.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Image & Overlay */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      className="px-6 py-2 bg-[#1F2937] text-white text-sm font-semibold rounded-full border border-gray-500 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      More Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex flex-col items-center gap-6 w-full mt-auto pt-20">
          
          <button
            onClick={onNavigate}
            className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer"
          >
            Contacts
            <span className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-300 text-lg">
              &rarr;
            </span>
          </button>

          <SocialIcons />
        </div>

      </div>
    </section>
  );
}