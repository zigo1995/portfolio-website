import { FaWhatsapp, FaTelegram, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qpt95y5",      // ID الخدمة من EmailJS
      "template_ykhmism",     // ID القالب من EmailJS
      e.target,
      "ynJk3eqV0LZNM37KP"       // المفتاح العام من حسابك في EmailJS
    ).then(
      (result) => {
        alert("✅ تم إرسال الرسالة بنجاح");
      },
      (error) => {
        alert("❌ حصل خطأ، حاول مرة تانية");
      }
    );
  };

  return (
    <section 
      id="contact" 
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8">تواصل معي</h2>
      
      {/* Contact Form */}
      <form onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
        <input 
          type="text" 
          name="name"
          placeholder="الاسم" 
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" 
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="البريد الإلكتروني" 
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" 
          required 
        />
        <textarea 
          name="message"
          placeholder="رسالتك" 
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white h-32" 
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 dark:bg-blue-800 px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition w-full">
          إرسال
        </button>
      </form>

      {/* Interactive Options */}
      <div className="flex justify-center gap-6 mt-8">
        <a 
          href="mailto:mahmoudhamed.me@gmail.com" 
          className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded hover:bg-blue-600 dark:hover:bg-blue-500 transition"
        >
          <FaEnvelope /> بريد إلكتروني
        </a>
        <a 
          href="https://wa.me/201018567665" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded hover:bg-green-800 transition"
        >
          <FaWhatsapp /> واتساب
        </a>
        <a 
          href="https://t.me/zigo1995" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <FaTelegram /> تيليجرام
        </a>
      </div>

      {/* Google Map */}
      <div className="mt-12 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14354.175121067847!2d32.74595915985226!3d25.91736408606787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14494855ede6a62f%3A0x5172401d7acabe3b!2sQus%2C%20Madinet%20Qaws%2C%20Qus%2C%20Qena%20Governorate!5e0!3m2!1sen!2seg!4v1779357974836!5m2!1sen!2seg"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800 p-2"
        ></iframe>
      </div>
    </section>
  );
}
