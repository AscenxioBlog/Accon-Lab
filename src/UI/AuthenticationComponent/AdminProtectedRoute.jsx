import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import API_URL from '../../Config';

function AdminProtectedRoute({ children }) {
    const [isAdmin, setIsAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAdminAuth = async () => {
            try {
                const response = await fetch(`${API_URL}/auth/check`, {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await response.json();
                setIsAdmin(data.loggedIn && data.user?.role === 'Admin');
            } catch (error) {
                setIsAdmin(false);
            } finally {
                setLoading(false);
            }
        };

        checkAdminAuth();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return isAdmin ? children : <Navigate to="/login" replace />;
}

export default AdminProtectedRoute;