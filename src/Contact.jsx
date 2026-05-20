import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
        <textarea placeholder="Your Message" className="p-3 border rounded-lg h-32"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Send Message</button>
      </form>
      <div className="mt-6">
        <a href="https://wa.me/201234567890" className="px-6 py-2 bg-green-600 text-white rounded-lg">WhatsApp Me</a>
      </div>
    </section>
  );
}
