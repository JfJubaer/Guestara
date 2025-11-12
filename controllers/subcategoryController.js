const Subcategory = require("../models/Subcategory");
const Category = require("../models/Category");

// Create Subcategory
exports.createSubcategory = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });
    const subcategory = new Subcategory({
      ...req.body,
      taxApplicable: req.body.taxApplicable ?? category.taxApplicable,
      tax: req.body.tax ?? category.tax,
      category: categoryId,
    });
    await subcategory.save();
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all Subcategories
exports.getSubcategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find().populate("categoryId");
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Subcategories under a Category
exports.getSubcategoriesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subcategories = await Subcategory.find({ categoryId });
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Subcategory by ID or Name
exports.getSubcategory = async (req, res) => {
  try {
    const { id, name } = req.params;
    let subcategory;
    if (id) subcategory = await Subcategory.findById(id);
    else if (name) subcategory = await Subcategory.findOne({ name });
    if (!subcategory)
      return res.status(404).json({ error: "Subcategory not found" });
    res.json(subcategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit Subcategory
exports.editSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const subcategory = await Subcategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!subcategory)
      return res.status(404).json({ error: "Subcategory not found" });
    res.json(subcategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
