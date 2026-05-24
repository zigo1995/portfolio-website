import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const titles = ["Front-End Developer", "React Enthusiast", "Tailwind CSS Lover"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // تأثير الكتابة (Typewriter)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(titles[index].slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex === titles[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % titles.length);
          setCurrentTitle("");
        }, 2000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [charIndex, index]);

  // سكرول ناعم
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden"
    >
      {/* خلفية للايت مود فقط (خطوط مائلة) */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.05)_0px,rgba(0,0,0,0.05)_2px,transparent_2px,transparent_20px)] dark:hidden"></div>

      {/* خلفية دوائر متوهجة */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl top-20 left-10 animate-[move1_12s_ease-in-out_infinite_alternate]"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl bottom-20 right-10 animate-[move2_15s_ease-in-out_infinite_alternate]"></div>
      </div>

      {/* المحتوى */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-7xl px-6"
      >
        {/* النص */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            مرحبًا، أنا <span className="text-blue-600 dark:text-blue-400">محمود</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-10">
            {currentTitle}
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, "#projects")}
              className="bg-blue-600 dark:bg-blue-800 px-8 py-4 rounded-lg text-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition"
            >
              عرض أعمالي
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, "#contact")}
              className="bg-gray-200 dark:bg-gray-700 px-8 py-4 rounded-lg text-lg hover:bg-gray-300 dark:hover:bg-gray-900 transition"
            >
              تواصل معي
            </a>
          </div>
        </div>

        {/* الصورة */}
        <div className="flex-1 flex justify-center md:justify-end">
          <motion.div
            className="relative w-[400px] h-[400px] md:w-[500px] md:h-[900px] overflow-hidden rounded-full"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <img
              src="/images/profile.png"
              alt="صورة محمود"
              className="w-full h-full object-cover rounded-full
                         border-4 border-blue-400 shadow-2xl shadow-blue-300 brightness-110
                         dark:border-0 dark:shadow-none dark:brightness-100"
            />
            {/* طبقة التلاشي */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
