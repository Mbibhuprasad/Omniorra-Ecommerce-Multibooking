import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ChatGPT Image Aug 20, 2025, 01_47_16 AM.png";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  // Simple effect to update token state when it changes
  useEffect(() => {
    // This will run after every render, checking if token changed
    const currentToken = localStorage.getItem("token");
    console.log("currentUser:", currentUser);
    if (currentToken !== token) {
      setToken(currentToken);
    }
  });

  const login = () => {
    navigate("/login");
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null); // Update state to trigger re-render
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full shadow-[0_3px_10px_grey] z-50"
    >
      <div
        className={`flex justify-between items-center px-6 py-4 transition-colors duration-500 ${
          !darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        {/* Logo */}
        <div className="w-[11rem] mx-4">
          <img src={logo} alt="logo" />
        </div>

        {/* Menu Items */}
        {/* Menu Items */}
        <div className="hidden md:flex space-x-14 font-bold text-[1.2rem]">
          <Link
            to="/"
            className="relative hover:text-blue-800 transition-colors duration-300 
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:w-0 after:h-[2px] after:bg-blue-800 
      after:transition-all after:duration-500 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="relative hover:text-blue-800 transition-colors duration-300 
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:w-0 after:h-[2px] after:bg-blue-800 
      after:transition-all after:duration-500 hover:after:w-full"
          >
            Collections
          </Link>
          <Link
            to="/booking"
            className="relative hover:text-blue-800 transition-colors duration-300 
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:w-0 after:h-[2px] after:bg-blue-800 
      after:transition-all after:duration-500 hover:after:w-full"
          >
            Booking
          </Link>
          <Link
            to="/service"
            className="relative hover:text-blue-800 transition-colors duration-300 
      after:content-[''] after:absolute after:left-0 after:-bottom-1 
      after:w-0 after:h-[2px] after:bg-blue-800 
      after:transition-all after:duration-500 hover:after:w-full"
          >
            Service
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-6">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Login Button */}
          {!token ? (
            <button
              onClick={login}
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition text-[1rem]"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logOut}
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition text-[1rem]"
            >
              Logout
            </button>
          )}

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full dark:bg-gray-700">
              <User size={22} className="text-gray-900 dark:text-white" />
            </div>
            <span className="font-semibold text-lg">{currentUser?.name}</span>
          </div>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <Menu size={26} />
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
                }`}
              >
                <Link
                  to="/notifications"
                  className="block px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Notification
                </Link>
                <span className="block px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-700">
                  24×7
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
