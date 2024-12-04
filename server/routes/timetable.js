const express = require('express');
const { protectRoute } = require('../middleware/protectRoute');
const { 
    addTimeTable, 
    getTimeTableByCourse, 
    getTimeTableByDepartmentAndYear, 
    updateTimeTable, 
    deleteTimeTable 
} = require('../controllers/timetableController');

const router = express.Router();

router.post('/add', protectRoute, addTimeTable);
router.get('/course/:courseId', getTimeTableByCourse);
router.get('/department/:departmentId/year/:year', getTimeTableByDepartmentAndYear);
router.put('/update', protectRoute, updateTimeTable);
router.delete('/delete/:timetableId', protectRoute, deleteTimeTable);

module.exports = router;
