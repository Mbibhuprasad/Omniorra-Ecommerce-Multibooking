// WhyBuyOurProduct.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyBuyOurProduct = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <h1 className="text-center text-[3rem] text-white">Why Omniorra</h1>

      <section
        ref={ref}
        className="w-[95%] flex flex-col md:flex-row items-center justify-center py-2 px-4 bg-gray-900 text-white"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://media.istockphoto.com/id/1282562204/photo/woman-at-home-sofa-sitting-stock-photo.jpg?s=2048x2048&w=is&k=20&c=ZwRk72SThyr5XG6xUcNorBLdGcroYhYg7TQ-Ae5tImw="
            alt="Why Buy"
            className="rounded-lg shadow-lg scale-80" // 20% smaller
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12"
        >
          <h2 className="text-3xl font-bold mb-8">
            Why Buy Our Product & Book with Omniorra?
          </h2>
          <p className="mb-4">
            Our products are crafted with quality materials, ensuring durability
            and long-lasting performance. We focus on affordability without
            compromising on style and functionality.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Top-quality materials</li>
            <li>Affordable pricing Exclusive offers and seasonal discounts</li>
            <li>Fast delivery and easy returns</li>
            <li>24/7 customer support & assistance for all your bookings</li>
            <li>Quick and easy booking process</li>
            <li>Trusted hotels, vehicles, hospitals, and education services</li>
            <li>Secure payments with instant confirmation</li>
            <li>Flexible cancellations and hassle-free rescheduling</li>
          </ul>
        </motion.div>
      </section>
    </>
  );
};

export default WhyBuyOurProduct;
