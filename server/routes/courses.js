// routes/courses.js
const express = require('express');
const {protectRoute} = require("../middleware/protectRoute");
const { addCourse, updateCourse, deleteCourse, getCourse, getAllCourses, getCoursesByYear } = require('../controllers/coursesController');
const router = express.Router();

router.post('/add', protectRoute, addCourse);
router.put('/update', protectRoute, updateCourse);
router.delete('/delete',protectRoute, deleteCourse);
router.post('/', getCourse);
router.post('/allCourses', protectRoute, getAllCourses);
router.get('/coursesByYear', protectRoute, getCoursesByYear);

module.exports = router;


