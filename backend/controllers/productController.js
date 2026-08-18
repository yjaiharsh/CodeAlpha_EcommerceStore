const db = require("../config/db");

const getProducts = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM products");

        res.json(rows);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            message: "Failed to fetch products"
        });
    }
};

module.exports = {
    getProducts
};