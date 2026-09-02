const ITEMS = [
  { name: 'Widget A', image: '/widget-a.svg' },
  { name: 'Widget B', image: '/widget-b.svg' },
  { name: 'Widget C', image: '/widget-c.svg' },
]

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>Component gallery</h2>
      <div className="gallery-grid">
        {ITEMS.map((item) => (
          <div className="gallery-card" key={item.name}>
            {/* Tier 1 violation: image with no alt text (axe: image-alt) */}
            <img src={item.image} alt="Widget A" />
            <p className="gallery-name">{item.name}</p>
            {/* Tier 1 violation: icon-only link, no accessible name (axe: link-name) */}
            <a href="#" className="gallery-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
