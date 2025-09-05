import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Trash2, Minus } from "lucide-react";
import axios from "axios";

// API base URL
const API_BASE_URL = "http://localhost:5000/api";

// All sub-components are defined here within the same file.

// ProductCard Component
function ProductCard({ product, onClick, onAddToCart }) {
  const [isLiked, setIsLiked] = useState(false);
  const imageUrl = product.image
    ? `http://localhost:5000${product.image}`
    : `https://via.placeholder.com/300/200?text=${encodeURIComponent(
        product.name
      )}`;

  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
                       {" "}
      <div className="relative">
                               {" "}
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={() => onClick(product)}
        />
                               {" "}
        <div className="absolute top-3 right-3 flex space-x-2">
                                       {" "}
          <button
            className={`p-2 rounded-full ${
              isLiked ? "bg-red-500" : "bg-gray-900/80"
            } backdrop-blur-sm`}
            onClick={() => setIsLiked(!isLiked)}
          >
                                               {" "}
            <svg
              className="w-5 h-5"
              fill={isLiked ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
                                                       {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
                                                   {" "}
            </svg>
                                           {" "}
          </button>
                                   {" "}
        </div>
                           {" "}
      </div>
                       {" "}
      <div className="p-4">
                               {" "}
        <h3
          className="text-lg font-semibold text-white mb-1 cursor-pointer"
          onClick={() => onClick(product)}
        >
                              {product.name}               {" "}
        </h3>
                               {" "}
        <p className="text-gray-400 text-sm mb-3">{product.category?.name}</p> 
                             {" "}
        <div className="flex justify-between items-center mb-3">
                                       {" "}
          <span className="text-2xl font-bold text-indigo-400">
                                    ₹{parseFloat(product.price).toFixed(2)}     
                         {" "}
          </span>
                                       {" "}
          <span
            className={`text-sm font-medium ${
              product.stock > 10 ? "text-green-400" : "text-red-400"
            }`}
          >
                                    {product.stock} in stock                   {" "}
          </span>
                                   {" "}
        </div>
                               {" "}
        <div className="flex justify-end">
                                       {" "}
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium"
            onClick={() => onAddToCart(product)}
          >
                                    Add to Cart                   {" "}
          </button>
                                   {" "}
        </div>
                           {" "}
      </div>
                   {" "}
    </motion.div>
  );
}

// ProductGrid Component
function ProductGrid({ products, onProductClick, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                       {" "}
      <AnimatePresence>
                               {" "}
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onClick={onProductClick}
            onAddToCart={onAddToCart}
          />
        ))}
                           {" "}
      </AnimatePresence>
                   {" "}
    </div>
  );
}

