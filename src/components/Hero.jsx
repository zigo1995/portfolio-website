import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center relative">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Mahmoud
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl mt-4"
      >
        Full-Stack Web Developer & UI/UX Designer
      </motion.h2>
      <p className="mt-4 max-w-xl">
        I build modern, fast, and elegant web experiences with cutting-edge technologies.
      </p>
      <div className="flex gap-4 mt-6">
        <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View Projects</a>
        <a href="#contact" className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">Contact Me</a>
      </div>
      <div className="flex gap-6 mt-6 text-2xl">
        <FaGithub className="hover:text-blue-600 cursor-pointer" />
        <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
        <FaTwitter className="hover:text-blue-600 cursor-pointer" />
      </div>
    </section>
  );
}
