const TimeTable = require('../models/timeTableSchema');
const Course = require('../models/courseSchema');

const addTimeTable = async (req, res) => {
    try {
        const { course, slots, hall } = req.body;

        const existingCourse = await Course.findById(course);
        if (!existingCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }

        const newTimeTable = new TimeTable({
            course,
            slots,
            hall,
        });

        await newTimeTable.save();
        return res.status(201).json({ message: 'Timetable added successfully', timetable: newTimeTable });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

const getTimeTableByCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const timeTable = await TimeTable.find({ course: courseId });
        if (!timeTable || timeTable.length === 0) {
            return res.status(404).json({ message: 'No timetable found for this course' });
        }
        return res.status(200).json(timeTable);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

const getTimeTableByDepartmentAndYear = async (req, res) => {
    try {
        const { departmentId, year } = req.params;
        
        const timeTable = await TimeTable.find({
            'course.department': departmentId,
            'course.year': year,
        });
        if (!timeTable || timeTable.length === 0) {
            return res.status(404).json({ message: 'No timetable found for this department and year' });
        }
        return res.status(200).json(timeTable);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

const updateTimeTable = async (req, res) => {
    try {
        const { timetableId, slots, hall } = req.body;
        const existingTimeTable = await TimeTable.findById(timetableId);
        if (!existingTimeTable) {
            return res.status(404).json({ message: 'Timetable not found' });
        }
        existingTimeTable.slots = slots || existingTimeTable.slots;
        existingTimeTable.hall = hall || existingTimeTable.hall;

        await existingTimeTable.save();
        return res.status(200).json({ message: 'Timetable updated successfully', timetable: existingTimeTable });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

const deleteTimeTable = async (req, res) => {
    try {
        const { timetableId } = req.params;

        const deletedTimeTable = await TimeTable.findByIdAndDelete(timetableId);
        if (!deletedTimeTable) {
            return res.status(404).json({ message: 'Timetable not found' });
        }

        return res.status(200).json({ message: 'Timetable deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    addTimeTable,
    getTimeTableByCourse,
    getTimeTableByDepartmentAndYear,
    updateTimeTable,
    deleteTimeTable,
};
