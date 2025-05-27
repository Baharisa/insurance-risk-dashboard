import React from 'react'; // [React] Import the core React library to use JSX and component definitions
import { NavLink, useNavigate } from 'react-router-dom'; // [React Router] NavLink for styled navigation links; useNavigate to redirect programmatically

const Header: React.FC = () => {
  const navigate = useNavigate(); // [React Router Hook] Provides a function to navigate programmatically (e.g., after logout)

  const handleLogout = () => {
    // [Function] Called when user clicks the "Logout" link
    localStorage.removeItem('loggedIn'); // [Web API] Remove authentication flag from localStorage (logs out user)
    localStorage.removeItem('username'); // [Web API] Optional: remove stored username if set
    navigate('/login'); // [React Router] Redirect to login page after logout
  };

  return (
    <header className="flex justify-between items-center py-4 mb-6 border-b border-gray-300">
      {/* [React/Tailwind] Header layout bar with padding, spacing and border */}

      <h1 className="text-xl font-bold">Insurance Dashboard</h1>
      {/* [React/Tailwind] Application title on the left side */}

      <nav className="space-x-4">
        {/* [React/Tailwind] Navigation section, spaced horizontally */}

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
          }
        >
          Dashboard
        </NavLink>
        {/* [NavLink] Styled link that highlights when current route matches "/dashboard" */}

        <NavLink
          to="/clients"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
          }
        >
          Clients
        </NavLink>
        {/* [NavLink] Highlights when route is "/clients" (client list page) */}

        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
          }
        >
          Upload
        </NavLink>
        {/* [NavLink] Highlights when route is "/upload" (CSV file upload) */}

        <button
          onClick={handleLogout}
          className="text-red-500 hover:underline"
        >
          Logout
        </button>
        {/* [Button] Logout action. Red color to indicate caution, underline on hover for UX */}
      </nav>
    </header>
  );
};

export default Header; // [Export] Makes the Header component available to be imported in App.tsx or any other component
