const express = require("express");
const {
  addSubcategory,
  getSubcategories,
  updateSubcategory,
  deleteSubcategory,
} = require("../controllers/subcategoryController");

const router = express.Router();

router.post("/", addSubcategory);
router.get("/", getSubcategories);
router.put("/:id", updateSubcategory);
router.delete("/:id", deleteSubcategory);

module.exports = router;
