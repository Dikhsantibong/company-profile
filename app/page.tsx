"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import ScrollVelocity from "@/components/ScrollVelocity";
import {
  CodeBracketIcon,
  VideoCameraIcon,
  CubeIcon,
  MegaphoneIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

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
  },
  {
    name: "Diki Ardikawiratama",
    role: "Commissioner/Founder",
    image: "/images/team/team-3.png",
  },
  {
    name: "Chalifahdien Hamud",
    role: "General Manager",
    image: "/images/team/team-4.png",
  },
  {
    name: "Febri Nusa Bakti",
    role: "Creative Lead",
    image: "/images/team/team-2.png",
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight"
            >
              Creative Tech –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {t("hero.title")}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              {t("hero.subtitle")}
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
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
            >
              {t("about.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              {t("about.subtitle")}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
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
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
            >
              {t("services.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              {t("services.subtitle")}
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
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
            >
              {t("portfolio.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              {t("portfolio.subtitle")}
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
      <section id="contact" className="relative py-20">
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
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
            >
              {t("contact.title")}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-400"
            >
              {t("contact.subtitle")}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <motion.form
                variants={fadeInUp}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t("contact.form.submit")}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t("contact.info.title")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {t("contact.info.email")}
                    </h4>
                    <p className="text-gray-300">
                      hello@creativetech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {t("contact.info.phone")}
                    </h4>
                    <p className="text-gray-300">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {t("contact.info.office")}
                    </h4>
                    <p className="text-gray-300">
                      123 Innovation Street
                      <br />
                      Tech City, TC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("contact.hours.title")}
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>{t("contact.hours.weekday")}</p>
                <p>{t("contact.hours.saturday")}</p>
                <p>{t("contact.hours.sunday")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
