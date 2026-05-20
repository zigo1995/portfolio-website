import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-800 text-center">
      <p>© 2024 Mahmoud. All rights reserved.</p>
      <div className="flex gap-4 justify-center mt-4">
        <a href="https://github.com/zigo1995" className="hover:text-blue-600">GitHub</a>
        <a href="https://linkedin.com/in/zigo1995" className="hover:text-blue-600">LinkedIn</a>
      </div>
    </footer>
  );
}
