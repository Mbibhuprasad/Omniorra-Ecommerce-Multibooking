import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    title: "Hotels",
    content:
      "From reservations to check-ins, manage everything in one place. Accept online payments, sync with OTAs, and delight your guests effortlessly.",
  },
  {
    title: "Hospitals & Clinics",
    content:
      "Schedule patient appointments, manage doctor availability, and automate reminders — ensuring smoother healthcare management.",
  },
  {
    title: "Vehicle Rentals",
    content:
      "Manage fleet bookings, track vehicle availability, automate contracts, and offer seamless rental experiences for your customers.",
  },
  {
    title: "Education",
    content:
      "Handle classroom scheduling, student registrations, and course bookings with ease. Perfect for schools, coaching centers, and universities.",
  },
  {
    title: "Hostels",
    content:
      "Easily organize shared accommodations, automate bookings, and provide a smooth guest experience across multiple properties.",
  },
  {
    title: "Vacation Rentals",
    content:
      "Boost occupancy with automated calendars, online payments, and integration with booking platforms like Airbnb & Booking.com.",
  },
  {
    title: "Glamping & Resorts",
    content:
      "Simplify guest management for unique stays — from eco-resorts to luxury glamping sites, manage bookings in one dashboard.",
  },
];

export default function BookingFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <h1 className="text-6xl font-bold text-white text-center my-16">
        What We Provide
      </h1>
      <div className="m-18 flex items-center justify-center ">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-36  items-start">
          {/* Left Accordion */}
          <div className="space-y-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="border-b border-white-200 pb-2 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center py-3">
                  <h3 className="text-[1.5rem] font-semibold">
                    {industry.title}
                  </h3>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p className="text-white-600 text-[1.25em] leading-relaxed pb-3">
                        {industry.content}
                      </p>
                      <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                        Learn More
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Image (Dynamic) */}
          <div className="flex justify-center">
            <motion.img
              key={openIndex}
              src={
                openIndex === null
                  ? "https://www.shutterstock.com/image-photo/businessman-pointing-pen-virtual-screen-600nw-2514426419.jpg"
                  : `https://picsum.photos/600/400?random=${openIndex + 1}`
              }
              alt="Industry visual"
              className="rounded-2xl shadow-lg w-full h-[30rem] object-cover"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
