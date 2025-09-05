const Product = require("../models/product");

// ✅ Add new product
// @route POST /api/products/add
const addProduct = async (req, res) => {
  try {
    const { name, price, description, stock, category, subcategory, imageUrl } =
      req.body;
      console.log(req)

    if (!name || !price || !category) {
      return res
        .status(400)
        .json({ message: "⚠️ Name, price, and category are required" });
    }

    // Handle both file upload and URL
    let image = null;
    if (req.file) {
      // File uploaded via Multer
      image = `/uploads/${req.file.filename}`;
    } else if (imageUrl) {
      // Use the provided URL
      image = imageUrl;
    }

    const product = new Product({
      name,
      price,
      description,
      stock,
      category,
      subcategory,
      image, // Store either the file path or URL
    });

    await product.save();
    res.status(201).json({ message: "✅ Product added successfully", product });
  } catch (err) {
    console.error("❌ Error adding product:", err);
    res
      .status(500)
      .json({ message: "Failed to add product", error: err.message });
  }
};

// Other controller functions remain the same...
// ✅ Get all products
// @route GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category", "name")
      .populate("subcategory", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: err.message });
  }
};

// ✅ Get single product by ID
// @route GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "⚠️ Invalid product ID" });
    }

    const product = await Product.findById(id)
      .populate("category", "name")
      .populate("subcategory", "name");

    if (!product) {
      return res.status(404).json({ message: "❌ Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error("❌ Error fetching product:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch product", error: err.message });
  }
};

// ✅ Update product
// @route PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "⚠️ Invalid product ID" });
    }

    const { name, price, description, stock, category, subcategory, imageUrl } =
      req.body;

    let updateData = {
      name,
      price,
      description,
      stock,
      category,
      subcategory,
      imageUrl,
    };

    // If new file uploaded
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const product = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({ message: "❌ Product not found" });
    }

    res
      .status(200)
      .json({ message: "✅ Product updated successfully", product });
  } catch (err) {
    console.error("❌ Error updating product:", err);
    res
      .status(500)
      .json({ message: "Failed to update product", error: err.message });
  }
};

// ✅ Delete product
// @route DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "⚠️ Invalid product ID" });
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "❌ Product not found" });
    }

    res.status(200).json({ message: "✅ Product deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting product:", err);
    res
      .status(500)
      .json({ message: "Failed to delete product", error: err.message });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
