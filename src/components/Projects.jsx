import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { 
      title: "Portfolio Website", 
      desc: "موقع شخصي باستخدام React + Tailwind", 
      img: "/images/project1.png", 
      link: "#" 
    },
    { 
      title: "E-commerce App", 
      desc: "تطبيق متجر إلكتروني كامل", 
      img: "/images/project2.png", 
      link: "#" 
    },
    { 
      title: "Blog Platform", 
      desc: "منصة تدوين بسيطة", 
      img: "/images/project3.png", 
      link: "#" 
    },
    { 
      title: "Chat App", 
      desc: "تطبيق محادثة لحظي باستخدام Socket.io", 
      img: "/images/project4.png", 
      link: "#" 
    },
    { 
      title: "Dashboard", 
      desc: "لوحة تحكم تفاعلية بالـ Charts", 
      img: "/images/project5.png", 
      link: "#" 
    },
  ];

  return (
    <section 
      id="projects" 
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">المشاريع</h2>
      <div className="grid md:grid-cols-3 gap-8 px-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition flex flex-col items-center"
          >
            <img 
              src={p.img} 
              alt={p.title} 
              className="w-full h-40 object-cover rounded mb-4" 
            />
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{p.desc}</p>
            <a href={p.link} className="text-blue-600 dark:text-blue-400 hover:underline">
              عرض المشروع
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
