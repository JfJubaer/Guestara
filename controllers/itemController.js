const Item = require("../models/Item");
const Category = require("../models/Category");
const Subcategory = require("../models/Subcategory");

// Create Item
exports.createItem = async (req, res) => {
  try {
    const { categoryId, subcategoryId } = req.body;
    if (subcategoryId) {
      const subcategory = await Subcategory.findById(subcategoryId);
      if (!subcategory)
        return res.status(404).json({ error: "Subcategory not found" });
    }
    if (categoryId) {
      const category = await Category.findById(categoryId);
      if (!category)
        return res.status(404).json({ error: "Category not found" });
    }
    const item = new Item({
      ...req.body,
      category: categoryId,
      subcategory: subcategoryId,
    });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all Items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find()
      .populate("subcategoryId")
      .populate("categoryId");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Items under a Category
exports.getItemsByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const items = await Item.find({ categoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Items under a Subcategory
exports.getItemsBySubcategory = async (req, res) => {
  try {
    const { subcategoryId } = req.params;
    const items = await Item.find({ subcategoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Item by ID or Name
exports.getItem = async (req, res) => {
  try {
    const { id, name } = req.params;
    let item;
    if (id) item = await Item.findById(id);
    else if (name) item = await Item.findOne({ name });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit Item
exports.editItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Search Item by Name
exports.searchItemByName = async (req, res) => {
  try {
    const { name } = req.query;
    const items = await Item.find({ name: { $regex: name, $options: "i" } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
