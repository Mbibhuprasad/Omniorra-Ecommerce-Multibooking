import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import omniimage from "../../assets/ChatGPT Image Aug 20, 2025, 01_55_18 AM.png";

const vendors = [
  {
    id: 1,
    name: "Ekart Logistic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mpJ9f3JrjgSS1NGlA1lX-I302FPUgxnl8w&s",
  },
  {
    id: 2,
    name: "Adobe",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPnUhHt3ZLeqQfPB7zxPXjJRrAL_dp9JBcBCBbd35r_gaStRxHdHvhwdS60AFJBva7sY&usqp=CAU",
  },
  {
    id: 3,
    name: "Olx India",
    img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201903/olx_660x450_032519080856.jpg",
  },
  {
    id: 4,
    name: "Shopclus bazar",
    img: "data:image/png;base64,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",
  },

  {
    id: 5,
    name: "Ola",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdAjARUMMuN22RecmKiFyi09txO0uu_wVZw&s",
  },
  {
    id: 6,
    name: "Ekart Logistic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mpJ9f3JrjgSS1NGlA1lX-I302FPUgxnl8w&s",
  },
  {
    id: 7,
    name: "Car Deal",
    img: "data:image/png;base64,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",
  },
  {
    id: 4,
    name: "Oyo",
    img: "data:image/png;base64,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",
  },
  {
    id: 8,
    name: "Health Care",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQfD4-hbnpt6il001ALf1x4QoFREwsw_u7w&s",
  },
  {
    id: 9,
    name: "India mart",
    img: "https://sigosoft.com/wp-content/uploads/2021/08/aaa10-1.png",
  },
  {
    id: 10,
    name: "The Royal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1zGlFEpqpAMjHr-Jc-Ppq97YXt7mFUPM1Q&s",
  },
];

const feedbacks = [
  {
    name: "John Doe",
    text: "Amazing platform! Very easy to use and fast delivery.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    text: "Good customer support and quality products.",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    text: "Affordable pricing and great selection of items.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    text: "Smooth checkout process and timely updates.",
    rating: 4,
  },
  {
    name: "David Brown",
    text: "Highly recommend this site for shopping.",
    rating: 5,
  },
];

export default function VendorSection() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollSpeed = 40;
  const [x, setX] = useState(0);

  useEffect(() => {
    let animation;
    if (!isPaused) {
      animation = setInterval(() => {
        setX((prev) => (prev - 1) % (vendors.length * 200));
      }, 1000 / scrollSpeed);
    }
    return () => clearInterval(animation);
  }, [isPaused]);

  const averageRating =
    feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / feedbacks.length;

  return (
    <div className="py-10 ">
      {/* Vendors Section */}
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Best Vendors & Partners
      </h2>
      <p className="text-center  mb-10">
        Trusted by leading companies to deliver the best services.
      </p>

      <div
        className="overflow-hidden w-full relative mb-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6"
          style={{ x }}
          transition={{ ease: "linear", duration: 0 }}
        >
          {[...vendors].map((vendor, index) => (
            <div
              key={index}
              className="min-w-[170px] rounded-lg shadow-lg p-2 flex flex-col items-center"
            >
              <img
                src={vendor.img}
                alt={vendor.name}
                className="w-[100%] h-30 object-cover rounded-[1rem] mb-5 shadow-[0_2px_5px_gray]"
              />
              <p className="font-medium text-white  ">{vendor.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Feedback + Ratings Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Feedback List */}
        <div>
          <h3 className="text-2xl font-bold mb-4">What Our Customers Say</h3>
          <div className="space-y-4">
            {feedbacks.map((fb, idx) => (
              <div
                key={idx}
                className=" p-4 rounded-lg shadow-md border border-gray-200"
              >
                <p className="font-semibold">{fb.name}</p>
                <p className="text-gray-600 text-sm">{fb.text}</p>
                <div className="flex mt-2">
                  {[...Array(fb.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ratings Summary */}
        <div
          className="p-6 rounded-lg shadow-md border border-gray-200 flex flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${omniimage})`,
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Overall Rating</h3>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(averageRating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }
                size={28}
              />
            ))}
          </div>
          <p className="text-lg font-semibold">
            {averageRating.toFixed(1)} / 5
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Based on {feedbacks.length} customer reviews
          </p>
        </div>
      </div>
    </div>
  );
}
