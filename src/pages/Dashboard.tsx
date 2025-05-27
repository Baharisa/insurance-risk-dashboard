import React, { useState, useEffect } from 'react'; // [React] Core React library + hooks
import { Link, useNavigate } from 'react-router-dom'; // [Router] For navigation between pages

// Retrieve the stored username from localStorage (from successful login)
const username = localStorage.getItem('username'); // [Web API] Used for greeting

// [TypeScript] Interface defining structure of dashboard metrics
interface Metrics {
  totalClients: number;
  highRiskCount: number;
  lastUpdated: string;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null); // [State] For summary stats
  const [loading, setLoading] = useState<boolean>(true); // [State] For showing loading message
  const navigate = useNavigate(); // [Router] For programmatic redirect

  useEffect(() => {
    // Simulated fetch (replace with API call in real app)
    const fetchData = () => {
      const dummyMetrics: Metrics = {
        totalClients: 3,
        highRiskCount: 1,
        lastUpdated: new Date().toLocaleString(),
      };
      setMetrics(dummyMetrics); // Update with dummy data
      setLoading(false);        // Turn off loading state
    };

    fetchData(); // Call the simulated fetch
  }, []); // Empty array: only runs once on mount

  // Logout handler (clears login session and redirects)
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    navigate('/login'); // Redirect to login
  };

  if (loading) {
    return <div className="p-4">Loading dashboard...</div>; // Basic loading message
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Dashboard</h2>

      {username && (
        <h3 className="text-lg mb-4 text-gray-700">
          Welcome, <span className="font-semibold">{username}</span>!
        </h3>
      )}

      {metrics && (
        <div className="mb-4">
          <p className="mb-2">
            Total Clients: <span className="font-medium">{metrics.totalClients}</span>
          </p>
          <p className="mb-2">
            High-Risk Clients: <span className="font-medium">{metrics.highRiskCount}</span>
          </p>
          <p className="text-sm text-gray-600">Last Updated: {metrics.lastUpdated}</p>
        </div>
      )}

      <Link to="/clients" className="text-blue-600 hover:underline block mb-4">
        View Client List
      </Link>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
