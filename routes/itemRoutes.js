const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.post("/", itemController.createItem);
router.get("/", itemController.getItems);
router.get("/category/:categoryId", itemController.getItemsByCategory);
router.get("/subcategory/:subcategoryId", itemController.getItemsBySubcategory);
router.get("/:id", itemController.getItem);
router.get("/name/:name", itemController.getItem);
router.put("/:id", itemController.editItem);
router.get("/search", itemController.searchItemByName);

module.exports = router;
