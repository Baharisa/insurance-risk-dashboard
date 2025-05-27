import React, { useState, useEffect } from 'react'; // [React] Import React and hooks; useEffect for data fetching side effect, useState for component state
import { useParams, Link } from 'react-router-dom'; // [React Router] Import useParams hook to access URL parameters and Link for navigation links
import { Client } from '../types/Client'; // [TypeScript] Import shared Client interface to ensure consistent structure across the app

const ClientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // [React Router/TypeScript] useParams retrieves route parameter "id"; typed to string
  const clientId = id ? parseInt(id) : null; // [TypeScript] Convert string ID to number; if invalid, fallback to null

  const [client, setClient] = useState<Client | null>(null); // [React State] Holds the selected client object
  const [loading, setLoading] = useState<boolean>(true); // [React State] Controls loading feedback

  useEffect(() => {
    if (clientId === null) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const dummyClients: Client[] = [
      {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        riskScore: 3,
        riskLevel: 'low',
        registeredAt: '2025-04-01T10:30:00Z'
      },
      {
        id: 2,
        name: 'Bob Smith',
        email: 'bob@example.com',
        riskScore: 8,
        riskLevel: 'high',
        registeredAt: '2025-05-15T12:45:00Z'
      },
      {
        id: 3,
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        riskScore: 5,
        riskLevel: 'medium',
        registeredAt: '2025-05-20T09:15:00Z'
      }
    ];

    const found = dummyClients.find(c => c.id === clientId) || null;
    setClient(found);
    setLoading(false);
  }, [clientId]); // [React Effect] Triggers on mount or when clientId changes

  if (loading) {
    return <div className="p-4">Loading client details...</div>;
  }

  if (!client) {
    return <div className="p-4 text-red-600">Client not found.</div>;
  }

  return (
    <div className="p-4">
      <Link to="/clients" className="text-blue-600 hover:underline block mb-4">
        &larr; Back to Clients
      </Link>

      <h2 className="text-xl font-bold mb-2">Client Details</h2>

      <p className="mb-1"><span className="font-medium">Name:</span> {client.name}</p>
      <p className="mb-1"><span className="font-medium">Email:</span> {client.email}</p>
      <p className="mb-1"><span className="font-medium">Risk Score:</span> {client.riskScore}</p>
      <p className="mb-1"><span className="font-medium">Risk Level:</span> {client.riskLevel}</p>
      <p className="mb-1"><span className="font-medium">Registered At:</span> {new Date(client.registeredAt).toLocaleDateString()}</p>

      {client.riskScore > 7 ? (
        <p className="text-red-600">This client is High Risk</p>
      ) : (
        <p className="text-green-600">Risk level is Low/Moderate</p>
      )}
    </div>
  );
};

export default ClientDetails;
