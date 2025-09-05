import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            We’d love to hear from you! Whether you have a question about our
            products, need assistance, or just want to give feedback — our team
            is ready to answer all your queries.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>✔ Businesses looking for partnerships</li>
            <li>✔ Customers needing product support</li>
            <li>✔ Anyone with ideas or suggestions</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-md hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
