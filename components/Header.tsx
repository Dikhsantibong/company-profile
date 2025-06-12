"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, LanguageIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";

const navLinks = [
  { href: "#home", label: "nav.home" },
  { href: "#services", label: "nav.services" },
  { href: "#portfolio", label: "nav.portfolio" },
  { href: "#about", label: "nav.about" },
  { href: "#contact", label: "nav.contact" },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-300 mt-2 ${
            isScrolled
              ? "bg-white/10 backdrop-blur-md  shadow-lg rounded-2xl"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between h-16 sm:h-20 px-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold text-white"
            >
              Creative<span className="text-blue-400">Tech</span><span>.</span>
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-blue-400"
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                >
                  {t(link.label)}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Toggle language"
              >
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="hidden sm:block px-6 py-2.5 text-sm font-medium text-white bg-blue-600/90 backdrop-blur-sm rounded-xl hover:bg-blue-600 border border-blue-500/50 transition-colors"
              >
                {t("nav.collaborate")}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 