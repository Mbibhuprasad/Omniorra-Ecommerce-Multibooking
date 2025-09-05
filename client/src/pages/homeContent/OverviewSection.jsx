import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OverviewSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center text-[3rem] text-white">Overview</h1>

      {/* Main Ecommerce Section */}
      <section className="text-white-200 py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 ">
            Discover, Shop & Sell with{" "}
            <span className="text-indigo-600">Ease</span>
          </h2>
          <p className=" mb-4 leading-relaxed">
            At <strong>Omniora</strong>, we bring you a wide range of
            high-quality products — from fashion and electronics to home
            essentials and more.
          </p>
          <p className=" mb-4 leading-relaxed">
            We provide secure payments, fast delivery, and a seamless shopping
            experience for our customers.
          </p>
          <p className=" mb-6 leading-relaxed">
            Whether you’re here to shop or sell, our platform is designed to
            help you find the best deals and connect with a large audience.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/add-product")}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Sell Your Product
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://media.istockphoto.com/id/1449490038/photo/online-shopping-and-e-commerce-technology-concept-shopper-using-computer-laptop-to-input.jpg?s=2048x2048&w=is&k=20&c=3Pmwqsxiy2XTePmajfBQyz2KcnC27QtzaFxNmBD9al0="
            alt="Ecommerce overview"
            className="rounded-2xl shadow-lg w-[35rem] object-cover"
          />
        </motion.div>
      </section>

      {/* Booking Section (Image Left, Content Right) */}
      <section className="py-14 px-4 lg:px-16 flex flex-col lg:flex-row items-center gap-10 ">
        {/* Left Image */}
        <motion.div
          className="flex-1 flex justify-center "
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.pexels.com/photos/6862444/pexels-photo-6862444.jpeg"
            alt="Booking services"
            className="rounded-2xl shadow-lg w-[32rem] h-[35rem] object-cover "
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Multiple Booking Services at{" "}
            <span className="text-indigo-600">Omniorra</span>
          </h2>

          <div className="space-y-6">
            {/* Hotel Booking */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md text-white">
              <h3 className="text-xl font-semibold">Book a Hotel</h3>
              <p className="text-sm mb-3">
                Find top-rated hotels with comfort and exclusive deals.
              </p>
              <button
                onClick={() => navigate("/book-hotel")}
                className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Book Now
              </button>
            </div>

            {/* Vehicle Rental */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md text-white">
              <h3 className="text-xl font-semibold">Rent a Vehicle</h3>
              <p className="text-sm mb-3">
                Choose cars, bikes, or rentals at affordable prices.
              </p>
              <button
                onClick={() => navigate("/book-vehicle")}
                className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Rent Now
              </button>
            </div>

            {/* Hospital Booking */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md text-white">
              <h3 className="text-xl font-semibold">Hospital Appointment</h3>
              <p className="text-sm mb-3">
                Book doctor consultations and hospital visits easily.
              </p>
              <button
                onClick={() => navigate("/book-hospital")}
                className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Book Now
              </button>
            </div>

            {/* Education Booking */}
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-md text-white">
              <h3 className="text-xl font-semibold">Education Programs</h3>
              <p className="text-sm mb-3">
                Register for online/offline courses and learning events.
              </p>
              <button
                onClick={() => navigate("/book-education")}
                className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default OverviewSection;
