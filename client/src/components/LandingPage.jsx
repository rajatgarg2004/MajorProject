import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleBranchNavigation = (branch) => {
    navigate(`/branch/${branch.toLowerCase()}`);
  };

  return (
    <div className="bg-slate-300 text-gray-800 w-[100%] h-auto flex flex-col justify-between">
      <header className="bg-slate-600 text-white p-8 text-center">
        <p className="text-lg mb-6">
          Revolutionizing academic scheduling with an automated, user-friendly, and efficient platform.
        </p>
        <button
          className="bg-purple-700 hover:bg-purple-400 text-white px-8 py-4 rounded-lg text-lg"
          onClick={() => navigate('/home/head')}
        >
          Login
        </button>
      </header>
      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-8">
        {/* Timetable Functionality Section */}
        <section className="mb-12 text-left">
          <h2 className="text-3xl font-bold text-green-700 mb-4">About Timetable :</h2>
          <p className="mb-6">
            The Centralized Time Table Management System has been designed to address challenges like scheduling
            conflicts and miscommunication. Below is an overview of its key features:
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Conflict Detection and Resolution:</strong> Automatically identifies and resolves scheduling
              clashes.
            </li>
            <li>
              <strong>Role-Based Access:</strong> Secure access for admins, department heads, and students.
            </li>
            <li>
              <strong>Interactive Timetable:</strong> Weekly schedule visualization with dynamic updates.
            </li>
            <li>
              <strong>Room Management:</strong> Real-time room availability checks for scheduling.
            </li>
            <li>
              <strong>Performance Optimizations:</strong> Fast queries with indexed database fields.
            </li>
          </ul>
        </section>

        {/* Explore Departments Section */}
        <section>
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Explore Departments</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {[
              "Electrical",
              "ComputerScience",
              "Mechanical",
              "Civil",
              "Metallurgy",
              "ElectronicsCommunication",
              "Aerospace",
              "Production",
            ].map((branch) => (
              <button
                key={branch}
                className="bg-green-800 hover:bg-green-700 text-white text-center px-4 py-2 rounded-lg w-40 font-medium"
                onClick={() => handleBranchNavigation(branch)}
              >
                {branch.replace(/([A-Z])/g, " $1").trim()} Engineering
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 text-center mt-12">
        <p className="text-sm">© 2024 Centralized Time Table Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
