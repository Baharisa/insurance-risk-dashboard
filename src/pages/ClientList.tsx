import React, { useState, useEffect } from 'react'; // [React] Core library and hooks
import { Link } from 'react-router-dom'; // [Router] For internal navigation
import { Client } from '../types/Client'; // [TypeScript] Shared client type (reusable interface)

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]); // [State] Holds client records
  const [loading, setLoading] = useState<boolean>(true); // [State] Loading flag

  useEffect(() => {
    // Simulated backend fetch (replace with real API call)
    const dummyClients: Client[] = [
      {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        riskScore: 3,
        riskLevel: 'low',
        registeredAt: '2025-04-01T10:30:00Z',
      },
      {
        id: 2,
        name: 'Bob Smith',
        email: 'bob@example.com',
        riskScore: 8,
        riskLevel: 'high',
        registeredAt: '2025-05-15T12:45:00Z',
      },
      {
        id: 3,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        riskScore: 5,
        riskLevel: 'medium',
        registeredAt: '2025-05-20T09:15:00Z',
      },
    ];

    setTimeout(() => {
      setClients(dummyClients); // Load dummy data
      setLoading(false);        // Hide loading
    }, 500); // Simulate delay
  }, []);

  if (loading) {
    return <div className="p-4">Loading clients...</div>; // Basic loading screen
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Clients</h2>

      {clients.length === 0 ? (
        <p>No clients available.</p>
      ) : (
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Risk Score</th>
              <th className="p-2 text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <tr key={client.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{client.name}</td>
                <td
                  className={
                    client.riskScore > 7
                      ? 'p-2 text-red-600 font-semibold'
                      : 'p-2 text-gray-800'
                  }
                >
                  {client.riskScore}
                </td>
                <td className="p-2 text-center">
                  <Link
                    to={`/clients/${client.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClientList;
