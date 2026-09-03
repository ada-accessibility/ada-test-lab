export default function SignupForm() {
  return (
    <form className="signup-form">
      <h2>Create an account</h2>
      {/* Tier 1 violation: label isn't programmatically associated — no htmlFor/id match (axe: label) */}
      <label>Work email</label>
      <input type="email" className="work-email-input" />
      {/* Tier 2 violation: select with no accessible name (axe: select-name) */}
      <select className="role-select">
        <option value="">Choose a role</option>
        <option value="dev">Developer</option>
        <option value="qa">QA</option>
      </select>
      {/* Tier 2 violation: invalid ARIA attribute value — aria-invalid must be true/false/grammar/spelling, not "yes" (axe: aria-valid-attr-value) */}
      <input type="password" className="password-input" aria-invalid="true" />
      <button type="submit">Sign up</button>
      {/* Tier 1 violation: low-contrast text, light gray on white (axe: color-contrast) */}
      <p className="fine-print">
        By signing up you agree to the terms of service.
      </p>
    </form>
  )
}
