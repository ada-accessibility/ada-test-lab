export default function PreferencesPanel() {
  return (
    <section className="preferences">
      <h2>Preferences</h2>

      {/* Tier 2 violation: custom radio missing required aria-checked (axe: aria-required-attr) */}
      <div role="radio" className="theme-option" tabIndex={0}>
        Dark theme
      </div>

      {/* Tier 2 violation: aria-checked isn't a supported attribute on a paragraph's implicit role (axe: aria-allowed-attr) */}
      <p className="status-text" role="status">
        Sync status: up to date
      </p>

      {/* Tier 2 violation: positive tabindex disrupts natural tab order (axe: tabindex) */}
      <div className="priority-note" tabIndex={3}>
        Complete your profile for better recommendations.
      </div>
    </section>
  )
}
