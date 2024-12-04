import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, requiredRole }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const validateRole = async () => {
      try {
        let storedData = JSON.parse(localStorage.getItem("TimeTable"));

        if (!storedData) {
          setIsAuthorized(false);
          setLoading(false);
          return;
        }

        const token = storedData.token;
        if (!token) {
          setIsAuthorized(false);
          setLoading(false);
          return;
        }

        const response = await fetch('http://localhost:5000/api/auth/validate', {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include"
        });

        if (!response.ok) throw new Error('Unauthorized');

        const data = await response.json();
        storedData.role = data.role;
        localStorage.setItem("TimeTable", JSON.stringify(storedData));

        setUserRole(data.role);

        if (data.role === requiredRole) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error('Authorization failed:', error);
        setIsAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    validateRole();
  }, [requiredRole]);

  if (loading) return <div>Loading...</div>;

  if (isAuthorized) return children;

  if (userRole === 'student') return <Navigate to="/home/student" />;
  if (userRole === 'teacher') return <Navigate to="/home/teacher" />;
  if (userRole === 'head') return <Navigate to="/home/head" />;

  return <Navigate to="/auth" />;
}

export default ProtectedRoute;
