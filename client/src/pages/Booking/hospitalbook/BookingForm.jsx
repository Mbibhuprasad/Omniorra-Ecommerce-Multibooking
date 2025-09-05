"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import PopupAlert from "./PopupAlert";

export default function BookingForm() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <section className="py-20  text-center">
      <h2 className="text-3xl font-bold mb-8">Book Your Appointment</h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-lg mx-auto  p-6 rounded-lg shadow-[0_3px_10px_gray]"
      >
        <select
          className="w-full p-3 mb-4 rounded text-black bg-gray-200"
          required
        >
          <option value="">Choose Medical</option>
          <option>Cardiology</option>
          <option>Neurology</option>
        </select>
        <select
          className="w-full p-3 mb-4 rounded text-black bg-gray-200"
          required
        >
          <option value="">Choose Doctor</option>
          <option>Dr. Sharma</option>
          <option>Dr. Khan</option>
        </select>
        <select
          className="w-full p-3 mb-4 rounded text-black bg-gray-200"
          required
        >
          <option value="">Choose Type</option>
          <option>Online</option>
          <option>In-Person</option>
        </select>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
        >
          Submit
        </motion.button>
      </motion.form>

      {showPopup && <PopupAlert />}
    </section>
  );
}
