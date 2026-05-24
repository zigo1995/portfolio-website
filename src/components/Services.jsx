import { FaCode, FaPaintBrush, FaCloud } from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Web Development", desc: "بناء مواقع حديثة باستخدام React وTailwind", icon: <FaCode size={40} className="text-blue-500 dark:text-blue-400" /> },
    { title: "UI/UX Design", desc: "تصميم واجهات أنيقة وتجربة مستخدم جذابة", icon: <FaPaintBrush size={40} className="text-pink-500 dark:text-pink-400" /> },
    { title: "Deployment", desc: "رفع المشاريع على الإنترنت بشكل احترافي", icon: <FaCloud size={40} className="text-green-500 dark:text-green-400" /> },
  ];

  return (
    <section 
      id="services" 
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">الخدمات</h2>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {services.map((s, i) => (
          <div 
            key={i} 
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition"
          >
            {s.icon}
            <h3 className="text-xl font-semibold mt-4">{s.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
