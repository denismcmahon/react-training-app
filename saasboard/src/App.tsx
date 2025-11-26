// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./app/layout/AppLayout";
import { DashboardPage } from "./features/dashboard/pages/DashboardPage";
import { ProjectsPage } from "./features/projects/pages/ProjectsPage";
import { ClientsPage } from "./features/clients/pages/ClientsPage";
import { TasksPage } from "./features/tasks/pages/TasksPage";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
