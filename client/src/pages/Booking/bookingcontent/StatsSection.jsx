import { Building2, CalendarCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      icon: <Building2 className="w-10 h-10 text-yellow-400" />,
      value: "4,000",
      label: "Properties Managed Globally",
    },
    {
      icon: <CalendarCheck className="w-10 h-10 text-green-400" />,
      value: "3,000,000",
      label: "Bookings Processed Annually",
    },
    {
      icon: <Star className="w-10 h-10 text-pink-400" />,
      value: "98%",
      label: "User Satisfaction Rate",
    },
  ];

  return (
    <section ref={ref} className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading with animation */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Discover how <span className="text-blue-400">We</span> can transform
          your business
        </motion.h2>

        {/* Stats Grid with animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
