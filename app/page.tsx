"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import ScrollVelocity from "@/components/ScrollVelocity";
import GlassIcons, { GlassIconsItem } from "@/components/GlassIcons";
import Ballpit from "@/components/Ballpit";
import {
  CodeBracketIcon,
  VideoCameraIcon,
  CubeIcon,
  MegaphoneIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import GradientText from "@/components/GradientText";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Services Data
const services = [
  {
    title: "Web & App Development",
    description: "Custom web applications and mobile apps built with cutting-edge technologies.",
    icon: CodeBracketIcon,
    color: "blue",
  },
  {
    title: "2D Animation",
    description: "Engaging motion graphics and 2D animations for your brand storytelling.",
    icon: VideoCameraIcon,
    color: "purple",
  },
  {
    title: "3D Animation",
    description: "Stunning 3D visualizations and animated content for immersive experiences.",
    icon: CubeIcon,
    color: "orange",
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to grow your online presence.",
    icon: MegaphoneIcon,
    color: "green",
  },
];

// Portfolio Data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/images/portfolio/ecommerce.jpg",
  },
  {
    id: 2,
    title: "Brand Animation",
    category: "2D Animation",
    image: "/images/portfolio/animation.jpg",
  },
  {
    id: 3,
    title: "Product Visualization",
    category: "3D Animation",
    image: "/images/portfolio/3d-viz.jpg",
  },
  {
    id: 4,
    title: "Digital Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio/marketing.jpg",
  },
];

// Team Data
const team = [
  {
    name: "Dikhsan Dwirangga Tibong",
    role: "CEO & Founder",
    image: "/images/team/team-1.png",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg,#4F46E5,#000)",
    handle: "@dikhsan"
  },
  {
    name: "Diki Ardikawiratama",
    role: "Commissioner/Founder",
    image: "/images/team/team-3.png",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#000)",
    handle: "@diki"
  },
  {
    name: "Chalifahdien Hamud",
    role: "General Manager",
    image: "/images/team/team-4.png",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#000)",
    handle: "@chalifa"
  },
  {
    name: "Febri Nusa Bakti",
    role: "Creative Lead",
    image: "/images/team/team-2.png",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#000)",
    handle: "@febri"
  },
];

// Add social icons data
const socialIcons: GlassIconsItem[] = [
  {
    icon: <FaLinkedin className="w-6 h-6 text-white" />,
    color: "blue",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram className="w-6 h-6 text-white" />,
    color: "purple",
    label: "Instagram",
  },
  {
    icon: <EnvelopeIcon className="w-6 h-6 text-white" />,
    color: "red",
    label: "Email",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6 text-white" />,
    color: "green",
    label: "WhatsApp",
  },
];

export default function Home() {
  const { t } = useLanguage();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight"
            >
              <GradientText colors={["#60A5FA", "#7C3AED", "#2563EB"]}>
                Creative Tech –{" "}
                <span>
                  {t("hero.title")}
                </span>
              </GradientText>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl"
            >
              <GradientText colors={["#9CA3AF", "#D1D5DB"]}>
                {t("hero.subtitle")}
              </GradientText>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.cta.collaborate")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-medium text-white bg-transparent border-2 border-white/20 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                onClick={() => {
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("hero.cta.portfolio")}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Velocity Section */}
      <div className="relative py-10">
        <ScrollVelocity
          texts={[
            "Web Development • Mobile Apps • UI/UX Design",
            "2D Animation • 3D Animation • Motion Graphics",
            "Digital Marketing • SEO • Social Media",
          ]}
          velocity={40}
          className="text-white/80"
          parallaxClassName="py-4"
          scrollerClassName="gap-4"
        />
      </div>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold"
            >
              <GradientText colors={["#60A5FA", "#7C3AED"]}>
                {t("about.title")}
              </GradientText>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl"
            >
              <GradientText colors={["#9CA3AF", "#D1D5DB"]}>
                {t("about.subtitle")}
              </GradientText>
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t("about.story.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("about.story.p1")}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {t("about.story.p2")}
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/about/office.png"
                alt="Creative Tech Office"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                variants={fadeInUp}
                onMouseMove={(e) => {
                  const c = e.currentTarget;
                  const rect = c.getBoundingClientRect();
                  c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                  c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                }}
                className="group relative flex flex-col w-full rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
                style={{
                  "--card-border": member.borderColor || "transparent",
                  background: member.gradient,
                  "--spotlight-color": "rgba(255,255,255,0.3)",
                } as React.CSSProperties}
              >
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
                  }}
                />
                <div className="relative z-10 flex-1 p-[10px] box-border">
                  <div className="relative w-full pt-[100%]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                </div>
                <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
                  <h3 className="m-0 text-[1.05rem] font-semibold">{member.name}</h3>
                  {member.handle && (
                    <span className="text-[0.95rem] opacity-80 text-right">
                      {member.handle}
                    </span>
                  )}
                  <p className="m-0 text-[0.85rem] opacity-85">{member.role}</p>
                </footer>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold"
            >
              <GradientText colors={["#60A5FA", "#7C3AED"]}>
                {t("services.title")}
              </GradientText>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl"
            >
              <GradientText colors={["#9CA3AF", "#D1D5DB"]}>
                {t("services.subtitle")}
              </GradientText>
            </motion.p>
          </motion.div>

          {/* Services Section Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`p-3 rounded-xl bg-${service.color}-500/20`}
                  >
                    <service.icon
                      className={`w-8 h-8 text-${service.color}-400`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {t(`services.${service.title.toLowerCase()}.title`)}
                    </h3>
                    <p className="text-gray-300">
                      {t(`services.${service.title.toLowerCase()}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold"
            >
              <GradientText colors={["#60A5FA", "#7C3AED"]}>
                {t("portfolio.title")}
              </GradientText>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl"
            >
              <GradientText colors={["#9CA3AF", "#D1D5DB"]}>
                {t("portfolio.subtitle")}
              </GradientText>
            </motion.p>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-gray-900/20 transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-blue-400">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen">
        {/* Background Animation - Full Screen */}
        <div className="absolute inset-0">
          <Ballpit
            className="w-full h-full"
            followCursor={true}
            count={150}
            colors={[0x4299e1, 0x9f7aea, 0xed64a6]}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex flex-col justify-center">
          {/* Header Title & Subtitle */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold"
            >
              <GradientText colors={["#60A5FA", "#7C3AED"]}>
                {t("contact.title")}
              </GradientText>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl"
            >
              <GradientText colors={["#9CA3AF", "#D1D5DB"]}>
                {t("contact.subtitle")}
              </GradientText>
            </motion.p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="w-full max-w-7xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-lg rounded-3xl w-full shadow-2xl border border-white/20 flex flex-col md:flex-row items-center justify-between px-10 py-12 gap-10"
            >
              {/* Kiri: Text */}
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {t("contact.info.title")}
                </h3>
                <p className="text-gray-200">{t("contact.subtitle")}</p>
              </div>

              {/* Tengah: Icons */}
              <div className="flex-[2]">
                <GlassIcons items={socialIcons} />
              </div>

              {/* Kanan: Contact Info */}
              <div className="flex-1 text-right text-gray-200">
                <p className="mb-2">hello@creativetech.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
