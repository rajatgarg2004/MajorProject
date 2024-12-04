const express = require('express');
const router = express.Router();
const {protectRoute} = require("../middleware/protectRoute");
const {getRoomByDepartment, getRoomById} = require('../controllers/roomController');

// Route to get rooms by department
router.get('/', protectRoute, getRoomByDepartment);

// Route to get a room by ID
router.get('/:id', getRoomById);

module.exports = router;
