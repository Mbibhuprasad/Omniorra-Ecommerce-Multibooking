import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        userData
      );

      // console.log(res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        console.log('res.data.user:', res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      if (res.data.success) {
        alert(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error(
        "Error occurred:",
        error.response ? error.response.data : error
      );
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div
        className="overlay fixed inset-0 backdrop-blur-3xl border border-white/10 z-20"
        onClick={() => navigate("/")}
      ></div>

      <div className="min-h-screen flex items-center justify-center relative">
        <div className="p-8 rounded-2xl shadow-[0_4px_30px_grey] w-96 z-30 bg-white">
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="text-[black] w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={userData.email}
              name="email"
              onChange={handelChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="text-[black] w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={userData.password}
              name="password"
              onChange={handelChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl transition-all duration-200"
            >
              Login
            </button>
          </form>

          {/* Extra section */}
          <p className="text-center text-sm mt-4 text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-purple-600 font-semibold hover:underline hover:text-purple-800 transition-all duration-200"
            >
              Register here
            </button>
          </p>

          <p className="text-center text-sm mt-4 text-gray-600">
            Want to sell your product?{" "}
            <button
              onClick={() => navigate("/components/vender/vendorLogin")}
              className="text-purple-600 font-semibold hover:underline hover:text-purple-800 transition-all duration-200"
            >
              Vender
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
