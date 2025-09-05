import React from "react";
import { motion } from "framer-motion";
import { Code, Brush, Zap, Globe, Database, Shield } from "lucide-react";

const services = [
  {
    icon: <Code size={36} />,
    title: "Web Development",
    description: "High-performance websites built with modern frameworks.",
  },
  {
    icon: <Brush size={36} />,
    title: "UI/UX Design",
    description: "Creative, user-focused designs with smooth interactions.",
  },
  {
    icon: <Zap size={36} />,
    title: "Performance Optimization",
    description: "Lightning-fast load times and seamless navigation.",
  },
  {
    icon: <Globe size={36} />,
    title: "SEO & Marketing",
    description: "Boost your site’s visibility and ranking on search engines.",
  },
  {
    icon: <Database size={36} />,
    title: "Database Management",
    description: "Secure, scalable, and efficient data storage solutions.",
  },
  {
    icon: <Shield size={36} />,
    title: "Security Solutions",
    description: "Protect your site from cyber threats and vulnerabilities.",
  },
];

const Services = () => {
  return (
    <div className="py-16 " id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className=" text-center mb-12">
          We offer a variety of high-quality services to help your business
          thrive.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
              transition={{
                type: "spring",
                stiffness: 500, // Faster animation
                damping: 20,
              }}
            >
              <div className="text-indigo-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
