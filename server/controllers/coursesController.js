const Course = require('../models/courseSchema');
const Department = require('../models/departmentSchema');
const addCourse = async (req, res) => {
    const user = req.user;
    if (user.role == 'head') {
        let data = req.body;
        const dataDepartment = await Department.findOne({ name: data.department });
        if (!dataDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }
        if (!user.department) {
            return res.status(404).json({ message: 'User not valid' });
        }
        if (!user.department.equals(dataDepartment._id)) {
            return res.status(404).json({ message: 'User cannot add course of different branch.' });
        }
        const course = new Course({
            name: data.name,
            code: data.code,
            description: data.description,
            department: dataDepartment,
            year: data.year,
            credits: data.credits
        });
        try {
            await course.save();
            res.status(201).json({ message: 'Course added successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Error adding course', error: err.message });
        }
    } else {
        return res.status(401).json({ message: 'You are not authorized to add a course' });
    }
}
const updateCourse = async (req, res) => {
    const user = req.user;
    if (user.role == 'head') {
        let data = req.body;
        if (!data) {
            return res.status(400).json({ message: 'No data provided' })
        }
        const course = await Course.findOne({ code: data.code });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const dataDepartment = course.department;
        if (!dataDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }
        if (!user.department) {
            return res.status(404).json({ message: 'User not valid' });
        }
        if (!user.department.equals(dataDepartment._id)) {
            return res.status(404).json({ message: 'User cannot add course of different branch.' });
        }
        if (data.name) {
            course.name = data.name;
        }
        if (data.code) {
            course.code = data.code;
        }
        if (data.department) {
            course.department = department;
        }
        if (data.description) {
            course.description = data.description;
        }
        if (data.year) {
            course.year = data.year;
        }
        if (data.credits) {
            course.credits = data.credits;
        }
        try {
            await course.save();
            res.status(200).json({ message: 'Course updated successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Error updating course', error: err.message });
        }
    }
}
const deleteCourse = async (req, res) => {
    const user = req.user;
    if (user.role == 'head') {
        const course = await Course.findOne({ code: req.body.code });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const dept = course.department;
        const dataDepartment = await Department.findById(dept);
        console.log(dept, dataDepartment);
        if (!dataDepartment) {
            return res.status(404).json({ message: 'Department not found' });
        }
        if (!user.department) {
            return res.status(404).json({ message: 'User not valid' });
        }
        if (!user.department.equals(dataDepartment._id)) {
            return res.status(404).json({ message: 'User cannot add course of different branch.' });
        }
        try {
            await Course.findByIdAndDelete(course);
            res.status(200).json({ message: 'Course deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: 'Error deleting course', error: err.message });
        }
    }

}

const getCourse = async (req, res) => {
    const course = await Course.findOne({ code: req.body.code });
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
}
module.exports = {
    addCourse,
    updateCourse,
    deleteCourse,
    getCourse
}