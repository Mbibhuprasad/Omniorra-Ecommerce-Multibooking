"use client";
import { motion } from "framer-motion";

const clients = ["Google Health", "WHO", "UNICEF", "Red Cross"];

export default function Clients() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Our Clients</h2>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="flex overflow-x-auto space-x-6 p-6"
      >
        {clients.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="min-w-[200px] p-6 bg-gray-500 shadow-lg rounded-xl text-center text-gray-100"
          >
            {c}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
