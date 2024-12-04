const express = require('express');
const {login, responses, signup, deleteUser, validateUser} = require('../controllers/authController');
const {protectRoute} = require("../middleware/protectRoute");

const router = express.Router();

router.post('/google', login);
router.post('/signup', signup);
router.delete('/', protectRoute, deleteUser);
router.get('/validate', protectRoute, validateUser);
module.exports = router;
