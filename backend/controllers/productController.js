const getProducts = (req, res) => {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 1999,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 2499,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Running Shoes",
            price: 2999,
            category: "Fashion"
        }
    ];

    res.json(products);
};

module.exports = {
    getProducts
};