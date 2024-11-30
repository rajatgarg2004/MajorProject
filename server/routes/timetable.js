// routes/timetable.js
const express = require('express');
const {protectRoute} = require("../middleware/protectRoute");
const { getTimetableForTeacher, getTimetableForStudent, modifyTimetable, test } = require("../controllers/timetableController");
const router = express.Router();

// Get timetable for student
router.get('/student', getTimetableForStudent);

// Get timetable for teacher (by subject)
router.get('/teacher/:subject', getTimetableForTeacher);

// Modify timetable (head teacher)
router.put('/modify', modifyTimetable);

router.get('/test', protectRoute, test);

module.exports = router;
