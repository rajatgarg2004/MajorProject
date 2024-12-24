import React from 'react';
import { NavLink } from 'react-router-dom';

const Head = () => {
  return (
    <div className="bg-gray-100  p-4">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">Main Dashboard</h1>
        </div>
      </header>

      <nav className="bg-white shadow-md py-2">
        <ul className="container mx-auto flex justify-center gap-6 text-lg font-medium">
          <li className='my-4'>
            <NavLink
              to="/home/head/courses"
              className={({ isActive }) =>
                `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
              }
            >
              Add Courses
            </NavLink>
          </li>
          <li className='my-4'>
            <NavLink
              to="/home/head/manage"
              className={({ isActive }) =>
                `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
              }
            >
              Manage Courses
            </NavLink>
          </li>
          <li className='my-4'>
            <NavLink
              to="/home/head/timetable"
              className={({ isActive }) =>
                `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
              }
            >
              Manage TimeTable
            </NavLink>
          </li>
          <li className='my-4'>
            <NavLink
              to="/home/student"
              className={({ isActive }) =>
                `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
              }
            >
              View Timetable
            </NavLink>
          </li>
          <li className='my-4'>
            <NavLink
              to="/landingPage"
              className={({ isActive }) =>
                `hover:text-blue-500 p-4 m-4 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'}`
              }
            >
              Landing Page
            </NavLink>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Head;
