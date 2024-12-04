import React, { useEffect } from 'react';
import './App.css';
import { useRecoilValue } from 'recoil';
import AuthPage from './components/AuthPage';
import userAtom from './atoms/userAtom';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Student from './components/Student';
import Teacher from './components/Teacher';
import AddCourses from './components/AddCourses';
import Head from './components/Head';
import ProtectedRoute from './ProtectedRoute';
import ManageCourse from './components/ManageCourse';
import TimetableManagement from './components/TimetableManagement';

function App() {
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("TimeTable")) {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <h1 className='text-4xl p-4'>Timetable Management System</h1>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!user ? <AuthPage /> : <Navigate to="/" />} />
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
        <Route path="*" element={<Navigate to="/home/head" />} />
      </Routes>
    </div>
  );
}

export default App;
