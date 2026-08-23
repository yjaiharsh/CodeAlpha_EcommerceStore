const express = require("express");

const router = express.Router();

const adminOnly = require("../middleware/adminMiddleware");

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");


router.get("/", getProducts);

router.get("/:id", getProductById);


router.post(
    "/",
    adminOnly,
    createProduct
);


router.put(
    "/:id",
    adminOnly,
    updateProduct
);


router.delete(
    "/:id",
    adminOnly,
    deleteProduct
);


module.exports = router;