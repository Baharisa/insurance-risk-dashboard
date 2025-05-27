import React from 'react'; // [React] Required to define the component
import { Outlet, Navigate } from 'react-router-dom'; // [Router] <Outlet> renders matched child route

import Sidebar from '../components/Sidebar'; // [Component] Sidebar navigation
import Header from '../components/Header';   // [Optional] Top nav (if needed)

const MainLayout: React.FC = () => {
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true'; // [Web Storage] Check auth

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // [Redirect] If not logged in, bounce to login
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar /> {/* Left navigation bar */}
      <div className="flex-1 bg-gray-50 p-6">
        <Header /> {/* Top nav bar (optional) */}
        <Outlet />  {/* Main content injected by route */}
      </div>
    </div>
  );
};

export default MainLayout;
