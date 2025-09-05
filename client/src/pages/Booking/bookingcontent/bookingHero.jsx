import React from "react";
import { motion } from "framer-motion";

export default function BookingHero() {
  return (
    <div className="w-full min-h-screen  text-white flex items-center justify-center px-6 py-12">
      <motion.div
        className="w-[90%] flex flex-col justify-between md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left Content */}
        <motion.div
          className="w-[45%]  space-y-6  p-6 rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Effortless Reservations, Extraordinary Stays.
          </h1>
          <p className="text-gray-300 text-lg">
            Automate reservations, reduce errors, and deliver a flawless
            experience across hospitality, healthcare, education, and beyond
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Start a Free Trial
            </button>
            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition">
              Book a Demo
            </button>
          </div>
        </motion.div>

        {/* Right Video Section */}
        <div className="relative w-[50%]  h-[550px]  rounded-xl shadow-lg">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-xl "
          >
            <source
              src="https://sirvoy.com/wp-content/uploads/2025/07/video-website-woman-on-phone-casual.mp4"
              type="video/mp4"
            />
          </video>

          {/* Foreground Booking Card Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-45 left-[-47%] w-full h-full object-contain "
          >
            <source
              src="https://sirvoy.com/wp-content/uploads/2025/07/New-Booking-Without-background-Video-1-1-1.webm"
              type="video/webm"
            />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
