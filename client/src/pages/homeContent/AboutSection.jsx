// AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import geminipic from "../../assets/Gemini_Generated_Image_1vlkx91vlkx91vlk.png"; // Adjust the path as necessary

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center text-[3rem] text-white">About Us</h1>
      <section className="bg-gray-900 text-white py-12 px-2">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Content Left */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: -50 }} // from top
            whileInView={{ opacity: 1, y: 0 }} // to normal position
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">About Our E-commerce</h2>
            <p className="text-lg mb-6">
              Welcome to our e-commerce store! We bring you a wide range of
              premium quality products at unbeatable prices. Our mission is to
              provide a smooth and secure shopping experience for everyone.
            </p>
            <p className="text-lg mb-6">
              With fast delivery, excellent customer service, and exclusive
              offers, shopping with us means more value for your money.
            </p>
            <p className="text-lg ">
              We provide multiple booking solutions under one platform to make
              your life easier. Whether it’s managing your travel, healthcare,
              or education, our system ensures a smooth, fast, and reliable
              booking experience.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="relative px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md overflow-hidden group transition-all duration-300 mt-8"
            >
              <span className="relative z-10 group-hover:text-yellow-300 transition-colors duration-300">
                More about...
              </span>

              {/* Animated background effect */}
              <span className="absolute inset-0 bg-blue-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>
            </button>
          </motion.div>

          {/* Image Right */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: -50 }} // from top
            whileInView={{ opacity: 1, y: 0 }} // to normal position
            transition={{ duration: 0.8, delay: 0.2 }} // slight delay for staggered effect
            viewport={{ once: true }}
          >
            <img
              src={geminipic}
              alt="About Us"
              className="rounded-lg shadow-lg w-[38rem] h-[30rem]"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
