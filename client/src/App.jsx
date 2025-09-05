import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Service from "./pages/Service";
import ProductDashboard from "./pages/Product";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Register from "./components/Register";
import Electronics from "./products/productCategory/electronics";
import Fashion from "./products/productCategory/fashion";
import Medicine from "./products/productCategory/medicine";
import Grocery from "./products/productCategory/grocery";

import Furniture from "./products/productCategory/furniture";
import VendorRegister from "./components/vender/vendorResister";
import VendorLogin from "./components/vender/vendorLogin";

import Booking from "./pages/Booking/BookingSub";
import Hospital from "./pages/Booking/hospitalbook/HospitalMain";
import About from "./pages/About";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminAuthenticate";
import AddProductForm from "./products/ProductForm";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <Navbar />
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDashboard />} />
          <Route path="/productform" element={<AddProductForm />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminLogin />} />

          {/* product catagory routing */}
          <Route
            path="/products/productCategory/fashion"
            element={<Fashion />}
          />
          <Route
            path="/products/productCategory/electronics"
            element={<Electronics />}
          />
          <Route
            path="/products/productCategory/medicine"
            element={<Medicine />}
          />
          <Route
            path="/products/productCategory/furniture"
            element={<Furniture />}
          />
          <Route
            path="/products/productCategory/grocery"
            element={<Grocery />}
          />
          <Route path="/pages/Booking/booking" element={<Booking />} />
          {/* vendor routing section */}
          <Route
            path="/components/vender/vendorRegister"
            element={<VendorRegister />}
          />
          <Route
            path="/components/vender/vendorLogin"
            element={<VendorLogin />}
          />
          {/* admin routing section */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* booking system routing */}
          <Route path="/pages/Booking/hospital" element={<Hospital />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
