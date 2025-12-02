import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/projects', label: 'Projects' },
  { to: '/clients', label: 'Clients' },
  { to: '/tasks', label: 'Tasks' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-dot" />
        <span className="logo-text">SaaSBoard</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              ['sidebar-link', isActive ? 'sidebar-link-active' : ''].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
