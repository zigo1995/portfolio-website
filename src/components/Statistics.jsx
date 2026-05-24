export default function Statistics() {
  const stats = [
    { number: "15+", label: "مشاريع مكتملة" },
    { number: "10+", label: "عملاء سعداء" },
    { number: "2000+", label: "ساعات برمجة" },
  ];

  return (
    <section id="statistics" className="bg-gray-900 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">إحصائيات شخصية</h2>
      <div className="flex justify-center gap-12">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">{s.number}</h3>
            <p className="text-gray-400 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
