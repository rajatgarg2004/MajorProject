// routes/departments.js
const express = require('express');
const {protectRoute} = require("../middleware/protectRoute");
const { getDepartment, addDepartment } = require("../controllers/departmentController");
const router = express.Router();

router.post('/', getDepartment);

router.post('/add', protectRoute, addDepartment);


module.exports = router;
