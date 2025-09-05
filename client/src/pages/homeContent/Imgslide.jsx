import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Shop Smarter, Live Better",
    description:
      "Discover the latest products, exclusive deals, and fast delivery—all in one place",
    image:
      "ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzzuKsSsiinEm5g03mBpEGNTbsVU7E4U7gg&s",
  },
  {
    id: 2,
    name: "Drive the Journey, Your Style",
    description:
      "Choose from a wide range of cars at affordable prices and hit the road with confidence.",
    image:
      "ttps://lh3.googleusercontent.com/proxy/Z-xcCWttspKEcIvWUsVIxc1rTsp5diZJfgue7jQVW6SqIc9ulLvR1ke_OD2-bJfcyrXtiu8O3aFWFGjubZ5zbqvqvHsWSg",
  },
  {
    id: 3,
    name: "Book Your Stay, Your Way",
    description:
      "Find the best hotels, compare prices, and enjoy hassle-free reservations worldwide.",
    image:
      "ttps://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Your Health, Our Priority",
    description: "High performance for ultimate gaming.",
    image: "ttps://images.pexels.com/photos/4225920/pexels-photo-4225920.jpeg",
  },
  {
    id: 5,
    name: "Master Data Science, Shape the Future",
    description:
      "Hands-on projects, expert mentors, and real-world skills to boost your career.",
    image:
      "ttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLmNpx_FWh78DjYffQXDgPVHsG8mb8Ex9LQ&s",
  },
];

export default function Imgslide() {
  return (
    <div className="w-full max-w-8xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative w-full h-[400px] flex items-center justify-center text-center text-white"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100%",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0  bg-opacity-40"></div>
              <div className="relative z-10 max-w-lg mt-40">
                <h2 className="text-3xl mt-30 font-extrabold text-black [text-shadow:2px_2px_0_#fff,-2px_2px_0_#fff,2px_-2px_0_#fff,-2px_-2px_0_#fff]">
                  {item.name}
                </h2>
                <p
                  className="mt-2 text-2xl text-white"
                  style={{
                    textShadow: "2px 2px 1px black",
                    WebkitTextStroke: "0.7px black",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
