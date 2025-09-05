"use client";
import { motion } from "framer-motion";

export default function PopupAlert() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 70 }}
      className="fixed top-16 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
    >
      Appointment Successfully Booked ✅
    </motion.div>
  );
}
