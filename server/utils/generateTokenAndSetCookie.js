const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userDetails, res) => {
    const token = jwt.sign({ userDetails }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });
    res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: "none",
        secure : true,
    });
    return token;
};

module.exports = generateTokenAndSetCookie;
