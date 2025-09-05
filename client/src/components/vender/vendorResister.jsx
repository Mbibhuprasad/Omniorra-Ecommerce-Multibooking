import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// Framer Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 22, stiffness: 180 },
  },
};

export default function VendorRegister() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    location: "",
    company: "",
    product: "",
    password: "",
    role: "vendor",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      alert(res?.data?.message || "Registered successfully");
      if (res?.data?.success) navigate("/components/vender/vendorLogin");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Grey linear gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />

      {/* Soft vignette & texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(60vw 60vw at 50% 20%, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />

      {/* Subtle animated blobs for depth */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02))",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute -bottom-20 -right-16 h-[28rem] w-[28rem] rounded-full"
        style={{
          background:
            "linear-gradient(225deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
          filter: "blur(50px)",
        }}
      />

      {/* Center card */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {/* Glassmorphism card with backdrop blur */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-1 text-center text-3xl font-bold tracking-tight text-white"
            >
              Vendor Registration
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-center text-sm text-gray-200"
            >
              Create your vendor account to list products and manage sales.
            </motion.p>

            <motion.form
              variants={container}
              initial="hidden"
              animate="show"
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              <motion.div variants={item}>
                <label className="mb-1 block text-sm text-gray-200">
                  Vendor Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-gray-300 outline-none ring-0 transition focus:border-white/20 focus:bg-white/15 focus:outline-none"
                  placeholder="e.g., Rahul Sharma"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-1 block text-sm text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-gray-300 outline-none transition focus:border-white/20 focus:bg-white/15"
                  placeholder="vendor@example.com"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-1 block text-sm text-gray-200">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-gray-300 outline-none transition focus:border-white/20 focus:bg-white/15"
                  placeholder="10-digit number"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-1 block text-sm text-gray-200">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-gray-300 outline-none transition focus:border-white/20 focus:bg-white/15"
                  placeholder="City, State"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-1 block text-sm text-gray-200">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-gray-300 outline-none transition focus:border-white/20 focus:bg-white/15"
                  placeholder="Company Pvt. Ltd."
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-1 block text-sm text-gray-200">
                  Product Name
                </label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-gray-300 outline-none transition focus:border-white/20 focus:bg-white/15"
                  placeholder="What are you selling?"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-1 block text-sm text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-gray-300 outline-none transition focus:border-white/20 focus:bg-white/15"
                  placeholder="At least characters"
                />
              </motion.div>

              <motion.button
                variants={item}
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-xl bg-white/90 px-4 py-3 font-semibold text-gray-900 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/60 disabled:cursor-not-allowed disabled:opacity-70"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
              >
                {loading ? "Registering..." : "Register"}
              </motion.button>
            </motion.form>

            <div className="mt-4 text-center text-sm text-gray-300">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/components/vender/vendorLogin")}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                Login here
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
