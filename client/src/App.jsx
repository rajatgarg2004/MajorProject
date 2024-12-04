import React, { useEffect } from 'react';
import './App.css';
import { useRecoilValue } from 'recoil';
import AuthPage from './components/AuthPage';
import userAtom from './atoms/userAtom';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Student from './components/Student';
import Teacher from './components/Teacher';
import AddCourses from './components/AddCourses';
import Head from './components/Head';
import ProtectedRoute from './ProtectedRoute';
import ManageCourse from './components/ManageCourse';
import TimetableManagement from './components/TimetableManagement';
import LandingPage from './components/LandingPage';
import DepartmentPage from './components/DepartmentPage';
function App() {
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();
  const location = useLocation(); // Access the current location

  useEffect(() => {
    // Avoid redirecting to /auth if the current route is /landingPage
    if (!localStorage.getItem("TimeTable") && !(location.pathname === "/landingPage" || location.pathname === "/" || location.pathname.startsWith("/branch/"))) {
      navigate('/auth');
    }
    
  }, [navigate, location]);

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <h1 className='text-4xl p-4'>Centralized Timetable Management System</h1>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />} />

        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/branch/:branch" element={<DepartmentPage />} />

        {/* Auth Routes */}
        <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} />

        {/* Protected Routes */}
        <Route path="/home/student" element={
          <ProtectedRoute requiredRole="head">
            <Student />
          </ProtectedRoute>
        } />
        <Route path="/home/teacher" element={
          <ProtectedRoute requiredRole="teacher">
            <Teacher />
          </ProtectedRoute>
        } />
        <Route path="/home/head" element={
          <ProtectedRoute requiredRole="head">
            <Head />
          </ProtectedRoute>
        } />
        <Route path="/home/head/courses" element={
          <ProtectedRoute requiredRole="head">
            <AddCourses />
          </ProtectedRoute>
        } />
        <Route path="/home/head/manage" element={
          <ProtectedRoute requiredRole="head">
            <ManageCourse />
          </ProtectedRoute>
        } />
        <Route path="/home/head/timetable" element={
          <ProtectedRoute requiredRole="head">
            <TimetableManagement />
          </ProtectedRoute>
        } />

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/home/head" />} />
      </Routes>
    </div>
  );
}

export default App;
