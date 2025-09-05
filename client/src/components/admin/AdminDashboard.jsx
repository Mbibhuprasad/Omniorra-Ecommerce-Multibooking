import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import axios from "axios";

// API base URL
const API_BASE_URL = "http://localhost:5000/api";

const AdminDashboard = ({ toggleView }) => {
  const [activeTab, setActiveTab] = useState("vendors");
  const [vendors, setVendors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [isVendorDetailOpen, setIsVendorDetailOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });

  const fetchVendors = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/auth/vendors`);
      console.log("fetchVendors", res.data);
      setVendors(res.data.vendors || []);
    } catch (err) {
      setError("Failed to fetch vendors. Make sure the endpoint exists.");
      console.error("Vendor fetch error:", err);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/categories`);
      setCategories(res.data);
    } catch (err) {
      setError("Failed to fetch categories.");
    }
  };

  const fetchSubcategories = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/subcategories`);
      setSubcategories(res.data);
    } catch (err) {
      setError("Failed to fetch subcategories.");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError("");
      try {
        if (activeTab === "vendors") {
          await fetchVendors();
        } else if (activeTab === "categories") {
          await fetchCategories();
        } else if (activeTab === "subcategories") {
          await Promise.all([fetchSubcategories(), fetchCategories()]);
        }
      } catch (err) {
        setError("Failed to fetch data.");
      }
      setLoading(false);
    };

    loadData();
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", description: "", category: "" });
    setEditingItem(null);
    setError("");
  };

  const handleAddClick = (type) => {
    resetForm();
    setFormType(type);
    setIsFormOpen(true);
  };

  const handleEditClick = (item, type) => {
    setEditingItem(item);
    setFormType(type);
    setFormData({
      name: item.name,
      description: item.description || "",
      category: item.category?._id || item.category || "",
    });
    setIsFormOpen(true);
  };

  const handleViewVendor = (vendor) => {
    setSelectedVendor(vendor);
    setIsVendorDetailOpen(true);
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`))
      return;
    try {
      const endpoint = type === "category" ? "categories" : "subcategories";
      await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`);

      if (type === "category") {
        setCategories(categories.filter((cat) => cat._id !== id));
        fetchSubcategories();
      } else if (type === "subcategory") {
        setSubcategories(subcategories.filter((sub) => sub._id !== id));
      }
    } catch (err) {
      setError(`Failed to delete ${type}.`);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const endpoint = formType === "category" ? "categories" : "subcategories";
      const url = editingItem
        ? `${API_BASE_URL}/${endpoint}/${editingItem._id}`
        : `${API_BASE_URL}/${endpoint}`;

      const method = editingItem ? "put" : "post";

      const requestData =
        formType === "category"
          ? { name: formData.name, description: formData.description }
          : formData;

      const res = await axios[method](url, requestData);

      if (formType === "category") {
        await fetchCategories();
        await fetchSubcategories();
      } else {
        await fetchSubcategories();
      }

      setIsFormOpen(false);
      resetForm();
    } catch (err) {
      setError(err.response?.data?.message || `Failed to save ${formType}.`);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="text-center text-gray-400 py-10">Loading...</div>;
    }

    if (activeTab === "vendors") {
      return (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Registered Vendors</h2>
          {vendors.length === 0 ? (
            <div className="text-gray-500">No vendors registered yet.</div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {vendors.map((vendor) => (
                    <tr key={vendor._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {vendor.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {vendor.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {vendor.company || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {vendor.contact || "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleViewVendor(vendor)}
                          className="text-indigo-600 hover:text-indigo-900 mr-3"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    } else if (activeTab === "categories") {
      return (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Categories</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAddClick("category")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              <Plus size={18} className="mr-2" /> Add Category
            </motion.button>
          </div>
          {categories.length === 0 ? (
            <div className="text-gray-500 text-center py-10">
              No categories found.
            </div>
          ) : (
            <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
              {categories.map((cat) => (
                <li
                  key={cat._id}
                  className="p-4 flex justify-between items-center"
                >
                  <div className="flex-1">
                    <p className="text-lg font-medium">{cat.name}</p>
                    <p className="text-sm text-gray-500">{cat.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleEditClick(cat, "category")}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(cat._id, "category")}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    } else if (activeTab === "subcategories") {
      return (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Subcategories</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAddClick("subcategory")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              <Plus size={18} className="mr-2" /> Add Subcategory
            </motion.button>
          </div>
          {subcategories.length === 0 ? (
            <div className="text-gray-500 text-center py-10">
              No subcategories found.
            </div>
          ) : (
            <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
              {subcategories.map((sub) => (
                <li
                  key={sub._id}
                  className="p-4 flex justify-between items-center"
                >
                  <div className="flex-1">
                    <p className="text-lg font-medium">{sub.name}</p>
                    <p className="text-sm text-gray-500">
                      Category: {sub.category?.name || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500">{sub.description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => handleEditClick(sub, "subcategory")}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDelete(sub._id, "subcategory")}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    return null;
  };

  const formTitle = editingItem ? `Edit ${formType}` : `Add New ${formType}`;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Manage users, categories, and site data.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={toggleView}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center"
          >
            <Plus size={18} className="mr-2" /> Go to Vendor View
          </motion.button>
        </motion.div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("vendors")}
              className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                activeTab === "vendors"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Manage Vendors
            </button>
            <button
              onClick={() => setActiveTab("categories")}
              className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                activeTab === "categories"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Manage Categories
            </button>
            <button
              onClick={() => setActiveTab("subcategories")}
              className={`py-2 px-4 font-medium text-sm transition-colors duration-200 ${
                activeTab === "subcategories"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Manage Subcategories
            </button>
          </div>
          {renderContent()}
        </div>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">{formTitle}</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    rows="3"
                  ></textarea>
                </div>
                {formType === "subcategory" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    {editingItem ? "Update" : "Add"}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {isVendorDetailOpen && selectedVendor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsVendorDetailOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">Vendor Details</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedVendor.name}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedVendor.email}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedVendor.company || "N/A"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedVendor.contact || "N/A"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedVendor.location || "N/A"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product/Service
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedVendor.product || "N/A"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Registered On
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {new Date(selectedVendor.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setIsVendorDetailOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md border border-gray-300 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
