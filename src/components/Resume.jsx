export default function Resume() {
  const experiences = [
    { year: "2023", role: "Front-End Developer", company: "شركة ABC" },
    { year: "2024", role: "React Developer", company: "شركة XYZ" },
  ];

  return (
    <section 
      id="resume" 
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">السيرة الذاتية</h2>
      <div className="max-w-3xl mx-auto space-y-6 px-8">
        {experiences.map((exp, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="bg-blue-600 dark:bg-blue-800 text-white px-4 py-2 rounded-lg">
              {exp.year}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-700 dark:text-gray-400">{exp.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* زر تحميل السيرة الذاتية */}
      <div className="text-center mt-8">
        <a 
          href="/resume.pdf" 
          download 
          className="bg-blue-600 dark:bg-blue-800 px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition"
        >
          تحميل السيرة الذاتية
        </a>
      </div>
    </section>
  );
}