// ProductDetails Component
function ProductDetails({ product, onClose, isOpen, onAddToCart }) {
  if (!isOpen || !product) return null;
  const imageUrl = product.image
    ? `http://localhost:5000${product.image}`
    : `https://via.placeholder.com/600x400?text=${encodeURIComponent(
        product.name
      )}`;
      console.log(product)

  return (
    <AnimatePresence>
                       {" "}
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
                               {" "}
        <motion.div
          className="bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
                                       {" "}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-gray-800 rounded-full p-2"
          >
                                               {" "}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
                                                       {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
                                                   {" "}
            </svg>
                                           {" "}
          </button>
                                       {" "}
          <div className="p-6">
                                               {" "}
            <div className="flex flex-col md:flex-row gap-6">
                                                       {" "}
              <div className="md:w-1/2">
                                                               {" "}
                <img
                  src={imageUrl }
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
                                                           {" "}
              </div>
                                                       {" "}
              <div className="md:w-1/2">
                                                               {" "}
                <h2 className="text-3xl font-bold text-white mb-2">
                                                      {product.name}           
                                     {" "}
                </h2>
                                                               {" "}
                <p className="text-indigo-400 text-2xl font-bold mb-4">
                                                      $
                  {parseFloat(product.price).toFixed(2)}                       
                                           {" "}
                </p>
                                                               {" "}
                <p className="text-gray-300 mb-6">{product.description}</p>     
                                                         {" "}
                <div className="mb-6">
                                                                       {" "}
                  <h3 className="text-xl font-semibold text-white mb-3">
                                                            Details             
                                         {" "}
                  </h3>
                                                                       {" "}
                  <div className="grid grid-cols-2 gap-4">
                                                                               {" "}
                    <div>
                                                                               
                              <p className="text-gray-400">Category</p>         
                                                       {" "}
                      <p className="text-white">{product.category?.name}</p>   
                                                                               {" "}
                    </div>
                                                                               {" "}
                    <div>
                                                                               
                              <p className="text-gray-400">Subcategory</p>     
                                                                               
                       {" "}
                      <p className="text-white">{product.subcategory?.name}</p> 
                                                                               
                       {" "}
                    </div>
                                                                           {" "}
                  </div>
                                                                   {" "}
                </div>
                                                               {" "}
                <div className="flex space-x-4">
                                                                       {" "}
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                                                                               {" "}
                    <Plus size={20} className="inline-block mr-2" /> Add to Cart
                                                                           {" "}
                  </button>
                                                                   {" "}
                </div>
                                                           {" "}
              </div>
                                                   {" "}
            </div>
                                           {" "}
          </div>
                                   {" "}
        </motion.div>
                           {" "}
      </motion.div>
                   {" "}
    </AnimatePresence>
  );
}

// CartSidebar Component
function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeFromCart,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <>
                       {" "}
      <AnimatePresence>
                               {" "}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
                           {" "}
      </AnimatePresence>
                       {" "}
      <motion.div
        className="fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-xl z-50 flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "tween", ease: "easeInOut" }}
      >
                               {" "}
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                             {" "}
          <h2 className="text-xl font-bold text-white">Your Cart</h2>           
                           {" "}
          <button onClick={onClose} className="text-gray-400 hover:text-white">
                                               {" "}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
                                                       {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
                                                   {" "}
            </svg>
                                           {" "}
          </button>
                                   {" "}
        </div>
                               {" "}
        <div className="flex-1 overflow-y-auto p-4">
                                       {" "}
          {cartItems.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
                                                       {" "}
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                                                               {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
                                                           {" "}
              </svg>
                                          <p>Your cart is empty</p>             
                       {" "}
            </div>
          ) : (
            <div className="space-y-4">
                                                       {" "}
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center bg-gray-800 rounded-lg p-3"
                >
                                                                       {" "}
                  <img
                    src={
                      item.image
                        ? `${API_BASE_URL}${item.image}`
                        : `https://via.placeholder.com/64x64?text=${encodeURIComponent(
                            item.name
                          )}`
                    }
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                                                                       {" "}
                  <div className="ml-3 flex-1">
                                                                               {" "}
                    <h3 className="text-white font-medium text-sm">
                                                                  {item.name}   
                                                         {" "}
                    </h3>
                                                                               {" "}
                    <p className="text-indigo-400 font-bold">
                                                                  $
                      {parseFloat(item.price).toFixed(2)}                       
                                                           {" "}
                    </p>
                                                                           {" "}
                  </div>
                                                                       {" "}
                  <div className="flex items-center space-x-2">
                                                                               {" "}
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity - 1)
                      }
                      className="text-gray-400 hover:text-white"
                    >
                                                                 {" "}
                      <Minus size={16} />                                       
                                           {" "}
                    </button>
                                                                               {" "}
                    <span className="text-white">{item.quantity}</span>         
                                                                     {" "}
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="text-gray-400 hover:text-white"
                    >
                                                                 {" "}
                      <Plus size={16} />                                       
                                           {" "}
                    </button>
                                                                           {" "}
                  </div>
                                                                       {" "}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-gray-400 hover:text-red-400 ml-2"
                  >
                                                            <Trash2 size={20} />
                                                       {" "}
                  </button>
                                                                   {" "}
                </div>
              ))}
                                                   {" "}
            </div>
          )}
                                   {" "}
        </div>
                               {" "}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-700">
                                               {" "}
            <div className="flex justify-between mb-4">
                                         {" "}
              <span className="text-gray-400">Total:</span>                     
                                 {" "}
              <span className="text-xl font-bold text-white">
                                                ${total.toFixed(2)}             {" "}
                             {" "}
              </span>
                                                   {" "}
            </div>
                                               {" "}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold">
                                          Checkout                       {" "}
            </button>
                                           {" "}
          </div>
        )}
                           {" "}
      </motion.div>
                   {" "}
    </>
  );
}

