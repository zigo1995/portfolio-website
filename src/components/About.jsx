import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="max-w-3xl mx-auto">
        I am Mahmoud, a passionate Full-Stack Developer and UI/UX Designer with years of experience
        building modern, responsive, and elegant web applications. My focus is on creating
        user-friendly interfaces and scalable backend systems.
      </p>
      <img src="/assets/profile.jpg" alt="Profile" className="mx-auto mt-6 rounded-full w-40 h-40 shadow-lg" />
    </section>
  );
}
