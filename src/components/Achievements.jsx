export default function Achievements() {
  const achievements = [
    { title: "شهادة React", desc: "حصلت على شهادة معتمدة في React." },
    { title: "أفضل مطور لعام 2024", desc: "تم اختياري كأفضل مطور في شركة XYZ." },
    { title: "شهادة Tailwind CSS", desc: "إتقان تصميم واجهات باستخدام Tailwind." },
  ];

  return (
    <section 
      id="achievements" 
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">الإنجازات والشهادات</h2>
      <div className="grid md:grid-cols-2 gap-8 px-8">
        {achievements.map((a, i) => (
          <div 
            key={i} 
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
