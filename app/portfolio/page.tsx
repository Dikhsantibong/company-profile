"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GradientText from "@/components/GradientText";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/images/portfolio/ecommerce.jpg",
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    title: "Brand Animation",
    category: "2D Animation",
    image: "/images/portfolio/animation.jpg",
    slug: "brand-animation",
  },
  {
    id: 3,
    title: "Product Visualization",
    category: "3D Animation",
    image: "/images/portfolio/3d-viz.jpg",
    slug: "product-visualization",
  },
  {
    id: 4,
    title: "Digital Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio/marketing.jpg",
    slug: "digital-campaign",
  },
  {
    id: 5,
    title: "Mobile App UI/UX",
    category: "App Development",
    image: "/images/portfolio/mobile-app.jpg",
    slug: "mobile-app-uiux",
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "Web Development",
    image: "/images/portfolio/corporate.jpg",
    slug: "corporate-website",
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

export default function PortfolioPage() {
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
              Our Portfolio
            </GradientText>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl"
          >
            <GradientText colors={["#9CA3AF", "#D1D5DB"]}>
              Explore our latest projects and creative works that showcase our
              expertise.
            </GradientText>
          </motion.p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/portfolio/${project.slug}`}>
                <div className="relative h-64 w-full">
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium">
                    <GradientText colors={["#3B82F6", "#60A5FA"]}>
                      {project.category}
                    </GradientText>
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">
                    <GradientText colors={["#60A5FA", "#7C3AED"]}>
                      {project.title}
                    </GradientText>
                  </h3>
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400">
                    <span className="text-sm font-medium">View Project</span>
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          <GradientText colors={["#60A5FA", "#7C3AED"]}>
            Ready to Start Your Project?
          </GradientText>
        </h2>
      </div>
    </div>
  );
} 