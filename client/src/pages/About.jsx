// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Hotel, Car, Stethoscope, BookOpen, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>

      {/* Main Content */}
      <motion.div
        className="max-w-4xl bg-white shadow-lg rounded-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to{" "}
          <span className="font-semibold text-indigo-600">Omniora</span>, your
          ultimate destination for shopping, bookings, and lifestyle solutions.
          We combine innovation, convenience, and trust to bring you an
          experience like no other.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our mission is simple — to make your life easier. Whether you want to
          shop online, book a hotel, rent a vehicle, schedule a hospital
          appointment, or enroll in education services,{" "}
          <span className="font-semibold text-indigo-600">Omniora</span> is your
          one-stop platform.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          With a handpicked selection of services, secure payment methods, and
          dedicated customer support, we ensure fast, reliable, and stress-free
          experiences.
        </p>
      </motion.div>

      {/* Booking Solutions Section */}
      <motion.div
        className="max-w-5xl mt-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Our Booking Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hotel Booking */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <Hotel className="w-10 h-10 text-indigo-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Hotel Booking</h3>
            <p className="text-gray-600 mt-2">
              Find and book hotels with ease, enjoy exclusive discounts, and
              manage reservations instantly.
            </p>
          </div>

          {/* Vehicle Rental */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <Car className="w-10 h-10 text-indigo-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Vehicle Rental</h3>
            <p className="text-gray-600 mt-2">
              Rent cars, bikes, or luxury rides at affordable rates with instant
              confirmation.
            </p>
          </div>

          {/* Hospital Booking */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <Stethoscope className="w-10 h-10 text-indigo-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Hospital Booking</h3>
            <p className="text-gray-600 mt-2">
              Book doctor appointments, schedule checkups, and manage health
              records online.
            </p>
          </div>

          {/* Education Booking */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <BookOpen className="w-10 h-10 text-indigo-500 mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="text-gray-600 mt-2">
              Enroll in courses, book training sessions, and explore new
              learning opportunities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="max-w-5xl mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Why Choose Omniora?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-gray-700">
              All-in-one platform for shopping & bookings
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-gray-700">
              Instant confirmation & secure payments
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-gray-700">
              24/7 customer support for your needs
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-gray-700">
              Best price deals with no hidden charges
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-gray-700">
              User-friendly interface & mobile-friendly design
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
            <p className="text-gray-700">
              Trusted by thousands of customers worldwide
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
