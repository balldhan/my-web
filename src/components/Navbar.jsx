import { useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ toggleDark, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-600">My Blog</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#home" className="hover:text-cyan-500">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-500">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-500">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="text-2xl text-gray-600 dark:text-gray-200 hover:text-cyan-500 transition"
            title="Dark Mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-gray-600 dark:text-gray-200 hover:text-cyan-500 transition"
            title="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 mt-2 space-y-2 text-sm font-medium text-center">
          <a href="#home" className="block hover:text-cyan-500" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-cyan-500" onClick={toggleMenu}>About</a>
          <a href="#projects" className="block hover:text-cyan-500" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block hover:text-cyan-500" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
}
