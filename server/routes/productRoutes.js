const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller"); // ✅ fixed path & CommonJS

const upload = require("../middleware/upload");

const router = express.Router();

// Add Product
router.post("/add", upload.single("image"), addProduct);

// Get all products
router.get("/", getProducts);

// Get single product
router.get("/:id", getProductById);

// Update product
router.put("/:id", upload.single("image"), updateProduct);

// Delete product
router.delete("/:id", deleteProduct);

module.exports = router;
