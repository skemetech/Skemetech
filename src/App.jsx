import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Home({ isLoading }) {
  return (
    <main>
      <Hero isLoading={isLoading} />
      <TechStack />
      <Services />
      <About />
      <Projects isLoading={isLoading} />
      <Testimonials />
      <Contact />
    </main>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloader for at least 2.5 seconds for premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className="relative antialiased text-brand-black bg-white min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
