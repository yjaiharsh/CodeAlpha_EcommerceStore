const adminOnly = require("../middleware/adminMiddleware");
const express = require("express");

const {
    placeOrder,
    getMyOrders,
    getAllOrdersController,
    updateOrderStatusController
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", placeOrder);

router.get("/", getMyOrders);

router.get(
    "/all",
    adminOnly,
    getAllOrdersController
);

router.put(
    "/status",
    adminOnly,
    updateOrderStatusController
);

module.exports = router;
