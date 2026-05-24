import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";   // ✅ زر السهم لفوق
import ScrollDown from "./components/ScrollDown";     // ✅ زر السهم لتحت

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* الناف بار */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* السكاشن */}
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Services />
      <Resume />
      <Achievements />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* أزرار السهم على الشمال */}
      <ScrollDown />   {/* ينزل لسكشن Projects */}
      <ScrollToTop />  {/* يطلع لأول الصفحة */}
    </div>
  );
}

export default App;
