import { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import FloatingParticles from './components/FloatingParticles';
import FloatingSocials from './components/FloatingSocials';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurvedLoop from './components/CurvedLoop';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 1. Global Preloader Animation */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* 2. Main Portfolio Layout */}
      {!isLoading && (
        <SmoothScroll>
          <div className="relative min-h-screen bg-[#FFFAF3] text-[#1B1B1B] selection:bg-[#F62440] selection:text-[#FFFAF3]">
            {/* Ambient Background Particles */}
            <FloatingParticles />

            {/* Custom Premium Spring Cursor */}
            <CustomCursor />

            {/* Floating Social Icons Sidebar */}
            <FloatingSocials />

            {/* Sticky Glass Navbar */}
            <Navbar />

            {/* Content Sections */}
            <main>
              <Hero />
              <div className="bg-[#FFFAF3] -mt-12 md:-mt-20 relative z-10 overflow-hidden">
                <CurvedLoop 
                  marqueeText="FULLSTACK WEB DEVELOPER ✦ REACT ✦ NESTJS ✦ NODE.JS ✦ TYPESCRIPT ✦ SQL ✦ " 
                  speed={1.5} 
                  curveAmount={150} 
                  interactive={true} 
                  className="text-[#F62440]" 
                />
              </div>
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Resume />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;
