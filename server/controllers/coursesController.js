// const Course = require('../models/courseSchema');
// const Department = require('../models/departmentSchema');
// const addCourse = async (req, res) => {
//     const user = req.user;
//     console.log(user);

//     if (user.role !== 'head') {
//         return res.status(403).json({ message: 'Access denied: Only department heads can add courses.' }); // 403 Forbidden for unauthorized access
//     }

//     if (!user.department) {
//         return res.status(400).json({ message: 'Invalid user: Department not associated with the user.' }); // 400 Bad Request for missing department
//     }

//     const data = req.body;
//     console.log(data);

//     try {
//         const existingCourse = await Course.findOne({ code: data.code }); // Use `findOne` for a single match
//         if (existingCourse) {
//             console.log('Duplicate course:', existingCourse);
//             return res.status(409).json({ message: 'Conflict: Course with this code already exists.' }); // 409 Conflict for duplicate course
//         }

//         const course = new Course({
//             name: data.name,
//             code: data.code,
//             description: data.description,
//             department: user.department,
//             year: data.year,
//             credits: data.credits,
//         });

//         await course.save();
//         console.log('Course added:', course);
//         return res.status(201).json({ message: 'Course added successfully.', course }); // 201 Created
//     } catch (err) {
//         console.error('Error adding course:', err);
//         return res.status(500).json({ message: 'Internal server error: Unable to add course.', error: err.message }); // 500 Internal Server Error
//     }
// };

// const updateCourse = async (req, res) => {
//     const user = req.user;
//     if (user.role === 'head') {
//         let data = req.body;
//         if (!data) {
//             return res.status(400).json({ message: 'No data provided' });
//         }

//         // Find the course by code
//         const course = await Course.findOne({ code: data.code });
//         if (!course) {
//             return res.status(404).json({ message: 'Course not found' });
//         }

//         const dataDepartment = course.department;
//         if (!dataDepartment) {
//             return res.status(404).json({ message: 'Department not found' });
//         }

//         if (!user.department) {
//             return res.status(404).json({ message: 'User not valid' });
//         }

//         // Check if the user's department matches the course's department
//         if (!user.department.equals(dataDepartment._id)) {
//             return res.status(404).json({ message: 'User cannot add course of different branch.' });
//         }

//         // Update course properties if new data is provided
//         if (data.name) {
//             course.name = data.name;
//         }
//         if (data.code) {
//             course.code = data.code;
//         }
//         if (data.department) {
//             course.department = data.department;
//         }
//         if (data.description) {
//             course.description = data.description;
//         }
//         if (data.year) {
//             course.year = data.year;
//         }
//         if (data.credits) {
//             course.credits = data.credits;
//         }

//         // Save the updated course
//         try {
//             const updatedCourse = await course.save();
//             res.status(200).json(updatedCourse); // Return the updated course data
//         } catch (err) {
//             res.status(500).json({ message: 'Error updating course', error: err.message });
//         }
//     } else {
//         return res.status(403).json({ message: 'Unauthorized' });
//     }
// }
// const deleteCourse = async (req, res) => {
//     const user = req.user;
//     console.log('user:', user);
//     if (user.role == 'head') {
//         const course = await Course.findById(req.body.id);
//         if (!course) {
//             return res.status(404).json({ message: 'Course not found' });
//         }
//         const dept = course.department;
//         const dataDepartment = await Department.findById(dept);
//         if (!dataDepartment) {
//             return res.status(404).json({ message: 'Department not found' });
//         }
//         if (!user.department) {
//             return res.status(404).json({ message: 'User not valid' });
//         }
//         if (!user.department.equals(dataDepartment._id)) {
//             return res.status(404).json({ message: 'User cannot add course of different branch.' });
//         }
//         try {
//             await Course.findByIdAndDelete(course);
//             res.status(200).json({ message: 'Course deleted successfully' });
//         } catch (err) {
//             res.status(500).json({ message: 'Error deleting course', error: err.message });
//         }
//     }

// }

// const getCourse = async (req, res) => {
//     const course = await Course.findOne({ code: req.body.code });
//     if (!course) {
//         return res.status(404).json({ message: 'Course not found' });
//     }
//     res.status(200).json(course);
// }

// const getAllCourses = async (req, res) => {
//     const user = req.user;
//     if (user.role !== 'head') {
//         return res.status(403).json({ message: 'Access denied: Only department heads can view courses' });
//     }

//     try {
//         const courses = await Course.find({ department: user.department });

//         if (!courses || courses.length === 0) {
//             return res.status(404).json({ message: 'No courses found for this department' });
//         }

//         res.status(200).json(courses);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };
// const getCoursesByYear = async (req, res) => {
//     const user = req.user;

