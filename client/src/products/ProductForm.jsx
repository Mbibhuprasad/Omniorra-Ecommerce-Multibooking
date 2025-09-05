// src/components/AddProductForm.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    category: "",
    subcategory: "",
    imageUrl: "", // <-- New state for URL
    image: null,
  });

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  // You'll need to fetch categories and subcategories from your backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    const fetchSubcategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/subcategories");
        const data = await res.json();
        setSubcategories(data);
      } catch (err) {
        console.error("Failed to fetch subcategories:", err);
      }
    };

    fetchCategories();
    fetchSubcategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0], imageUrl: "" }); // Clear URL on file upload
      setImagePreview(URL.createObjectURL(files[0]));
    } else if (name === "imageUrl") {
      setFormData({ ...formData, imageUrl: value, image: null }); // Clear file on URL change
      setImagePreview(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("stock", formData.stock);
    data.append("category", formData.category);
    data.append("subcategory", formData.subcategory);

    if (formData.image) {
      data.append("image", formData.image);
    } else if (formData.imageUrl) {
      data.append("imageUrl", formData.imageUrl);
    }

    try {
      const res = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to add product");
      }

      const result = await res.json();
      console.log("Product added:", result);
      setFormData({
        name: "",
        price: "",
        description: "",
        stock: "",
        category: "",
        subcategory: "",
        imageUrl: "",
        image: null,
      });
      setImagePreview(null);
      alert("Product added successfully!");
     
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubcategories = subcategories.filter(
    (sub) => sub.category._id === formData.category
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-gray-900 min-h-screen text-white"
    >
      <div className="max-w-xl mx-auto p-8 rounded-lg shadow-lg bg-gray-800 border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-400">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-200 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          {/* Price & Stock in a flexbox */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-400"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-200 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="stock"
                className="block text-sm font-medium text-gray-400"
              >
                Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-200 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-400"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-200 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              required
            ></textarea>
          </div>

          {/* Category & Subcategory Select */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-400"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-200 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="subcategory"
                className="block text-sm font-medium text-gray-400"
              >
                Subcategory
              </label>
              <select
                id="subcategory"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-200 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                required
              >
                <option value="">Select Subcategory</option>
                {filteredSubcategories.map((sub) => (
                  <option key={sub._id} value={sub._id}>
                    {sub.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Image Upload/URL with Preview */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400">
              Product Image
            </label>
            <div className="mt-1 flex items-center justify-center w-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative cursor-pointer bg-gray-700 border-2 border-dashed border-gray-600 rounded-lg p-6 w-full text-center"
              >
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept="image/*"
                />
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Product Preview"
                    className="mx-auto max-h-48 object-contain rounded-md"
                  />
                ) : (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-4-4v-1a4 4 0 014-4h14a4 4 0 014 4v1a4 4 0 01-4 4h-3m-6-4l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-400">
                      Drag 'n' drop or click to upload
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
            <div className="text-center text-gray-500 text-sm mt-2">OR</div>
            <div className="mt-2">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-400"
              >
                Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-2 text-gray-200 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>

          {/* Submission Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-teal-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-teal-600 transition duration-300"
            disabled={loading}
          >
            {loading ? "Adding Product..." : "Add Product"}
          </motion.button>

          {error && (
            <div className="mt-4 text-center text-red-400">{error}</div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default AddProductForm;
