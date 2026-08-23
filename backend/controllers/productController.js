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

const createProduct = async (req, res) => {

    try {

        const {
            name,
            description,
            price,
            category,
            image,
            stock
        } = req.body;


        if (
            !name ||
            price === undefined ||
            !category
        ) {

            return res.status(400).json({
                message:
                    "Name, price and category are required"
            });

        }


        const [result] = await db.query(
            `INSERT INTO products
            (name, description, price, category, image, stock)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                name,
                description || null,
                price,
                category,
                image || null,
                stock || 0
            ]
        );


        res.status(201).json({

            message:
                "Product created successfully",

            productId:
                result.insertId

        });


    } catch (error) {

        console.error(
            "Error creating product:",
            error
        );

        res.status(500).json({

            message:
                "Failed to create product"

        });

    }

};


const updateProduct = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            name,
            description,
            price,
            category,
            image,
            stock
        } = req.body;


        if (
            !name ||
            price === undefined ||
            !category
        ) {

            return res.status(400).json({

                message:
                    "Name, price and category are required"

            });

        }


        const [result] = await db.query(

            `UPDATE products
             SET name = ?,
                 description = ?,
                 price = ?,
                 category = ?,
                 image = ?,
                 stock = ?
             WHERE id = ?`,

            [
                name,
                description || null,
                price,
                category,
                image || null,
                stock || 0,
                id
            ]

        );


        if (result.affectedRows === 0) {

            return res.status(404).json({

                message:
                    "Product not found"

            });

        }


        res.json({

            message:
                "Product updated successfully"

        });


    } catch (error) {

        console.error(
            "Error updating product:",
            error
        );

        res.status(500).json({

            message:
                "Failed to update product"

        });

    }

};


const deleteProduct = async (req, res) => {

    try {

        const { id } = req.params;


        const [result] = await db.query(

            "DELETE FROM products WHERE id = ?",

            [id]

        );


        if (result.affectedRows === 0) {

            return res.status(404).json({

                message:
                    "Product not found"

            });

        }


        res.json({

            message:
                "Product deleted successfully"

        });


    } catch (error) {

        console.error(
            "Error deleting product:",
            error
        );

        res.status(500).json({

            message:
                "Failed to delete product"

        });

    }

};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};