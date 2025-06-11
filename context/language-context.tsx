"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "id";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.collaborate": "Let's Collaborate",

    // Hero Section
    "hero.title": "Web, Animation & Digital Marketing",
    "hero.subtitle": "Transform your digital presence with cutting-edge solutions that drive growth and innovation.",
    "hero.cta.collaborate": "Let's Collaborate",
    "hero.cta.portfolio": "View Portfolio",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "We offer comprehensive digital solutions to help your business thrive in the modern world.",
    "services.web.title": "Web & App Development",
    "services.web.description": "Custom web applications and mobile apps built with cutting-edge technologies.",
    "services.2d.title": "2D Animation",
    "services.2d.description": "Engaging motion graphics and 2D animations for your brand storytelling.",
    "services.3d.title": "3D Animation",
    "services.3d.description": "Stunning 3D visualizations and animated content for immersive experiences.",
    "services.marketing.title": "Digital Marketing",
    "services.marketing.description": "Strategic digital marketing solutions to grow your online presence.",

    // Portfolio Section
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "Explore our latest projects and creative works that showcase our expertise.",

    // About Section
    "about.title": "About Creative Tech",
    "about.subtitle": "We are a team of passionate creators and innovators dedicated to bringing your digital vision to life.",
    "about.story.title": "Our Story",
    "about.story.p1": "Founded in 2020, Creative Tech has grown from a small startup to a full-service digital agency. We believe in combining creativity with technical excellence to deliver exceptional results for our clients.",
    "about.story.p2": "Our mission is to help businesses thrive in the digital age by providing innovative solutions that drive growth and create lasting impact.",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle": "Have a project in mind? We'd love to hear from you.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.office": "Office",
    "contact.hours.title": "Business Hours",
    "contact.hours.weekday": "Monday - Friday: 9:00 AM - 6:00 PM",
    "contact.hours.saturday": "Saturday: 10:00 AM - 4:00 PM",
    "contact.hours.sunday": "Sunday: Closed",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.portfolio": "Portofolio",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    "nav.collaborate": "Mari Berkolaborasi",

    // Hero Section
    "hero.title": "Web, Animasi & Pemasaran Digital",
    "hero.subtitle": "Transformasi kehadiran digital Anda dengan solusi terdepan yang mendorong pertumbuhan dan inovasi.",
    "hero.cta.collaborate": "Mari Berkolaborasi",
    "hero.cta.portfolio": "Lihat Portofolio",

    // Services Section
    "services.title": "Layanan Kami",
    "services.subtitle": "Kami menawarkan solusi digital komprehensif untuk membantu bisnis Anda berkembang di dunia modern.",
    "services.web.title": "Pengembangan Web & Aplikasi",
    "services.web.description": "Aplikasi web dan seluler khusus dibangun dengan teknologi terkini.",
    "services.2d.title": "Animasi 2D",
    "services.2d.description": "Motion graphics dan animasi 2D yang menarik untuk storytelling brand Anda.",
    "services.3d.title": "Animasi 3D",
    "services.3d.description": "Visualisasi 3D yang memukau dan konten animasi untuk pengalaman yang mendalam.",
    "services.marketing.title": "Pemasaran Digital",
    "services.marketing.description": "Solusi pemasaran digital strategis untuk mengembangkan kehadiran online Anda.",

    // Portfolio Section
    "portfolio.title": "Portofolio Kami",
    "portfolio.subtitle": "Jelajahi proyek-proyek terbaru dan karya kreatif yang menunjukkan keahlian kami.",

    // About Section
    "about.title": "Tentang Creative Tech",
    "about.subtitle": "Kami adalah tim kreator dan inovator yang berdedikasi untuk mewujudkan visi digital Anda.",
    "about.story.title": "Cerita Kami",
    "about.story.p1": "Didirikan pada tahun 2020, Creative Tech telah berkembang dari startup kecil menjadi agensi digital full-service. Kami percaya dalam menggabungkan kreativitas dengan keunggulan teknis untuk memberikan hasil yang luar biasa bagi klien kami.",
    "about.story.p2": "Misi kami adalah membantu bisnis berkembang di era digital dengan menyediakan solusi inovatif yang mendorong pertumbuhan dan menciptakan dampak berkelanjutan.",

    // Contact Section
    "contact.title": "Hubungi Kami",
    "contact.subtitle": "Punya proyek dalam pikiran? Kami senang mendengar dari Anda.",
    "contact.form.name": "Nama",
    "contact.form.email": "Email",
    "contact.form.message": "Pesan",
    "contact.form.submit": "Kirim Pesan",
    "contact.info.title": "Informasi Kontak",
    "contact.info.email": "Email",
    "contact.info.phone": "Telepon",
    "contact.info.office": "Kantor",
    "contact.hours.title": "Jam Kerja",
    "contact.hours.weekday": "Senin - Jumat: 9:00 - 18:00",
    "contact.hours.saturday": "Sabtu: 10:00 - 16:00",
    "contact.hours.sunday": "Minggu: Tutup",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 