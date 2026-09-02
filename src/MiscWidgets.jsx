export default function MiscWidgets() {
  return (
    <section className="misc-widgets">
      <h2>Notices</h2>

      {/* Tier 2 violation: focusable element hidden from assistive tech but not from keyboard (axe: aria-hidden-focus) */}
      <div aria-hidden="true" className="hidden-banner">
        <button className="hidden-btn">Dismiss</button>
      </div>

      {/* Tier 2 violation: <li> not contained by a <ul>/<ol>/[role=list] (axe: listitem) */}
      <li className="orphan-item">Loose list item, not inside a list</li>
    </section>
  )
}
