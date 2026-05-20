import React from "react";
import services from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:scale-105 transition">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
