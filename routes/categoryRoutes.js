const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

//route definitions of categories

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategory);
router.get("/name/:name", categoryController.getCategory);
router.put("/:id", categoryController.editCategory);

module.exports = router;
