export default function DataTable() {
  return (
    <section className="data-table-section">
      <h2>Recent activity</h2>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            {/* Tier 2 violation: table header with no text content (axe: empty-table-header) */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sep 1</td>
            <td>Signed in</td>
            <td>OK</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
