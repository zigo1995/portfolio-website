import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Resume</h2>
      <a href="/assets/resume.pdf" download className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Download CV</a>
      <div className="mt-10 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Experience</h3>
        <ul className="text-left">
          <li>Senior Full-Stack Developer at XYZ Company</li>
          <li>UI/UX Designer at ABC Studio</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6 mb-4">Education</h3>
        <ul className="text-left">
          <li>Bachelor of Computer Science</li>
        </ul>
      </div>
    </section>
  );
}
