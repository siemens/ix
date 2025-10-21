<!--
SPDX-FileCopyrightText: 2025 Siemens AG

SPDX-License-Identifier: MIT
-->

# Siemens Industrial Experience (IX) – Architecture & Tooling Overview

This document gives new contributors (humans and AI agents) a concise, high‑leverage overview of how the monorepo is structured, how code flows from source to published packages, and which tooling & conventions are critical for productive changes.

> TL;DR: `packages/core` (Stencil Web Components) is the source of truth. All framework packages are generated façades around those components. Always change Core first, then build.

---

## 1. High-Level Architecture

| Layer                   | Purpose                                       | Tech                                         | Notes                                              |
| ----------------------- | --------------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| Core Components         | Source of truth UI primitives & patterns      | Stencil, TS, SCSS                            | Emits compiled Web Components + type metadata      |
| Framework Wrappers      | Convenience bindings for app frameworks       | Stencil output targets (Angular, React, Vue) | Auto-generated – never hand-edit generated proxies |
| Theming Packages        | External lib theme alignment                  | `@siemens/ix-aggrid`, `@siemens/ix-echarts`  | Provide CSS vars + integration helpers             |
| Test Apps               | Manual preview & doc example source           | `*-test-app` packages                        | Their `preview-examples` become docs snippets      |
| Documentation Generator | Converts examples & JSDoc to docs site assets | `packages/documentation`                     | Output consumed by separate ix-docs repo           |
| Tooling / Infra         | Build orchestration & automation              | Turborepo + pnpm + Changesets                | Ensures incremental builds & release versioning    |

### Data / Build Flow

1. Edit component in `packages/core/src/components/<name>`
2. Run `pnpm build` – Stencil compiles components & emits:
   - Dist web components bundle
   - Type definitions & metadata (`component-doc.json`)
   - Generated framework wrapper source into each wrapper package
3. Framework packages (React / Angular / Vue) bundle their wrapper APIs
4. Test apps & Storybook consume built packages (symlinked via pnpm workspaces)
5. Visual regression & component tests run against the built artifacts
6. Changesets version bump triggers publication & regeneration of wrappers

---

## 2. Monorepo Structure (Essentials)

```
packages/
  core/                # Stencil components (author here)
  react/               # Auto-generated React wrappers (do not manually modify generated proxies)
  angular/             # Angular module-based wrappers
  vue/                 # Experimental Vue wrappers
  aggrid/              # AgGrid theme integration
  echarts/             # ECharts theme integration & helpers
  documentation/       # Doc site asset pipeline (example extraction, JSON metadata)
  *-test-app/          # Preview & example sources (examples -> docs)
  storybook-docs/      # Storybook configuration & stories
```

Supporting roots:

- `component-doc.json` – Generated design tokens & component metadata from core (used for docs & wrappers)
- `.changeset/` – Release intent & pre-release state
- `playwright.config.ts` – Shared test configuration

---

## 3. Toolchain & Key Commands

| Concern                    | Command(s)                                                     | Notes                                     |
| -------------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| Install                    | `pnpm install`                                                 | pnpm workspaces managed via root lockfile |
| Dev Components             | `pnpm storybook`                                               | Hot reload for core components            |
| Preview Framework Examples | `pnpm start --filter react-test-app` (or other test app)       | Navigate to `/preview/*` routes           |
| Build All                  | `pnpm build`                                                   | Required before any tests │               |
| Build Single               | `pnpm build --filter @siemens/ix`                              | Core only (still regenerates wrappers)    |
| Lint                       | `pnpm lint`                                                    | Use before commits                        |
| Unit Tests                 | `pnpm test` or `pnpm test --filter @siemens/ix-react`          | Core uses Jest; React uses Vitest         |
| Visual Regression          | `pnpm build --filter !documentation && pnpm visual-regression` | Needs Docker + playwright image           |
| Generate Changeset         | `pnpm changeset`                                               | Add semver intent (patch/minor/major)     |
| Docs Sync (examples)       | Build + run docs pipeline                                      | Examples auto-generated from test apps    |

### Stencil Build Outputs

- `dist/` bundles
- Custom elements manifest / metadata consumed for wrappers & docs
- Auto-generated proxies: look for comments like `/* auto-generated react proxies */`

---

## 4. Component Authoring Guidelines

