// [React] Import React to define functional component and handle JSX rendering
import React from 'react';

// [React Router] Import Navigate for redirecting unauthenticated users
import { Navigate } from 'react-router-dom';

// [TypeScript Interface] Define the expected props for this component
// `children` represents any component wrapped inside <ProtectedRoute> ... </ProtectedRoute>
interface Props {
  children: React.ReactNode; // This allows wrapping any JSX elements (Dashboard, ClientList, etc.)
}

// [React Functional Component with TypeScript]
// This acts as a route guard to protect pages from being accessed unless authenticated
const ProtectedRoute: React.FC<Props> = ({ children }) => {
  // [Web Storage API] Check if the user is logged in by reading from localStorage
  // Returns true if the key 'loggedIn' is exactly equal to the string 'true'
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  // [Conditional Rendering]
  // If user is authenticated (loggedIn = true), render the children (protected page)
  // If not authenticated, redirect to /login using <Navigate />
  return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />;
};

// [TypeScript] Export this component to use in App.tsx routing logic
export default ProtectedRoute;
