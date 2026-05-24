import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollDown() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY < 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    visible && (
      <motion.button
        onClick={scrollToProjects}
        className="fixed bottom-20 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        animate={{ y: [0, 10, 0] }}          // حركة لأسفل ولأعلى
        transition={{ duration: 1.5, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}          // تكبير عند الـ hover
        whileTap={{ scale: 0.9 }}            // تصغير عند الضغط
      >
        <FaArrowDown size={20} />
      </motion.button>
    )
  );
}
