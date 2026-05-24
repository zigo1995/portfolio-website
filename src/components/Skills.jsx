import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", img: "/images/react.png" },
    { name: "Tailwind CSS", img: "/images/tailwind.png" },
    { name: "JavaScript", img: "/images/js.png" },
    { name: "HTML", img: "/images/html.png" },
    { name: "CSS", img: "/images/css.png" },
  ];

  return (
    <section 
      id="skills" 
      className="bg-white dark:bg-black text-gray-900 dark:text-white py-16 text-center"
    >
      <h2 className="text-3xl font-bold mb-8">المهارات</h2>
      <div className="flex justify-center gap-8 flex-wrap px-8">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-110 transition"
          >
            <img src={s.img} alt={s.name} className="w-16 h-16 mb-4" />
            <p className="text-lg font-semibold">{s.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
