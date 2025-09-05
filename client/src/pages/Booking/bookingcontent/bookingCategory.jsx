import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Vehicle Rental",
    path: "/vehicle",
    img: "https://img.icons8.com/color/96/car--v1.png",
  },
  {
    name: "Hotel Booking",
    path: "/hotel",
    img: "https://img.icons8.com/color/96/hotel.png",
  },
  {
    name: "Hospital Booking",
    path: "/pages/Booking/hospital",
    img: "https://img.icons8.com/color/96/hospital-room.png",
  },
  {
    name: "Education Registration",
    path: "/education",
    img: "https://img.icons8.com/color/96/graduation-cap.png",
  },
];

export default function BookingCategory() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {categories.map((cat, i) => (
        <Link to={cat.path} className="flex flex-col items-center space-y-3">
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-[20rem] rounded-2xl shadow-[0_0_10px_rgba(240,230,230,0.5)] p-10 flex flex-col items-center cursor-pointer hover:shadow-[0_0_20px_rgba(240,230,230,0.5)]"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-20 h-20 object-contain"
            />
            <h3 className="text-lg font-semibold text-white-700 mt-6">
              {cat.name}
            </h3>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
