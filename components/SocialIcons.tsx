import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-6 md:gap-8 z-70">
      <a
        href="https://www.linkedin.com/in/muhammad-fikri-firmansyah-405141321/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Kriiif"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/kriiif/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors text-2xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://discord.com/users/667359229451042852"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors text-2xl"
      >
        <FaDiscord />
      </a>
    </div>
  );
}