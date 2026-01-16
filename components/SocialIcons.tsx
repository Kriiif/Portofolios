import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-6 md:gap-8">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors text-2xl"
      >
        <FaInstagram />
      </a>
      <a
        href="https://discord.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition-colors text-2xl"
      >
        <FaDiscord />
      </a>
    </div>
  );
}