
const db = require("../config/db");


async function createOrder(orderData) {

    const connection = await db.getConnection();

    try {

        await connection.beginTransaction();

        const {
            customer_name,
            email,
            phone,
            address,
            total_amount,
            items
        } = orderData;

        const [orderResult] = await connection.query(
            `INSERT INTO orders
            (customer_name, email, phone, address, total_amount)
            VALUES (?, ?, ?, ?, ?)`,
            [
                customer_name,
                email,
                phone,
                address,
                total_amount
            ]
        );

        const orderId = orderResult.insertId;

        for (const item of items) {

            const subtotal =
                Number(item.price) *
                Number(item.quantity);

            await connection.query(
                `INSERT INTO order_items
                (order_id, product_id, product_name, price, quantity, subtotal)
                VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    orderId,
                    item.id,
                    item.name,
                    item.price,
                    item.quantity,
                    subtotal
                ]
            );

        }

        await connection.commit();

        return orderId;

    } catch (error) {

        await connection.rollback();

        throw error;

    } finally {

        connection.release();

    }

}


async function getOrdersByEmail(email) {

    const [orders] = await db.query(
        `SELECT
            id,
            customer_name,
            email,
            phone,
            address,
            total_amount,
            status,
            created_at
         FROM orders
         WHERE email = ?
         ORDER BY created_at DESC`,
        [email]
    );

    return orders;

}


module.exports = {
    createOrder,
    getOrdersByEmail
};

