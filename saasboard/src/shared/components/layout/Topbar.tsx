import './Topbar.css';

export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1 className="topbar-title">Overview</h1>
      </div>
      <div className="topbar-right">
        <button className="topbar-button">New Project</button>
        <div className="topbar-avatar">D</div>
      </div>
    </header>
  );
}
