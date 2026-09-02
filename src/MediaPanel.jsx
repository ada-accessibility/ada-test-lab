export default function MediaPanel() {
  return (
    <section className="media-panel">
      <h2>Product tour</h2>

      {/* Tier 2 violation: iframe with no title (axe: frame-title) */}
      <iframe className="promo-frame" src="https://example.com/promo" />
    </section>
  )
}
