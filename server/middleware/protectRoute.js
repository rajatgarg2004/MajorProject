const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protectRoute = async (req, res, next) => {
    try {
        let token = req.cookies.jwt;
        if (!token) {
            console.log("No token found");
            return res.status(401).json({ error: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded token:", decoded.userDetails.email);

        const user = await User.findOne({email : decoded.userDetails.email});
        console.log(user);
        if (!user) {
            console.log("User not found");
            return res.status(401).json({ error: "Unauthorized" });
        }

        req.user = user;
        next();
    } catch (err) {
        console.log("Error in token verification:", err);
        return res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = {
    protectRoute,
}