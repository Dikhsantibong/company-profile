"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
          >
            About Creative Tech
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            We are a team of passionate creators and innovators dedicated to
            bringing your digital vision to life.
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Founded in 2020, Creative Tech has grown from a small startup to a
              full-service digital agency. We believe in combining creativity with
              technical excellence to deliver exceptional results for our clients.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Our mission is to help businesses thrive in the digital age by
              providing innovative solutions that drive growth and create lasting
              impact.
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
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our talented team of professionals brings diverse skills and
              experience to every project.
            </p>
          </motion.div>

          <motion.div
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
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-20 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We constantly push boundaries and embrace new technologies.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for perfection in every project we undertake.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We work closely with our clients to achieve shared success.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 