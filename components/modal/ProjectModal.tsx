import React, { useEffect } from "react";
import { X } from "lucide-react";
import { IconType } from "react-icons";

export interface ProjectTech {
  icon: IconType;
  color: string;
  name?: string;
}

export interface ProjectData {
  title: string;
  subtitle?: string;
  image?: string;
  details?: string[];
  techs?: ProjectTech[];
  description?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl bg-[#2a3241] border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 text-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 md:p-8 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-1 text-gray-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight pr-10">
            {project.title}
          </h2>

          {project.subtitle && (
            <p className="text-base md:text-lg font-medium text-gray-300 mt-1">
              {project.subtitle}
            </p>
          )}

          <hr className="mt-4 border-slate-600/70" />
        </div>

        {/* Modal Content */}
        <div className="px-6 md:px-8 pb-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {/* Tech Badges */}
          {project.techs && project.techs.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
                Tech Stack:
              </span>
              <div className="flex items-center gap-2">
                {project.techs.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-[#1e2533] border border-slate-700 rounded-lg flex items-center justify-center"
                    title={tech.name || tech.icon.name}
                  >
                    <tech.icon className={`text-xl ${tech.color}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Details Bullet List */}
          {project.details && project.details.length > 0 && (
            <ul className="list-disc pl-5 space-y-3 text-gray-200 leading-relaxed font-normal text-sm md:text-base">
              {project.details.map((detail, index) => (
                <li key={index} className="pl-1">
                  {detail}
                </li>
              ))}
            </ul>
          )}

          {/* Fallback Description if no details array */}
          {!project.details && project.description && (
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
