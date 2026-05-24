import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section 
      id="about" 
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
        {/* صورة شخصية */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img 
            src="/images/profile.png" 
            alt="صورة محمود" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-blue-600 shadow-lg object-cover"
          />
        </motion.div>

        {/* النص التعريفي */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start text-left max-w-lg"
        >
          <h2 className="text-4xl font-bold mb-4">عنّي</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            أنا محمود، مطور واجهات أمامية متخصص في بناء مواقع احترافية باستخدام 
            <span className="text-blue-600 dark:text-blue-400"> React </span> و 
            <span className="text-teal-600 dark:text-teal-400"> Tailwind CSS </span>. 
            هدفي هو إنشاء تجارب مستخدم سلسة ومبتكرة تعكس هوية كل مشروع.
          </p>

          {/* أزرار */}
          <div className="flex gap-4">
            <a 
              href="/resume.pdf" 
              download 
              className="bg-blue-600 dark:bg-blue-800 px-6 py-3 rounded-lg text-white hover:bg-blue-700 dark:hover:bg-blue-900 transition"
            >
              تحميل السيرة الذاتية
            </a>
            <a 
              href="#contact" 
              className="bg-gray-200 dark:bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-900 transition"
            >
              تواصل معي
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
