const express = require("express");

const {
    placeOrder,
    getMyOrders
} = require("../controllers/orderController");

const router = express.Router();


router.post(
    "/",
    placeOrder
);


router.get(
    "/",
    getMyOrders
);


module.exports = router;
