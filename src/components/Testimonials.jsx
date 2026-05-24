export default function Testimonials() {
  const testimonials = [
    { name: "أحمد", feedback: "محمود مطور ممتاز، أنجز المشروع بسرعة وجودة عالية." },
    { name: "سارة", feedback: "تصميم الموقع كان أنيق جدًا وتجربة المستخدم رائعة." },
  ];

  return (
    <section 
      id="testimonials" 
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">آراء العملاء</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-8">
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition"
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4">"{t.feedback}"</p>
            <h3 className="text-xl font-semibold">{t.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
