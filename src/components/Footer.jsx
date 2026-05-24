import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-6 text-center">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4">
        <a 
          href="https://github.com/zigo1995" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/mahmoud-hamed-it" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400"
        >
          <FaLinkedin size={24} />
        </a>
        <a 
          href="https://twitter.com/zigohamed" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* حقوق النشر */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Mahmoud. جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}
