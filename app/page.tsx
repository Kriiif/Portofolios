"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <main className="h-screen w-screen bg-[#0E131F] text-white selection:bg-yellow-500 selection:text-black font-sans overflow-hidden">

      {/* Full-screen Meteors - persistent across all sections */}
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