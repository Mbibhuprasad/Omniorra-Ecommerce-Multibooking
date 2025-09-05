// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Omniora</h2>
          <p className="text-gray-400">
            Omniora is your trusted destination for quality products, reliable
            service, and exclusive deals. Connecting vendors and customers
            worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Products", "Contact", "FAQ"].map(
              (link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative group transition duration-300"
                  >
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            {[
              "Help Center",
              "Shipping & Returns",
              "Track Order",
              "Warranty",
              "Terms & Conditions",
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="relative group transition duration-300">
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-400">📍 123 Omniora Street, City, Country</p>
          <p className="text-gray-400">📞 +1 234 567 890</p>
          <p className="text-gray-400">📧 support@omniora.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400 transition">
              🌐
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              📸
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              🐦
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Omniora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
