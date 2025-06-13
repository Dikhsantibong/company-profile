"use client";

import { motion } from "framer-motion";
import GlassIcons, { GlassIconsItem } from "@/components/GlassIcons";
import Ballpit from "@/components/Ballpit";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

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

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <Ballpit
          className="w-full h-full"
          followCursor={true}
          count={100}
          colors={[0x4299e1, 0x9f7aea, 0xed64a6]}
        />
      </div>

      {/* Contact Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 w-full max-w-2xl mx-4"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Let's Connect
            </h1>
            <p className="text-gray-200">
              Reach out through any of these platforms
            </p>
          </div>

          {/* Social Icons */}
          <GlassIcons
            items={socialIcons}
            className="max-w-lg mx-auto"
          />

          {/* Contact Info */}
          <div className="mt-12 text-center text-gray-200">
            <p className="mb-2">hello@creativetech.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 