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

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query(
            "SELECT * FROM products WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.json(rows[0]);

    } catch (error) {
        console.error("Error fetching product:", error);

        res.status(500).json({
            message: "Failed to fetch product"
        });
    }
};

module.exports = {
    getProducts,
    getProductById
};