// SearchAndFilter Component
function SearchAndFilter({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/categories`);
      setCategories(res.data.map((cat) => cat.name));
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    onFilter(category);
  };

  return (
    <div className="bg-gray-800 p-4 sticky top-0 z-10 shadow-md">
                       {" "}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center">
                               {" "}
        <div className="relative flex-1 max-w-2xl w-full">
                                       {" "}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
                                       {" "}
          <svg
            className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
                                               {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
                                           {" "}
          </svg>
                                   {" "}
        </div>
                               {" "}
        <div className="flex gap-2 flex-wrap justify-center">
                                       {" "}
          <button
            key="all"
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              categoryFilter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
                                    All                   {" "}
          </button>
                                       {" "}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                categoryFilter.toLowerCase() === category.toLowerCase()
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
                                          {category}                       {" "}
            </button>
          ))}
                                   {" "}
        </div>
                           {" "}
      </div>
                   {" "}
    </div>
  );
}

// Main ProductDashboard Component
export default function ProductDashboard({ toggleView }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to track the user's role

  const [isVendor, setIsVendor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for vendor status on component mount
    const checkVendorStatus = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.role === "vendor") {
        setIsVendor(true);
      } else {
        setIsVendor(false);
      }
    };

    checkVendorStatus();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE_URL}/products`);
        setProducts(res.data);
        setFilteredProducts(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (term) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.category.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.category.name.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item._id !== productId)
    );
  };

  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
                       {" "}
      <header className="bg-gray-800 shadow-lg">
                               {" "}
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                                       {" "}
          <h1 className="text-3xl font-bold text-indigo-400">ProductHub</h1>   
                                   {" "}
          <div className="flex items-center space-x-4">
                                               {" "}
            {isVendor && (
              <Link to="/productform">
                               {" "}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700"
                >
                                    <Plus size={18} />                         
                        <span>Manage Products</span>                           
                   {" "}
                </motion.button>
                             {" "}
              </Link>
            )}
                                               {" "}
            <button
              className="relative p-2 text-gray-300 hover:text-white  "
              onClick={() => setIsCartOpen(true)}
            >
                                          <ShoppingCart size={26} />           
                             {" "}
              {cartItemCount > 0 && (
                <span className="absolute top-1 left-6 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                                      {cartItemCount}           
                                     {" "}
                </span>
              )}
                                                   {" "}
            </button>
                                           {" "}
          </div>
                                   {" "}
        </div>
                           {" "}
      </header>
                 {" "}
      <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />       
               {" "}
      <main className="max-w-7xl mx-auto">
                               {" "}
        {loading && (
          <div className="text-center py-12 text-gray-400">
                                    Loading products...                   {" "}
          </div>
        )}
                               {" "}
        {error && <div className="text-center py-12 text-red-500">{error}</div>}
                               {" "}
        {!loading && !error && (
          <ProductGrid
            products={filteredProducts}
            onProductClick={handleProductClick}
            onAddToCart={addToCart}
          />
        )}
                           {" "}
      </main>
                       {" "}
      <ProductDetails
        product={selectedProduct}
        onClose={handleCloseDetail}
        isOpen={isDetailOpen}
        onAddToCart={addToCart}
      />
                       {" "}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
                   {" "}
    </div>
  );
}
