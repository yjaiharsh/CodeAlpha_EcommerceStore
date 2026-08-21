const { createOrder } = require("../models/orderModel");

async function placeOrder(req, res) {

    try {

        const {
            customer_name,
            email,
            phone,
            address,
            total_amount,
            items
        } = req.body;

        if (
            !customer_name ||
            !email ||
            !phone ||
            !address ||
            !total_amount ||
            !items ||
            items.length === 0
        ) {
            return res.status(400).json({
                message: "All order details are required."
            });
        }

        const orderId = await createOrder({
            customer_name,
            email,
            phone,
            address,
            total_amount,
            items
        });

        res.status(201).json({
            message: "Order placed successfully!",
            orderId: orderId
        });

    } catch (error) {

        console.error("Order error:", error);

        res.status(500).json({
            message: "Failed to place order."
        });

    }
}

module.exports = {
    placeOrder
};