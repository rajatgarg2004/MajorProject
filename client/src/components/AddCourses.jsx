import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function AddCoursePage() {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: '',
    year: '',
    credits: '',
    electiveType: '',
    electiveNumber: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.code || !formData.description || !formData.year || !formData.credits || !formData.electiveType || !formData.electiveNumber) {
      setError('All fields are required!');
      return;
    }

    setError('');
    const formDataToSend = {
      name: formData.name,
      code: formData.code,
      description: formData.description,
      year: formData.year,
      credits: formData.credits,
      elective: {
        type: formData.electiveType,
        number: formData.electiveNumber
      }
    };

    try {
      let response = await fetch('http://localhost:5000/home/courses/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify(formDataToSend),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Course Added:', data);
        setFormData({
          name: '',
          code: '',
          description: '',
          year: '',
          credits: '',
          electiveType: '',
          electiveNumber: '',
        });
      } else {
        setError(data.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error adding course:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className=" bg-gray-800 pb-6 flex flex-col items-center text-white rounded-lg shadow-lg w-[80%] m-5 mx-auto">
      {/* Navigation links */}
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
      <h2 className="py-4 text-center font-bold sm:text-2xl md:text-3xl lg:text-4xl h-[5%]">Add New Course</h2>

      <form onSubmit={handleSubmit} className="w-[70%]">
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        {/* Course Name */}
        <div className="py-4 h-[12%]">
          <label htmlFor="name" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">Course Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Course Code */}
        <div className="py-4 h-[12%]">
          <label htmlFor="code" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">Course Code</label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Course Description */}
        <div className="py-4 h-[15%]">
          <label htmlFor="description" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">Course Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Year */}
        <div className="py-4 h-[12%]">
          <label htmlFor="year" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            max="4"
            min="1"
            value={formData.year}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Credits */}
        <div className="py-4 h-[12%]">
          <label htmlFor="credits" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">Credits</label>
          <input
            type="number"
            id="credits"
            name="credits"
            min='1'
            max='4'
            value={formData.credits}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Elective Type */}
        <div className="py-4 h-[12%]">
          <label htmlFor="electiveType" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">Elective Type</label>
          <select
            id="electiveType"
            name="electiveType"
            value={formData.electiveType}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Elective Type</option>
            <option value="Department Elective">Department Elective</option>
            <option value="Open Elective">Open Elective</option>
          </select>
        </div>

        {/* Elective Number */}
        <div className="py-4 h-[12%]">
          <label htmlFor="electiveNumber" className="block sm:text-xl md:text-xl lg:text-2xl font-medium text-gray-300">Elective Number</label>
          <input
            type="number"
            id="electiveNumber"
            name="electiveNumber"
            min="1"
            max="4"
            value={formData.electiveNumber}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
        >
          Add Course
        </button>
      </form>

    </div>
  );
}

export default AddCoursePage;
