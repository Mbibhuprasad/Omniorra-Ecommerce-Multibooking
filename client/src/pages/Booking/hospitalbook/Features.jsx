"use client";
import { motion } from "framer-motion";

const features = [
  "Instant Appointment Booking",
  "Top Certified Doctors",
  "Trusted Hospitals",
  "24/7 Patient Support",
];

export default function Features() {
  return (
    <section className="py-20  text-center">
      <h2 className="text-3xl font-bold mb-8">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-6 bg-blue-200 rounded-xl shadow-lg text-black"
          >
            <p className="font-semibold">{f}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
