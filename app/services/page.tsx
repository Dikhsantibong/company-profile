"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon, VideoCameraIcon, CubeIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import GradientText from "@/components/GradientText";

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold"
          >
            <GradientText colors={["#60A5FA", "#7C3AED", "#2563EB"]}>
              Our Services
            </GradientText>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl"
          >
            <GradientText colors={["#9CA3AF", "#D1D5DB"]}>
              We offer comprehensive digital solutions to help your business thrive in
              the modern world.
            </GradientText>
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-xl bg-${service.color}-100 dark:bg-${service.color}-900/20`}
                >
                  <service.icon
                    className={`w-8 h-8 text-${service.color}-600 dark:text-${service.color}-400`}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    <GradientText colors={["#60A5FA", "#7C3AED"]}>
                      {service.title}
                    </GradientText>
                  </h3>
                  <p>
                    <GradientText colors={["#9CA3AF", "#D1D5DB"]}>
                      {service.description}
                    </GradientText>
                  </p>
                  <button className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    Learn more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <GradientText colors={["#60A5FA", "#7C3AED"]}>
              Ready to Start Your Project?
            </GradientText>
          </h2>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
} 