import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1 }}
            className="bg-blue-600 h-6 rounded-lg relative"
          >
            <span className="absolute left-2 text-white">{skill.name}</span>
            <span className="absolute right-2 text-white">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
