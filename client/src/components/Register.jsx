import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", userData);

      if (res.data.success) {
        alert("✅ Registration Successful!");
        navigate("/login");
      } else {
        alert(res.data.message || "❌ Registration failed!");
      }
      console.log("✅ Registered:", res.data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      {/* Glass overlay */}
      <div
        className="overlay fixed inset-0 backdrop-blur-3xl border border-white/10 z-20"
        onClick={() => navigate("/")}
      ></div>

      {/* Register form */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="p-8 rounded-2xl shadow-[0_4px_30px_grey] w-96 z-30 bg-[#1a1a1a]/80">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="text-white w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              value={userData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-white w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              value={userData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-white w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              value={userData.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl transition-all duration-200"
            >
              Register
            </button>
          </form>

          {/* Back to Login */}
          <p className="text-center text-sm mt-4 text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-green-400 font-semibold hover:underline hover:text-green-600 transition-all duration-200"
            >
              Login here
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
