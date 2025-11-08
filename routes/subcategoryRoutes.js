const express = require("express");
const router = express.Router();
const subcategoryController = require("../controllers/subcategoryController");

router.post("/", subcategoryController.createSubcategory);
router.get("/", subcategoryController.getSubcategories);
router.get(
  "/category/:categoryId",
  subcategoryController.getSubcategoriesByCategory
);
router.get("/:id", subcategoryController.getSubcategory);
router.get("/name/:name", subcategoryController.getSubcategory);
router.put("/:id", subcategoryController.editSubcategory);

module.exports = router;
