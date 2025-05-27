import React from 'react'; // [React] Base library for JSX and components
import { NavLink, useNavigate } from 'react-router-dom'; // [Router] NavLink for styled links, useNavigate to redirect user

const Sidebar: React.FC = () => {
  const navigate = useNavigate(); // [Hook] For redirecting after logout

  const handleLogout = () => {
    localStorage.clear(); // [Web API] Clear stored user session
    navigate('/login');   // [Router] Redirect to login after logout
  };

  return (
    <aside className="w-48 bg-gray-100 p-4 shadow-md rounded">
      {/* Sidebar container with Tailwind styling */}
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
          }
        >
          Clients
        </NavLink>
        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
          }
        >
          Upload
        </NavLink>
        <button
          onClick={handleLogout}
          className="text-red-600 text-left mt-4 hover:underline"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar; // [Export] Makes Sidebar usable in MainLayout
