import { useState, lazy, Suspense } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import FloatingParticles from './components/FloatingParticles';
import FloatingSocials from './components/FloatingSocials';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import ErrorBoundary from './components/ErrorBoundary';
import { LazyMotion, domAnimation } from 'framer-motion';

// Lazy-load below-the-fold sections for better performance
const CurvedLoop = lazy(() => import('./components/CurvedLoop'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Minimal loading fallback for lazy sections
const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 border-2 border-charcoal/10 border-t-accent rounded-full animate-spin" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LazyMotion features={domAnimation}>
      <ErrorBoundary>
      {/* Accessible skip-to-content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* 1. Global Preloader Animation */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* 2. Main Portfolio Layout */}
      {!isLoading && (
        <SmoothScroll>
          <div className="relative min-h-screen bg-cream text-dark selection:bg-accent selection:text-cream">
            {/* Scroll Progress Indicator */}
            <ScrollProgress />

            {/* Ambient Background Particles */}
            <FloatingParticles />

            {/* Custom Premium Spring Cursor */}
            <CustomCursor />

            {/* Floating Social Icons Sidebar */}
            <FloatingSocials />

            {/* Sticky Glass Navbar */}
            <Navbar />

            {/* Content Sections */}
            <main id="main-content" aria-label="Portfolio content">
              <Hero />
              <Suspense fallback={<SectionFallback />}>
                <div className="bg-cream -mt-12 md:-mt-20 relative z-10 overflow-hidden">
                  <CurvedLoop 
                    marqueeText="DATA ENTRY ✦ VIRTUAL ASSISTANCE ✦ CUSTOMER SUPPORT ✦ BPO EXECUTIVE ✦ BCA STUDENT ✦ HTML5/CSS3 ✦ " 
                    speed={1.5} 
                    curveAmount={150} 
                    interactive={true} 
                    className="text-accent" 
                  />
                </div>
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Resume />
                <Contact />
              </Suspense>
            </main>

            {/* Footer */}
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
        </SmoothScroll>
      )}
      </ErrorBoundary>
    </LazyMotion>
  );
}

export default App;
