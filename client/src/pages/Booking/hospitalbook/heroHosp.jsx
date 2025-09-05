"use client";
import { motion } from "framer-motion";

export default function Herohosp() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-gray-500 to-green-700 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Your Health, Our Priority</h1>
        <p className="text-lg mb-6">
          Book your appointment with top hospitals & doctors instantly.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md"
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  );
}
