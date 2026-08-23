const adminOnly = require("../middleware/adminMiddleware");
const express = require("express");

const {
    placeOrder,
    getMyOrders,
    getAllOrdersController
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", placeOrder);

router.get("/", getMyOrders);

router.get(
    "/all",
    adminOnly,
    getAllOrdersController
);

module.exports = router;
