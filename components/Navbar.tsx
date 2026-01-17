interface NavbarProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export default function Navbar({ onNavigate, currentSection }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 bg-[#0E131F]/90 backdrop-blur-sm">
      <ul className="flex gap-6 md:gap-12 text-gray-300 font-medium text-sm md:text-base tracking-wide">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`cursor-pointer transition-colors duration-200 z-70 ${currentSection === item.id ? "text-yellow-500" : "hover:text-white"
              }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}