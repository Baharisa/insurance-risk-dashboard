export {}; //  Required even if it’s empty

// This file defines a reusable TypeScript interface for Client data

export interface Client {
  id: number;             // Unique ID for routing/detail lookup
  name: string;           // Client full name
  email: string;          // Contact email
  riskScore: number;     // Numerical score representing client risk (0–10)
  riskLevel: 'low' | 'medium' | 'high'; // Risk category (limited to these values)
  registeredAt: string;   // ISO date string (e.g., for sorting)
}
