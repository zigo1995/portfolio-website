import React from "react";
import testimonials from "../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Testimonials</h2>
      <div className="max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
            <p>"{t.review}"</p>
            <h4 className="mt-4 font-semibold">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
