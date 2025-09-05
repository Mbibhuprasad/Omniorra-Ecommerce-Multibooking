const Subcategory = require("../models/Subcatagory");

// Add Subcategory
exports.addSubcategory = async (req, res) => {
  try {
    const { name, description, category } = req.body;

    if (!name || !category) {
      return res
        .status(400)
        .json({ message: "Name and Category are required" });
    }

    const subcategory = new Subcategory({ name, description, category });
    await subcategory.save();

    res
      .status(201)
      .json({ message: "Subcategory created successfully", subcategory });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating subcategory", error: error.message });
  }
};

// Get All Subcategories
exports.getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find()
      .populate("category", "name") // populate category name
      .sort({ createdAt: -1 });

    res.status(200).json(subcategories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching subcategories", error: error.message });
  }
};

// Update Subcategory
exports.updateSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category } = req.body;

    const updated = await Subcategory.findByIdAndUpdate(
      id,
      { name, description, category },
      { new: true, runValidators: true }
    ).populate("category", "name");

    if (!updated) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    res.status(200).json({
      message: "Subcategory updated successfully",
      subcategory: updated,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating subcategory", error: error.message });
  }
};

// Delete Subcategory
exports.deleteSubcategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Subcategory.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Subcategory not found" });
    }

    res.status(200).json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting subcategory", error: error.message });
  }
};
