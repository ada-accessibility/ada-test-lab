export default function Header() {
  return (
    <header className="header">
      <span className="logo">AccessLab</span>
      {/* Tier 1 violation: icon-only button, no accessible name (axe: button-name) */}
      <button className="menu-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
        </svg>
      </button>
    </header>
  )
}
