"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import { Meteors } from "@/components/ui/meteors";

const validSections = ["home", "about", "skills", "projects", "contacts"];

interface HomeProps {
  initialSection?: string;
}

export default function Home({ initialSection = "home" }: HomeProps) {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [isScrolled, setIsScrolled] = useState(false);

  // Update URL when section changes
  useEffect(() => {
    const newPath = activeSection === "home" ? "/" : `/${activeSection}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, "", newPath);
    }
  }, [activeSection]);

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace("/", "");
      if (path && validSections.includes(path)) {
        setActiveSection(path);
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <main className="h-screen w-screen bg-[#0E131F] text-white selection:bg-yellow-500 selection:text-black font-sans overflow-hidden">

      <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-60">
        <Meteors number={40} />
      </div>

      <Navbar currentSection={activeSection} onNavigate={setActiveSection} isScrolled={isScrolled} />

      {activeSection === "home" && (
        <Hero onNavigate={() => setActiveSection("about")} />
      )}

      {activeSection === "about" && (
        <About onNavigate={() => setActiveSection("skills")} />
      )}

      {activeSection === "skills" && (
        <Skills onNavigate={() => setActiveSection("projects")} />
      )}

      {activeSection === "projects" && (
        <Projects onNavigate={() => setActiveSection("contacts")} onScroll={setIsScrolled} />
      )}

      {activeSection === "contacts" && (
        <Contacts />
      )}

    </main>
  );
}