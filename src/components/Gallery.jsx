export default function Gallery() {
  const images = [
    { src: "/images/project1.png", alt: "مشروع 1" },
    { src: "/images/project2.png", alt: "مشروع 2" },
    { src: "/images/project3.png", alt: "مشروع 3" },
  ];

  return (
    <section id="gallery" className="bg-gray-900 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">معرض الصور</h2>
      <div className="grid md:grid-cols-3 gap-6 px-8">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition">
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
