import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

const mockCourses = [
    { id: 1, name: "Electric Vehicles", code: "EV101", description: "Introduction to Electric Vehicles", year: "1", credits: "3" },
    { id: 2, name: "Renewable Energy", code: "RE102", description: "Sustainable energy systems", year: "2", credits: "4" },
    { id: 3, name: "Power Electronics", code: "PE103", description: "Electronic circuits for power control", year: "3", credits: "3" },
];

const ManageCourse = () => {
    const [courses, setCourses] = useState([]);
    const [editingCourse, setEditingCourse] = useState(null);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYears, setSelectedYears] = useState([]);

    const editFormRef = useRef(null);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:5000/home/courses/allCourses', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }

                const data = await response.json();
                setCourses(data);
            } catch (err) {
                setError('Failed to fetch courses');
                console.error(err);
            }
        };
        fetchCourses();
    }, []);

    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    const handleYearChange = (e) => {
        const year = e.target.value;
        setSelectedYears((prev) =>
            e.target.checked ? [...prev, year] : prev.filter((item) => item !== year)
        );
    };

    const filteredCourses = courses.filter(
        (course) =>
            (course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.code.toLowerCase().includes(searchQuery.toLowerCase())) &&
            (selectedYears.length === 0 || selectedYears.includes(course.year))
    );

    const handleUpdate = (course) => setEditingCourse(course);

    const handleRemove = async (courseId) => {
        try {
            const response = await fetch('http://localhost:5000/home/courses/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                credentials: "include",
                body: JSON.stringify({ id: courseId }),
            });

            if (!response.ok) {
                throw new Error('Failed to remove course');
            }

            setCourses(courses.filter((course) => course._id !== courseId));
        } catch (err) {
            setError('Failed to remove course');
            console.error(err);
        }
    };

    const handleSaveChanges = async (updatedCourse) => {
        try {
            const response = await fetch('http://localhost:5000/home/courses/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
                credentials: 'include',
                body: JSON.stringify(updatedCourse),
            });

            if (!response.ok) {
                throw new Error('Failed to save changes');
            }

            const updatedCourseData = await response.json();

            setCourses((prevCourses) =>
                prevCourses.map((course) =>
                    course._id === updatedCourseData._id ? updatedCourseData : course
                )
            );

            setEditingCourse(null);
        } catch (err) {
            setError('Failed to save changes');
            console.error(err);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setEditingCourse((prev) => ({
            ...prev,
            [name]: value,
        }));
        setError(null);
    };

    useEffect(() => {
        if (editingCourse && editFormRef.current) {
            editFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [editingCourse]);

    const handleCloseEditForm = () => {
        setEditingCourse(null); // Close the edit form by setting editingCourse to null
    };

    return (
        <div className="bg-gray-800 pb-6 flex flex-col items-center text-white rounded-lg shadow-lg w-[80%] mx-auto overflow-y-auto">
            <div className="py-4 mb-8 bg-black w-[100%] flex flex-row justify-center">
                <nav className="flex gap-6 text-lg font-medium">
                    <NavLink
                        to="/home/head/courses"
                        className={({ isActive }) =>
                            `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-300 font-semibold' : 'text-white'}`
                        }
                    >
                        Add Courses
                    </NavLink>
                    <NavLink
                        to="/home/head/manage"
                        className={({ isActive }) =>
                            `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-300 font-semibold' : 'text-white'}`
                        }
                    >
                        Manage Courses
                    </NavLink>
                    <NavLink
                        to="/home/head/timetable"
                        className={({ isActive }) =>
                            `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-300 font-semibold' : 'text-white'}`
                        }
                    >
                        Manage TimeTable
                    </NavLink>
                </nav>
            </div>
            <h1 className="py-4 text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl">Manage Courses</h1>

            {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

            <div className="mb-6 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search by name or code"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-3 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>
            <div className="flex space-x-4 mb-6 w-full max-w-md">
                <div className="flex flex-row items-center justify-between w-[100%] space-x-4">
                    {['1', '2', '3', '4'].map((year) => (
                        <div key={year} className="flex items-center">
                            <input
                                type="checkbox"
                                value={year}
                                checked={selectedYears.includes(year)}
                                onChange={handleYearChange}
                                className="mr-2"
                            />
                            <label className="text-gray-300 text-lg">Year {year}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="course-list w-[90%] max-h-[60vh] overflow-y-auto">
                <ul className="course-ul space-y-4">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <li key={course._id} className="course-item p-4 bg-gray-700 rounded-lg shadow-md">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-xl font-semibold">{course.name}</h2>
                                        <p className="text-white">{course.code}</p>
                                        <p className="text-gray-400">{course.description}</p>
                                        <p className="text-white">
                                            Year: {course.year} | Credit: {course.credits} | Elective:
                                            {course.elective ? `${course.elective.type} ${course.elective.number}` : 'N/A'}
                                        </p>
                                    </div>

                                    <div className="flex space-x-2">
                                        <button
                                            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                                            onClick={() => handleUpdate(course)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                                            onClick={() => handleRemove(course._id)} // use _id for removal
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className="text-center text-gray-400">No courses found</li>
                    )}
                </ul>
            </div>

            {/* Edit Form */}
            {editingCourse && (
                <div ref={editFormRef} className="edit-course-form mt-6 w-full p-6 bg-gray-700 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
                        <button
                            onClick={handleCloseEditForm}
                            className="text-white text-2xl"
                        >
                            &times; {/* This is the cross symbol */}
                        </button>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSaveChanges(editingCourse);
                        }}
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="name" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">
                                Course Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={editingCourse.name}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label htmlFor="code" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">
                                Course Code
                            </label>
                            <input
                                type="text"
                                id="code"
                                name="code"
                                value={editingCourse.code}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">
                                Description
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={editingCourse.description}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label htmlFor="year" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">
                                Year
                            </label>
                            <input
                                type="number"
                                id="year"
                                name="year"
                                value={editingCourse.year}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="electiveType"
                                className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300"
                            >
                                Elective Type
                            </label>
                            <input
                                type="text"
                                id="electiveType"
                                name="electiveType"
                                value={editingCourse.elective?.type || ''}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="electiveNumber"
                                className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300"
                            >
                                Elective Number
                            </label>
                            <input
                                type="text"
                                id="electiveNumber"
                                name="electiveNumber"
                                value={editingCourse.elective?.number || ''}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="credits" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">
                                Credits
                            </label>
                            <input
                                type="number"
                                id="credits"
                                name="credits"
                                value={editingCourse.credits}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ManageCourse;
