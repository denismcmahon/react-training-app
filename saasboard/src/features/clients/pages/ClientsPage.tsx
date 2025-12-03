import type { Client } from '../../../types/domain';

const mockClients: Client[] = [
  {
    id: 'client_1',
    name: 'Acme Corporation',
    contactName: 'Sarah Connell',
    contactEmail: 'sarah@acme.com',
    companySize: 'medium',
    createdAt: '2025-01-01T12:00:00.000Z',
    updatedAt: '2025-01-15T17:45:00.000Z',
    notes: 'Long-term client - good for ongoing work'
  },
  {
    id: "client_2",
    name: "Brightside Studios",
    contactName: "Alex Byrne",
    contactEmail: "alex@brightside.io",
    companySize: "small",
    createdAt: "2025-01-10T09:20:00.000Z",
    updatedAt: "2025-01-10T09:20:00.000Z",
    notes: "Interested in recurring SaaS consultancy",
  },
];

export function ClientsPage() {
  return (
    <div>
      <h2>Clients</h2>
      <p>Client management will go here.</p>

      <div style={{ marginTop: "1rem" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9rem"
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Contact</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Company Size</th>
            </tr>
          </thead>
          <tbody>
            {mockClients.map((client) => (
              <tr key={client.id}>
                <td style={tdStyle}>{client.name}</td>
                <td style={tdStyle}>{client.contactName ?? "-"}</td>
                <td style={tdStyle}>{client.contactEmail ?? "-"}</td>
                <td style={tdStyle}>{client.companySize ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "0.5rem",
  borderBottom: "1px solid #e5e7eb",
  fontWeight: 600,
};

const tdStyle: React.CSSProperties = {
  padding: "0.5rem",
  borderBottom: "1px solid #f3f4f6",
};