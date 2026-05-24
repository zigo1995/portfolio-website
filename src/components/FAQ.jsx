export default function FAQ() {
  const faqs = [
    { q: "إزاي بتبدأ مشروع جديد؟", a: "ببدأ بتحليل المتطلبات، ثم تصميم واجهة المستخدم، وبعدها بكتب الكود." },
    { q: "إيه التقنيات اللي بتستخدمها؟", a: "React, Tailwind, Git, وبعض أدوات التصميم زي Figma." },
    { q: "هل بتشتغل Freelance؟", a: "نعم، بشتغل على مشاريع مستقلة بجانب عملي الأساسي." },
  ];

  return (
    <section 
      id="faq" 
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">الأسئلة الشائعة</h2>
      <div className="max-w-3xl mx-auto space-y-6 px-8">
        {faqs.map((f, i) => (
          <div 
            key={i} 
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{f.q}</h3>
            <p className="text-gray-700 dark:text-gray-300">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
