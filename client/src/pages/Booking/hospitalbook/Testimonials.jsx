"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Dr. Sharma", text: "The system makes patient booking seamless." },
  { name: "Dr. Khan", text: "Easy and fast scheduling for consultations." },
];

export default function Testimonials() {
  return (
    <section className="py-20  text-center">
      <h2 className="text-3xl font-bold mb-8">What Doctors Say</h2>
      <div className="flex justify-center gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-6  shadow-[0_3px_10px_gray] rounded-xl w-80"
          >
            <p className="italic">"{t.text}"</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
