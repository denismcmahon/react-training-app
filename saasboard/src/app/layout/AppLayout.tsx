import { ReactNode } from 'react';
import { Sidebar } from '../../shared/components/layout/Sidebar';
import { Topbar } from '../../shared/components/layout/Topbar';
import './AppLayout.css';

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-root">
      <Sidebar />
      <div className="app-main">
        <Topbar />
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
}