//     // Check if the user is a department head
//     if (user.role === 'head') {
//         try {
//             const { year } = req.query; // Get the year from query parameters
//             if (!year) {
//                 return res.status(400).json({ message: 'Year parameter is required' });
//             }

//             // Fetch courses for the department and year
//             const courses = await Course.find({ department: user.department, year });
//             if (!courses || courses.length === 0) {
//                 return res.status(404).json({ message: 'No courses found for this department and year' });
//             }

//             res.status(200).json(courses);
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Server error' });
//         }
//     } else {
//         return res.status(403).json({
//             message: 'Access denied: Only department heads can view courses',
//         });
//     }
// };

// module.exports = {
//     addCourse,
//     updateCourse,
//     deleteCourse,
//     getCourse,
//     getAllCourses,
//     getCoursesByYear
// }
const Course = require('../models/courseSchema');
const Department = require('../models/departmentSchema');

const addCourse = async (req, res) => {
    const user = req.user;

    if (user.role !== 'head') {
        return res.status(403).json({ message: 'Access denied: Only department heads can add courses.' });
    }

    if (!user.department) {
        return res.status(400).json({ message: 'Invalid user: Department not associated with the user.' });
    }

    const data = req.body;

    // Validate elective field
    if (data.elective) {
        const { type, number } = data.elective;
        if (!['Department Elective', 'Open Elective'].includes(type)) {
            return res.status(400).json({ message: 'Invalid elective type. Must be "Department Elective" or "Open Elective".' });
        }
        if (number < 1 || number > 4) {
            return res.status(400).json({ message: 'Elective number must be between 1 and 4.' });
        }
    }

    try {
        const existingCourse = await Course.findOne({ code: data.code });
        if (existingCourse) {
            return res.status(409).json({ message: 'Course with this code already exists.' });
        }

        const course = new Course({
            name: data.name,
            code: data.code,
            description: data.description,
            department: user.department,
            year: data.year,
            credits: data.credits,
            elective: data.elective,  // Save the elective data
        });

        await course.save();
        return res.status(201).json({ message: 'Course added successfully.', course });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error: Unable to add course.', error: err.message });
    }
};


const updateCourse = async (req, res) => {
    const user = req.user;

    if (user.role !== 'head') {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    const data = req.body;

    if (!data.code) {
        return res.status(400).json({ message: 'Course code is required for update.' });
    }

    try {
        const course = await Course.findOne({ code: data.code });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        if (!user.department.equals(course.department)) {
            return res.status(403).json({ message: 'You can only update courses within your department.' });
        }

        if (data.name) course.name = data.name;
        if (data.description) course.description = data.description;
        if (data.year) course.year = data.year;
        if (data.credits) course.credits = data.credits;

        if (data.elective) {
            const { type, number } = data.elective;
            if (type && !['Department Elective', 'Open Elective'].includes(type)) {
                return res.status(400).json({ message: 'Invalid elective type.' });
            }
            if (number && (number < 1 || number > 4)) {
                return res.status(400).json({ message: 'Elective number must be between 1 and 4.' });
            }
            course.elective = data.elective;
        }

        const updatedCourse = await course.save();
        return res.status(200).json(updatedCourse);
    } catch (err) {
        return res.status(500).json({ message: 'Error updating course', error: err.message });
    }
};

const deleteCourse = async (req, res) => {
    const user = req.user;
    console.log('user:', user);
    if (user.role == 'head') {
        const course = await Course.findById(req.body.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const dept = course.department;
        const dataDepartment = await Department.findById(dept);
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
    try {
        const course = await Course.findOne({ code: req.body.code });
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json(course);
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching course', error: err.message });
    }
};

const getAllCourses = async (req, res) => {
    const user = req.user;

    if (user.role !== 'head') {
        return res.status(403).json({ message: 'Access denied: Only department heads can view courses.' });
    }

    try {
        const courses = await Course.find({ department: user.department });
        if (!courses || courses.length === 0) {
            return res.status(404).json({ message: 'No courses found for this department.' });
        }
        return res.status(200).json(courses);
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
};

const getCoursesByYear = async (req, res) => {
    const user = req.user;

    if (user.role !== 'head') {
        return res.status(403).json({ message: 'Access denied: Only department heads can view courses.' });
    }

    try {
        const { year } = req.query;
        if (!year) {
            return res.status(400).json({ message: 'Year parameter is required.' });
        }

        const courses = await Course.find({ department: user.department, year });
        if (!courses || courses.length === 0) {
            return res.status(404).json({ message: 'No courses found for this department and year.' });
        }
        return res.status(200).json(courses);
    } catch (err) {
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = {
    addCourse,
    updateCourse,
    deleteCourse,
    getCourse,
    getAllCourses,
    getCoursesByYear,
};
