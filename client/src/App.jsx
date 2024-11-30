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
import Error from './components/Error';
function App() {
  const user = useRecoilValue(userAtom);
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);
  return (
    <div className='flex flex-col min-h-screen w-full items-center justify-center'>
      <h1>Timetable Management System</h1>
      <Routes>
        <Route path='/' element={user ? <Navigate to='/home' /> : <Navigate to='/auth' />} />
        <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} />
        <Route path='/home' element={
          user ? (
            user.role === 'student' ? (
              <Student />
            ) : user.role === 'teacher' ? (
              <Teacher />
            ) : user.role === 'head' ? (
              <Head />
            ) : (
              <Error />
            )
          ) : (
            <Navigate to='/auth' />
          )
        } />
        <Route path='/home/courses' element={
          user ? <AddCourses /> : <Navigate to='/auth' />
        } />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
