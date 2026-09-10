# ada-test-lab
Seeded accessibility issues for testing ADA Tool Auto-Fix (companion to `ada-test-app`).

Live crawl target: https://ada-accessibility.github.io/ada-test-lab/ (served from `docs/`, GitHub Pages).

Pages, each seeded with a different spread of WCAG/axe violations:
- `docs/index.html` — home: heading-order skip, missing image alt, icon-only link with no accessible name, low-contrast text
- `docs/components.html` — components: missing `html lang`, icon-only button with no accessible name, placeholder-only input, unlabeled select, iframe without title

Every violation element carries its own unique class, and there's no unused
build scaffold — plain static HTML only, served as-is by GitHub Pages, so
Auto-Fix's source locator can always resolve a violation to exactly one file
and line.
