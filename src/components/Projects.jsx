import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
                <a href={project.demo} className="text-blue-600 hover:underline">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
