
const {
    createUser,
    findUserByEmail
} = require("../models/userModel");

async function registerUser(req, res) {

    try {

        const {
            name,
            email,
            password
        } = req.body;

        if (!name || !email || !password) {

            return res.status(400).json({
                message: "All fields are required"
            });

        }

        const existingUser =
            await findUserByEmail(email);

        if (existingUser) {

            return res.status(409).json({
                message: "Email already registered"
            });

        }

        const userId =
            await createUser(
                name,
                email,
                password
            );

        res.status(201).json({
            message: "User registered successfully",
            userId: userId
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server error"
        });

    }
}

module.exports = {
    registerUser
};

