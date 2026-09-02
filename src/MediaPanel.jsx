export default function MediaPanel() {
  return (
    <section className="media-panel">
      <h2>Product tour</h2>

      {/* Tier 2 violation: video with no caption track (axe: video-caption) */}
      <video className="tour-video" controls src="https://example.com/tour.mp4" />

      {/* Tier 2 violation: iframe with no title (axe: frame-title) */}
      <iframe className="promo-frame" src="https://example.com/promo" />
    </section>
  )
}