| Aspect        | Guideline                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------- |
| Naming        | Kebab-case folder & tag: `ix-button-group`                                                |
| File Set      | `<tag>.tsx`, `<tag>.scss`, tests (`.ct.ts`), README or inline JSDoc                       |
| Props         | Use `@Prop()` with explicit types & default values                                        |
| Events        | Use `@Event()` with semantic names (no DOM-leaking implementation details)                |
| Styling       | SCSS with design tokens / CSS vars; avoid hard-coded colors                               |
| Accessibility | Provide ARIA attributes & keyboard interactions consistent across frameworks              |
| Theming       | Consume CSS custom properties; never duplicate theme tokens                               |
| Tests         | At least one unit spec per new prop/behavior; add visual test if UI change is significant |

---

## 5. Testing Strategy Summary

| Test Type               | Location / Pattern                    | Runner                       | Purpose                        |
| ----------------------- | ------------------------------------- | ---------------------------- | ------------------------------ |
| Component (Interactive) | `*.ct.ts`                             | Playwright Component Testing | Behavioral & interaction flows |
| Visual Regression       | `*.e2e.ts` (visual-testing workspace) | Playwright in Docker         | Cross-theme pixel diffs        |

Execution order recommendation: Build -> Component -> Visual.

---

## 6. Theming System

- Theme SCSS under `packages/core/scss/theme/`
- Exposes design tokens as CSS variables (light/dark)
- Consumers switch themes by applying a theme class to the root element
- External library theme packages (`aggrid`, `echarts`) remap or extend these tokens so third-party widgets visually align

---

## 7. Framework Wrapper Details

| Framework | Mechanism                                                         | Special Notes                                                                     |
| --------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| React     | Generated proxies + hooks for SSR safety                          | Do not edit generated files; add manual helpers in dedicated, non-generated paths |
| Angular   | Output target produces NgModule + (optionally) standalone exports | Keep Angular versions aligned; build triggers regeneration                        |
| Vue       | Experimental wrappers via Vite                                    | API surface may change; treat as unstable                                         |

Regeneration triggers on every `pnpm build` of core.

---

## 8. Release & Versioning

- Managed by Changesets; each changeset selects semver bump per affected package
- Snapshot releases: comment `/release:pr` on a PR (CI creates pre-release dist for testing)
- Version bump pipeline re-runs Stencil to ensure wrappers updated
- Keep changesets small & scoped (group only logically related changes)

---

## 9. Automation & CI (Conceptual)

Although CI config lives outside this summary, typical pipeline steps:

1. Install (pnpm) & cache
2. Lint & type check
3. Build core + wrappers
4. Run unit & component tests
5. (Optional) Visual regression (only on demand / nightly)
6. Changesets publish (on main merges) -> NPM registry

---

## 10. Decision Log Pointers

If introducing architectural changes, accompany PR with:

- Rationale (problem / constraints / considered alternatives)
- Impacted packages & public APIs
- Migration notes (if breaking)
  Add a note in `BREAKING_CHANGES.md` for any breaking API change.

---

## 11. Typical Contribution Flow (Cheat Sheet)

```
git switch -c feat/new-component
pnpm install
pnpm storybook   # develop core component
# edit core component files
pnpm build       # regenerates wrappers
pnpm test --filter @siemens/ix
pnpm test --filter @siemens/ix-react  # if wrapper usage affected
pnpm lint
# (optional) visual regression if UI surfaces changed
pnpm changeset   # declare version bump intent
git commit -am "feat(core): add <component>"
PR -> review -> merge
```

---

## 12. Conventions & Gotchas

- NEVER directly modify generated framework proxy files (look for auto-gen comment)
- Always run a build before tests relying on generated artifacts
- Keep props/events minimal & stable; prefer composition over config explosion
- Document new props/events via JSDoc – docs generator consumes them
- Avoid bundling large third-party libs inside core components; integrate via external packages if needed

---

## 13. For AI / Automation Agents

Provide structured outputs:

- When adding components: ensure folder, TSX, SCSS, spec test scaffold
- Run `pnpm build` after modifications to regenerate wrappers before editing wrapper-adjacent helpers
- Validate no lint errors (`pnpm lint`) before committing
- Summarize changes referencing impacted packages & whether public APIs changed

---

## 14. References

- Stencil Docs: https://stenciljs.com/docs/introduction
- Changesets: https://github.com/changesets/changesets
- Playwright: https://playwright.dev/
- pnpm Workspaces: https://pnpm.io/workspaces

---

If something is unclear or you need deeper technical context, open an issue or start a discussion thread. Happy building! 🎉
