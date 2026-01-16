"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="h-screen w-screen bg-[#0E131F] text-white selection:bg-yellow-500 selection:text-black font-sans overflow-hidden">
      
      <Navbar currentSection={activeSection} onNavigate={setActiveSection} />

      {/* --- Logika Render --- */}
      
      {activeSection === "home" && (
        <Hero onNavigate={() => setActiveSection("about")} />
      )}

    </main>
  );
}