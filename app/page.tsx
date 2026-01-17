"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills"; 
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts"; // <--- 1. Import Contacts

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="h-screen w-screen bg-[#0E131F] text-white selection:bg-yellow-500 selection:text-black font-sans overflow-hidden">
      
      <Navbar currentSection={activeSection} onNavigate={setActiveSection} />
      
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
         <Projects onNavigate={() => setActiveSection("contacts")} />
      )}

      {activeSection === "contacts" && (
         <Contacts />
      )}

    </main>
  );
}