import { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiLaravel,
  SiVuedotjs,
  SiNuxtdotjs,
} from "react-icons/si";
import SocialIcons from "./layout/SocialIcons";
import ProjectModal, { ProjectData } from "./modal/ProjectModal";

interface ProjectsProps {
  onNavigate: () => void;
  onScroll?: (isScrolled: boolean) => void;
}

export default function Projects({ onNavigate, onScroll }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    onScroll?.(scrollTop > 10);
  };

  const projectList: ProjectData[] = [
    {
      title: "Gaskeeun Project",
      subtitle: "Sport Venue Booking & Management",
      techs: [
        { icon: SiReact, color: "text-cyan-400" },
        { icon: SiTailwindcss, color: "text-cyan-500" }
      ],
      image: "./gaskeeun.jpg",
      details: [
        "This Project is one of the mandatory assignments for my Management Software Engineering Course.",
        "Integrated interactive sports venue booking platform with real-time slot availability.",
        "Streamlined user reservation workflow and venue schedule management system.",
        "Built responsive UI components with React and Tailwind CSS for seamless mobile and desktop experience.",
        "Implemented user authentication, booking history, and venue filtering by sport type and location."
      ]
    },
    {
      title: "SIP Project",
      subtitle: "Library Information System & Book Management",
      techs: [
        { icon: SiNextdotjs, color: "text-white" },
        { icon: SiTailwindcss, color: "text-cyan-500" }
      ],
      image: "./sip.jpg",
      details: [
        "This Project is one of the mandatory assignments for my Management Information Systems Course.",
        "Comprehensive information system for streamlined enterprise workflow and data tracking.",
        "Developed dynamic dashboards with server-side rendering using Next.js for high performance.",
        "Integrated role-based access control and detailed activity logging."
      ]
    },
    {
      title: "Hafrin Coffee",
      subtitle: "E-Commerce & Digital Menu Application",
      techs: [
        { icon: SiNextdotjs, color: "text-white" },
        { icon: SiTailwindcss, color: "text-cyan-500" }
      ],
      image: "./hafrin.jpg",
      details: [
        "Modern web application for coffee shop ordering, digital menu catalog, and brand showcase.",
        "Designed intuitive customer order flow with custom menu options and item customization.",
        "Optimized page load speed and SEO with Next.js App Router."
      ]
    },
    {
      title: "SUGAR BARU",
      subtitle: "Teacher Candidate Assessment & Selection System",
      techs: [
        { icon: SiReact, color: "text-cyan-400"},
        { icon: SiTailwindcss, color: "text-cyan-500"},
        { icon: SiLaravel, color: "text-red-500"},
      ],
      image: "./sugar.png",
      details: [
        "Comprehensive web-based platform designed to streamline the end-to-end selection and assessment processes for prospective school teachers.",
        "Digitalizes multi-stage candidate evaluations, encompassing document screenings, interviews, psychology tests, religious assessment, English proficiency, and microteaching assessments.",
        "Features role-based dashboards to manage operational workflows, candidate scheduling, and dynamic assessment rubrics for administrators and school leadership.",
        "Designed custom analytical widgets and exportable data tables for management reporting."
      ]
    },
    {
      title: "SIPP LPPM UNJ",
      subtitle: "Research & Community Service Information System",
      techs: [
        { icon: SiVuedotjs, color: "text-green-500"},
        { icon: SiNuxtdotjs, color: "text-green-500"},
        { icon: SiTailwindcss, color: "text-cyan-500"},
      ],
      image: "./sipp.png",
      details: [
        "Academic web portal for managing research proposals, funding, and community service projects at UNJ.",
        "Facilitates the full lifecycle of academic proposals, from initial submission and reviewer assignments to field monitoring and evaluation (Monev).",
        "Equipped with automated scoring mechanisms, progress tracking, and comprehensive data reporting to support institutional research governance.",
        "Architected using Nuxt.js and Vue.js with SSR support for public archive accessibility.",
        "Implemented multi-stage proposal submission, peer review workflow, and administrative dashboards."
      ]
    }
  ];

  return (
    <>
      <section
        className="h-full w-full overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500 custom-scrollbar"
        onScroll={handleScroll}
      >
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
                      {project.techs && project.techs.map((tech, idx) => (
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
                        onClick={() => setSelectedProject(project)}
                        className="px-6 py-2 bg-[#1F2937] text-white text-sm font-semibold rounded-full border border-gray-500 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-pointer"
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

      {/* PROJECT DETAIL MODAL */}
      <ProjectModal
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}