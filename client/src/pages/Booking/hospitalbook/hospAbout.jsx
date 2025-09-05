"use client";
import { motion } from "framer-motion";

export default function Hospabout() {
  return (
    <section className="py-20 text-center">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4">
          About Our Hospital Management
        </h2>
        <p className="text-gray-200">
          We provide advanced hospital booking solutions that allow patients to
          choose doctors, hospitals, and medical services with ease.
        </p>
      </motion.div>
    </section>
  );
}
