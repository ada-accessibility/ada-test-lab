import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import SignupForm from './SignupForm.jsx'
import PreferencesPanel from './PreferencesPanel.jsx'
import MediaPanel from './MediaPanel.jsx'
import DataTable from './DataTable.jsx'
import MiscWidgets from './MiscWidgets.jsx'

export default function App() {
  return (
    <div className="page">
      <Header />

      <h1>AccessLab</h1>
      {/* Tier 1 violation: heading level skipped, h1 straight to h3 (axe: heading-order) */}
      <h3 className="section-label">A wide surface for accessibility testing</h3>

      {/* Tier 2 violation: page content not contained by a landmark (axe: region, landmark-one-main) */}
      <Gallery />
      <SignupForm />
      <PreferencesPanel />
      <MediaPanel />
      <DataTable />
      <MiscWidgets />
    </div>
  )
}
