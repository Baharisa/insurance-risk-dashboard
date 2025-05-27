

import React from 'react'; 
// [React] Imports the React library which enables JSX and component usage.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// [React Router] This enables client-side routing in a single-page app (SPA).
// BrowserRouter (aliased as Router) tracks URL changes using browser history.
// Routes contains all <Route> definitions. Each Route maps a path to a component.

import Login from './pages/Login';
// [Component Import] Login screen/page component.
// File location: src/pages/Login.tsx

import Dashboard from './pages/Dashboard';
// [Component Import] Dashboard page for metrics summary.
// File location: src/pages/Dashboard.tsx

import ClientList from './pages/ClientList';
// [Component Import] Page that lists all clients.
// File location: src/pages/ClientList.tsx

import ClientDetails from './pages/ClientDetails';
// [Component Import] Page that shows details of a selected client.
// File location: src/pages/ClientDetails.tsx

import Upload from './pages/Upload';
// [Component Import] Page that allows file (CSV) upload.
// File location: src/pages/Upload.tsx

import ProtectedRoute from './components/ProtectedRoute';
// [Component Import] A wrapper component that checks if the user is logged in.
// If not logged in → redirects to login page.
// File location: src/components/ProtectedRoute.tsx

import Header from './components/Header';
// [Component Import] A global top navigation header shown on most pages.
// File location: src/components/Header.tsx

const App: React.FC = () => {
  // [React Functional Component] Defines the root App component.
  // FC = "Functional Component" type, from React with built-in typing.

  return (
    <Router>
      {/* [Router Wrapper] Required to use routes and navigation.
          Internally listens to browser URL and renders appropriate pages. */}

      <div className="max-w-4xl mx-auto px-4">
        {/* [Tailwind CSS] Layout container to center the app on wide screens.
            max-w-4xl: limits width to 4xl size (readable on desktops),
            mx-auto: horizontally centers the container,
            px-4: horizontal padding for content spacing */}

        <Header />
        {/* [Shared Component] The header with app title, nav links, and logout.
            Always shown except on login (based on routing/logic).
            Location: src/components/Header.tsx */}

        <Routes>
          {/* [Routing Container] Holds all the route definitions. */}

          <Route path="/login" element={<Login />} />
          {/* [Public Route] Shows Login.tsx when user visits /login.
              Does not require user to be logged in. */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* [Protected Route] Shows Dashboard only if user is authenticated.
              Uses <ProtectedRoute> as a wrapper to check localStorage "loggedIn" flag. */}

          <Route
            path="/clients"
            element={
              <ProtectedRoute>
                <ClientList />
              </ProtectedRoute>
            }
          />
          {/* [Protected Route] Displays list of clients. */}

          <Route
            path="/clients/:id"
            element={
              <ProtectedRoute>
                <ClientDetails />
              </ProtectedRoute>
            }
          />
          {/* [Protected Route] Dynamic route for showing specific client info.
              `:id` means the URL like /clients/1 or /clients/5 will render ClientDetails.tsx. */}

          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          {/* [Protected Route] Upload page for uploading CSV files.
              Only accessible after login. */}

          <Route path="*" element={<Login />} />
          {/* [Catch-all Route] Handles unknown routes like /oops → fallback to login.
              In future, this could be changed to a custom 404 page. */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
// [TypeScript] Exports the App component as the default export.
// Used in `src/index.tsx` to render it inside ReactDOM root.
