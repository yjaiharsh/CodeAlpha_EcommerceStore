function adminOnly(req, res, next) {

    const userRole = req.headers["x-user-role"];

    if (userRole !== "admin") {

        return res.status(403).json({
            message: "Admin access required."
        });

    }

    next();

}

module.exports = adminOnly;