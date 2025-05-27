// src/pages/Login.tsx

import React, { useState } from 'react'; // [React] Core library + useState hook for component state
import { useNavigate } from 'react-router-dom'; // [Router] Hook to programmatically navigate between pages
import { loginUser } from '../services/api'; // [API] Simulated login API function

const Login: React.FC = () => {
  // [State] Track form input and login errors
  const [username, setUsername] = useState<string>(''); // Username input
  const [password, setPassword] = useState<string>(''); // Password input
  const [error, setError] = useState<string | null>(null); // Error message to show

  const navigate = useNavigate(); // [Hook] To redirect user on successful login

  // [Form Submit Handler] Executes on form submission
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form reload behavior

    const success = await loginUser(username, password); // Simulate login API call

    if (success) {
      localStorage.setItem('loggedIn', 'true'); // Flag for route protection
      localStorage.setItem('username', username); // Store user's name for greeting
      setError(null); // Clear any previous errors
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid credentials'); // Show error if login fails
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* [Layout] Full screen height, centered content, light background */}

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        {/* [Form Box] White card container with padding, shadow, and width limit */}

        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        {/* [Heading] Big bold title, centered */}

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        {/* [Error] Conditional red message if login fails */}

        <div className="mb-4">
          <label htmlFor="username" className="block font-medium mb-1">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        {/* [Username Input] Bound to username state, required */}

        <div className="mb-6">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        {/* [Password Input] Bound to password state, required */}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        {/* [Submit Button] Triggers form handler; styled as a primary action */}
      </form>
    </div>
  );
};

export default Login; // [Export] Used in App routing under "/login"
