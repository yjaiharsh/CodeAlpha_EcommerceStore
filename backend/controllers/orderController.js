
const {
    createOrder,
    getOrdersByEmail,
    getAllOrders
} = require("../models/orderModel");


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
                message:
                    "All order details are required."
            });

        }


        const orderId =
            await createOrder({
                customer_name,
                email,
                phone,
                address,
                total_amount,
                items
            });


        res.status(201).json({

            message:
                "Order placed successfully!",

            orderId:
                orderId

        });


    } catch (error) {

        console.error(
            "Order error:",
            error
        );

        res.status(500).json({

            message:
                "Failed to place order."

        });

    }

}


async function getMyOrders(req, res) {

    try {

        const email =
            req.query.email;


        if (!email) {

            return res.status(400).json({

                message:
                    "Email is required."

            });

        }


        const orders =
            await getOrdersByEmail(email);


        res.status(200).json({

            orders:
                orders

        });


    } catch (error) {

        console.error(
            "Get orders error:",
            error
        );

        res.status(500).json({

            message:
                "Failed to fetch orders."

        });

    }

}

async function getAllOrdersController(req, res) {

    try {

        const orders = await getAllOrders();

        res.status(200).json({
            orders: orders
        });

    } catch (error) {

        console.error("Get all orders error:", error);

        res.status(500).json({
            message: "Failed to fetch orders."
        });

    }
}

module.exports = {
    placeOrder,
    getMyOrders,
    getAllOrdersController
};

