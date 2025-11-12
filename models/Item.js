const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean },
  tax: { type: Number },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" },
});

itemSchema.pre("save", function (next) {
  this.totalAmount = this.baseAmount - this.discount;
  next();
});

module.exports = mongoose.model("Item", itemSchema);
