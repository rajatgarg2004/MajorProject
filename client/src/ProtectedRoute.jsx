// components/ProtectedRoute.js
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { fetchUserSelector } from '../atoms/userAtom';

const ProtectedRoute = ({ children, role }) => {
  const user = useRecoilValue(fetchUserSelector);

  if (!user || user.role !== role) {
    return <Navigate to='/auth' />;
  }

  return children;
};

export default ProtectedRoute;
