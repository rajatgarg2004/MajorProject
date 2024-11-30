const express = require('express');
const {login, responses, signup, deleteUser} = require('../controllers/authController');
const {protectRoute} = require("../middleware/protectRoute");

const router = express.Router();

router.post('/google', login);
router.post('/signup', signup);
router.delete('/', protectRoute, deleteUser);
module.exports = router;
