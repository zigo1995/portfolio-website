import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white fixed top-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">Mahmoud Hamed</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
        </ul>

        {/* Social Icons + Dark Mode Toggle */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="https://github.com/zigo1995" className="hover:text-blue-400"><FaGithub size={20} /></a>
          <a href="https://linkedin.com/in/mahmoud-hamed-it" className="hover:text-blue-400"><FaLinkedin size={20} /></a>
          <a href="https://twitter.com/zigohamed" className="hover:text-blue-400"><FaTwitter size={20} /></a>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="ml-4 px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-700 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
