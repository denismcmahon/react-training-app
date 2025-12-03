import type { Project } from '../../../types/domain';

const mockProjects: Project[] = [
  {
    id: 'proj_1',
    name: 'Website Redesign',
    clientId: 'client_1',
    status: 'active',
    budget: 12000,
    startDate: '2025-01-10T00:00:00.000Z',
    endDate: '2025-03-01T00:00:00.000Z',
    createdAt: '2025-01-05T10:00:00.000Z',
    updatedAt: '2025-01-20T15:30:00.000Z',
    isArchived: false
  },
  {
    id: "proj_2",
    name: "Mobile App MVP",
    clientId: "client_2",
    status: "planned",
    budget: 30000,
    startDate: "2025-02-01T00:00:00.000Z",
    endDate: "2025-06-01T00:00:00.000Z",
    createdAt: "2025-01-18T11:15:00.000Z",
    updatedAt: "2025-01-18T11:15:00.000Z",
    isArchived: false,
  }
]

export function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      <p>List of all projects will go here.</p>

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
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Budget</th>
              <th style={thStyle}>Start</th>
              <th style={thStyle}>End</th>
            </tr>
          </thead>
          <tbody>
            {mockProjects.map((project) => (
              <tr key={project.id}>
                <td style={tdStyle}>{project.name}</td>
                <td style={tdStyle}>{project.status}</td>
                <td style={tdStyle}>
                  {project.budget != null ? `€${project.budget.toLocaleString()}` : "-"}
                </td>
                <td style={tdStyle}>
                  {project.startDate ? new Date(project.startDate).toLocaleDateString() : "-"}
                </td>
                <td style={tdStyle}>
                  {project.endDate ? new Date(project.endDate).toLocaleDateString() : "-"}
                </td>
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
  fontWeight: 600
};

const tdStyle: React.CSSProperties = {
  padding: "0.5rem",
  borderBottom: "1px solid #f3f4f6"
};
