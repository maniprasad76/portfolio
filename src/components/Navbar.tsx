import React, { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const NAV_LINKS = [
  { label: "Home", target: "#home" },
  { label: "About", target: "#about" },
  { label: "Skills", target: "#skills" },
  { label: "Projects", target: "#projects" },
  { label: "Experience", target: "#experience" },
  { label: "Education", target: "#education" },
  { label: "Contact", target: "#contact" },
  { label: "Resume", target: "#resume" },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Scroll event listener to add background shadow/opacity
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for active section highlighting
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Trigger when section occupies the middle third of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.target);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    },
    [],
  );

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-4 shadow-sm"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2.5 group"
            data-cursor="pointer"
            aria-label="Basa Prasad - Home"
          >
            <span className="font-signature font-bold text-3xl tracking-wide text-dark pt-1">
              Prasad
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.target.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.target}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className="px-4 py-2 text-sm font-medium tracking-wide relative group"
                  data-cursor="pointer"
                  aria-current={isActive ? "true" : undefined}
                >
                  <span
                    className={`transition-colors duration-300 relative z-10 ${
                      isActive
                        ? "text-cream"
                        : "text-dark group-hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Backdrop highlight for active */}
                  {isActive && (
                    <m.span
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-accent rounded-full z-0"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Contact CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <MagneticButton>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="px-6 py-2.5 bg-dark text-cream rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors duration-300"
                data-cursor="pointer"
              >
                Hire Me
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-dark p-2 hover:text-accent transition-colors duration-300"
              data-cursor="pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-cream z-[998] px-6 py-12 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6 items-center" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.target.substring(1);
                return (
                  <m.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.label}
                    href={link.target}
                    onClick={(e) => handleLinkClick(e, link.target)}
                    className={`text-2xl font-display font-medium tracking-wide ${
                      isActive ? "text-accent" : "text-dark"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </m.a>
                );
              })}
            </nav>

            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full text-center pb-12"
            >
              <a
                href="mailto:basaprasad76@gmail.com"
                className="text-sm font-semibold tracking-wider lowercase text-accent"
              >
                basaprasad76@gmail.com
              </a>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
