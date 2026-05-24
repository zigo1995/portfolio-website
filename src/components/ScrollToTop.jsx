import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        animate={{ y: [0, -10, 0] }}         // حركة لأعلى ولأسفل
        transition={{ duration: 1.5, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}          // تكبير بسيط عند الـ hover
        whileTap={{ scale: 0.9 }}            // تصغير بسيط عند الضغط
      >
        <FaArrowUp size={20} />
      </motion.button>
    )
  );
}
