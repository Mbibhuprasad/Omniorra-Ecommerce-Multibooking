"use client";
import { motion } from "framer-motion";
import { Building2, Stethoscope, Car, GraduationCap, Calendar, ShoppingBag, Plane, Utensils } from "lucide-react";

const accommodations = [
  {
    icon: <Building2 className="w-10 h-10 text-yellow-400" />,
    title: "Hotels",
    description:
      "Smart and reliable tools to manage bookings, guest experiences, and hospitality services for hotels and resorts.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-red-400" />,
    title: "Medical",
    description:
      "Ideal for hospitals, clinics, and healthcare providers to manage appointments, services, and patient experiences.",
  },
  {
    icon: <Car className="w-10 h-10 text-blue-400" />,
    title: "Vehicle",
    description:
      "Perfect for car rentals, bike rentals, and transport services with easy booking and fleet management tools.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-green-400" />,
    title: "Education",
    description:
      "Solutions for schools, colleges, and training centers to manage admissions, courses, and event scheduling.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-purple-400" />,
    title: "Event Booking",
    description:
      "Built for weddings, conferences, and social events—seamlessly manage reservations, schedules, and services.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-pink-400" />,
    title: "Shopping",
    description:
      "Designed for retail stores and eCommerce businesses to handle product listings, sales, and customer management.",
  },
  {
    icon: <Plane className="w-10 h-10 text-cyan-400" />,
    title: "Travel & Tours",
    description:
      "Perfect for travel agencies and tour operators to organize trips, bookings, and customer experiences.",
  },
  {
    icon: <Utensils className="w-10 h-10 text-orange-400" />,
    title: "Restaurants",
    description:
      "Tailored for restaurants, cafés, and food outlets to manage reservations, online orders, and customer engagement.",
  },
];

export default function AccommodationTypes() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Accommodation Types
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accommodations.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
