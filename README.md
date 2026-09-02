# ADA Test Lab

A broader accessibility test surface for the ADA Accessibility Intelligence tool — wider axe
rule coverage than `ada-test-site` (tables, media, ARIA widgets, focus/tabindex issues), not just
a storefront demo.

## Known violations (by design)

Tier below reflects `RULES_WITH_FALLBACK` in `backend/services/auto_fix_service.py`:
Tier 1 = deterministic fallback, auto-merges free. Tier 2 = Gemini drafts a patch, opens a PR
for review. Tier 3 = `locate_source()` can't safely pin the violation to one place in the repo,
so no patch is even attempted.

Verified against a real headless-browser axe scan of the deployed site (20 rule ids checked, 20
confirmed as real violations — nothing missing, nothing extra).

| File | Violation (axe rule) | Tier |
|---|---|---|
| `index.html` | `<html>` has no `lang` attribute (`html-has-lang`) | 1 |
| `index.html` | No `<title>` (`document-title`) | 3 |
| `index.html` | Zoom disabled via viewport meta (`meta-viewport`) | 3 |
| `src/Header.jsx` | Icon-only button, no accessible name (`button-name`) | 1 |
| `src/App.jsx` | Skipped heading level, h1 → h3 (`heading-order`) | 1 |
| `src/App.jsx` | Page content not contained by a landmark (`region`, `landmark-one-main`) | 2 |
| `src/Gallery.jsx` | Image with no `alt` text (`image-alt`) | 1 |
| `src/Gallery.jsx` | Icon-only link, no accessible name (`link-name`) | 1 |
| `src/SignupForm.jsx` | Label not programmatically associated (`label`) | 1 |
| `src/SignupForm.jsx` | Select with no accessible name (`select-name`) | 2 |
| `src/SignupForm.jsx` | Invalid ARIA attribute value, `aria-invalid="yes"` (`aria-valid-attr-value`) | 2 |
| `src/SignupForm.jsx` | Low-contrast text, `.fine-print` (`color-contrast`) | 1 |
| `src/PreferencesPanel.jsx` | Custom radio missing `aria-checked` (`aria-required-attr`) | 2 |
| `src/PreferencesPanel.jsx` | `aria-checked` not allowed on a paragraph's role (`aria-allowed-attr`) | 2 |
| `src/PreferencesPanel.jsx` | Positive `tabindex` (`tabindex`) | 2 |
| `src/MediaPanel.jsx` | Iframe with no title (`frame-title`) | 2 |
| `src/DataTable.jsx` | Empty table header cell (`empty-table-header`) | 2 |
| `src/MiscWidgets.jsx` | Focusable element inside `aria-hidden` (`aria-hidden-focus`) | 2 |
| `src/MiscWidgets.jsx` | `<li>` outside a `<ul>`/`<ol>` (`listitem`) | 2 |

Note: no `video-caption` example — like `duplicate-id-aria` in `ada-test-site`, that rule only ever
reports as "incomplete" (needs manual review) in this axe-core version, never a hard violation, so
it's not a fair automatic test case.

## Local dev

```
npm install
npm run dev
```

## Deploy (GitHub Pages)

Automatic via GitHub Actions (`.github/workflows/deploy.yml`) — no manual step needed:

- Push to `main` → deploys to the site root: https://ada-accessibility.github.io/ada-test-lab/
- Push to any `ada/fix/**` branch → deploys a preview at `/preview/<branch>/`.

Preview deployments aren't auto-removed when a branch is deleted — clean up `preview/<branch>/` on
the `gh-pages` branch manually if it accumulates.
