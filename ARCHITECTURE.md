<!--
SPDX-FileCopyrightText: 2025 Siemens AG

SPDX-License-Identifier: MIT
-->

# Siemens Industrial Experience (IX) – Architecture & Tooling Overview

This document gives new contributors (humans and AI agents) a concise, high‑leverage overview of how the monorepo is structured, how code flows from source to published packages, and which tooling & conventions are critical for productive changes.

> TL;DR: `packages/core` (Stencil Web Components) is the source of truth. All framework packages are generated façades around those components. Always change Core first, then build.

---

## 1. High-Level Architecture

| Layer                   | Purpose                                            | Tech                                         | Notes                                              |
| ----------------------- | -------------------------------------------------- | -------------------------------------------- | -------------------------------------------------- |
| Core Components         | Source of truth UI primitives & patterns           | Stencil, TS, SCSS                            | Emits compiled Web Components + component metadata |
| Framework Wrappers      | Convenience bindings for app frameworks            | Stencil output targets (Angular, React, Vue) | Auto-generated – never hand-edit generated proxies |
| Theming Packages        | External lib theme alignment                       | `@siemens/ix-aggrid`, `@siemens/ix-echarts`  | Provide CSS vars + integration helpers             |
| Examples                | Framework-specific preview example source          | Vite + framework workspaces                  | Source for docs snippets and registry examples     |
| Blocks                  | Higher-level copyable UI compositions              | React + Angular standalone workspaces        | Packaged by the registry and consumed by the CLI    |
| Test Apps               | Manual preview, framework, visual, and perf checks | Vite / Angular / Next.js / Ionic / Playwright | Live under `testing/` and depend on built packages  |
| Documentation Generator | Converts examples & JSDoc to docs site assets      | `packages/documentation`                     | Output consumed by separate ix-docs repo           |
| Registry / CLI          | Publishes searchable components, examples, blocks  | `tooling/registry`, `@siemens/ix-cli`        | Registry dist is deployed to GitHub Pages          |
| Tooling / Infra         | Build orchestration & automation                   | Turborepo + pnpm + Changesets                | Ensures incremental builds & release versioning    |

### Data / Build Flow

1. Edit component in `packages/core/src/components/<name>`
2. Run `pnpm build` – Stencil compiles components & emits:
   - Dist web components bundle
   - Type definitions & metadata (`component-doc.json`)
   - Component discovery artifacts (`component-index.json`, `component-search-index.json`)
   - Generated framework wrapper source into each wrapper package
3. Framework packages (React / Angular / Vue) bundle their wrapper APIs
4. Examples, test apps & Storybook consume built packages (symlinked via pnpm workspaces)
5. Documentation and registry tooling consume examples, block definitions, and component metadata
6. Visual regression & component tests run against the built artifacts
7. Changesets version bump triggers publication & regeneration of wrappers

---

## 2. Monorepo Structure (Essentials)

```
packages/
  core/                # Stencil components (author here)
  react/               # Auto-generated React wrappers (do not manually modify generated proxies)
  angular/             # Angular NgModule and standalone wrappers
  vue/                 # Experimental Vue wrappers
  aggrid/              # AgGrid theme integration
  echarts/             # ECharts theme integration & helpers
  documentation/       # Doc site asset pipeline (example extraction, JSON metadata)
  cli/                 # Siemens iX CLI and MCP server for registry-backed code generation
  storybook-docs/      # Storybook configuration & stories
examples/
  *-examples/          # Framework example sources (examples -> docs + registry)
blocks/
  *-blocks/            # Copyable UI block implementations and block manifests
testing/
  *-test-app/          # Preview, framework, Ionic, Next.js, and visual test apps
  framework-tests/     # Shared framework test helpers
  visual-testing/      # Playwright visual regression suite
tooling/
  registry/            # Builds deployable registry JSON, schemas, blocks, examples, and search indexes
  eslint-config-ix/    # Shared lint configuration
  oss-clearing/        # OSS clearing utilities
```

Supporting roots:

- `component-doc.json` – Generated component metadata from core (used for docs, wrappers, registry, and CLI)
- `component-index.json` / `component-search-index.json` – Generated lightweight component catalog and MiniSearch index
- `blocks/*.json` – Registry manifests that map block names to framework-specific source files and dependencies
- `.changeset/` – Release intent & pre-release state
- `playwright.config.ts` – Shared test configuration

---

## 3. Toolchain & Key Commands

| Concern                    | Command(s)                                                     | Notes                                     |
| -------------------------- | -------------------------------------------------------------- | ----------------------------------------- |
| Install                    | `pnpm install`                                                 | pnpm workspaces managed via root lockfile |
| Dev Components             | `pnpm storybook`                                               | Hot reload for core components            |
| Preview Framework Examples | `pnpm start --filter react-examples` (or other examples app)   | Navigate to `/preview/*` routes           |
| Preview Test Apps          | `pnpm start --filter react-test-app` (or other test app)       | Test apps live under `testing/`           |
| Build All                  | `pnpm build`                                                   | Required before any tests                 |
| Build Single               | `pnpm build --filter @siemens/ix`                              | Core only (still regenerates wrappers)    |
| Build Registry             | `pnpm build --filter registry`                                 | Emits deployable registry assets          |
| Run CLI                    | `pnpm --filter @siemens/ix-cli start -- <command>`             | Uses local CLI source during development  |
| Lint                       | `pnpm lint`                                                    | Use before commits                        |
| Unit Tests                 | `pnpm test` or `pnpm test --filter @siemens/ix-react`          | Core uses Jest; React uses Vitest         |
| Visual Regression          | `pnpm build --filter !documentation && pnpm visual-regression` | Needs Docker + playwright image           |
| Generate Changeset         | `pnpm changeset`                                               | Add semver intent (patch/minor/major)     |
| Docs Sync (examples)       | Build + run docs pipeline                                      | Examples sourced from `examples/`         |

### Stencil Build Outputs

- `dist/` bundles
- Custom elements manifest / metadata consumed for wrappers & docs
- `component-index.json` and `component-search-index.json` for registry/CLI component discovery
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
| Metadata      | Add component-level `@documentation` and `@figma-main-component-id` tags when available   |

---

## 5. Testing Strategy Summary

| Test Type               | Location / Pattern                         | Runner                       | Purpose                        |
| ----------------------- | ------------------------------------------ | ---------------------------- | ------------------------------ |
| Component (Interactive) | `packages/core/**/*.ct.ts`                 | Playwright Component Testing | Behavioral & interaction flows |
| Framework Tests         | `testing/*-test-app`, `testing/framework-tests` | Framework-specific runners   | Wrapper and app integration    |
| Visual Regression       | `testing/visual-testing/**/*.e2e.ts`       | Playwright in Docker         | Cross-theme pixel diffs        |

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

## 8. Registry, Blocks & CLI

- `blocks/*.json` are the source of truth for block registry entries; each manifest points to framework-specific source files under `blocks/*-blocks/`.
- `examples/*-examples/src/preview-examples` provide example source that is transformed into registry example entries and docs snippets.
- `tooling/registry` builds a versioned deployable registry containing block manifests, example manifests, schemas, copied source files, component metadata, related-example mappings, and MiniSearch indexes.
- Registry builds are parameterized by `REGISTRY_VERSION`, `REGISTRY_PATH_PREFIX`, and `REGISTRY_LATEST_TAG`; CI deploys the merged registry output to GitHub Pages.
- `packages/cli` consumes the registry to initialize projects, add blocks/examples, search components, and expose MCP tools for code-generation clients.

### CLI responsibilities

- The CLI binary is named `ix` and is implemented in `packages/cli`; during local development run it with `pnpm --filter @siemens/ix-cli start -- <command>`.
- `ix init --target-folder <path>` creates `ix-blocks.json`, which stores the target folder for installed blocks and tracks installed block names with their registry versions.
- `ix add <blockName>` installs a registry block into the configured target folder. It resolves the requested registry tag (`latest` by default), detects React or Angular automatically unless `--framework react|angular` is passed, downloads the matching block variant files, applies optional token replacement via `--tokens`, and updates `ix-blocks.json`.
- `ix add <blockName> --dry-run` prints the installation plan without writing block files or updating configuration.
- The CLI defaults to the public registry at `https://siemens.github.io/ix`, but both `add` and MCP server commands accept `--registry <url>` and `--tag <tag>` for testing versioned, branch, or local registry builds.

### MCP integration

- `ix mcp init --config vscode|cursor|claude` detects the current framework and writes MCP client configuration plus IX-specific generation instructions.
- `ix mcp run-react` and `ix mcp run-angular` start stdio MCP servers backed by the selected registry and framework.
- MCP tools expose registry-backed discovery for components, icons, examples, blocks, Figma mappings, setup guidance, and audit checks.
- Block-specific MCP tools include `search_blocks` and `list_all_blocks`; their output points agents back to `ix add <blockName>` for installing copyable blocks into the host project.
- Component/example MCP tools are backed by generated component metadata, search indexes, and registry example definitions, so generated code should use `get_component_details` and `search_examples` before composing IX UI.

---

## 9. Release & Versioning

- Managed by Changesets; each changeset selects semver bump per affected package
- Snapshot releases: comment `/release:pr` on a PR (CI creates pre-release dist for testing)
- Version bump pipeline re-runs Stencil to ensure wrappers updated
- Keep changesets small & scoped (group only logically related changes)
- Registry deployments are separate from npm publication and are handled by the registry workflow.

---

## 10. Automation & CI (Conceptual)

Although CI config lives outside this summary, typical pipeline steps:

1. Install (pnpm) & cache
2. Lint & type check
3. Build core + wrappers
4. Build docs and registry assets where relevant
5. Run unit, component, framework, and integration tests
6. (Optional) Visual regression (only on demand / nightly)
7. Changesets publish (on main merges) -> NPM registry
8. Registry workflow deploys versioned registry assets -> GitHub Pages

---

## 11. Decision Log Pointers

If introducing architectural changes, accompany PR with:

- Rationale (problem / constraints / considered alternatives)
- Impacted packages & public APIs
- Migration notes (if breaking)
  Add a note in `BREAKING_CHANGES.md` for any breaking API change.

---

## 12. Typical Contribution Flow (Cheat Sheet)

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

## 13. Conventions & Gotchas

- NEVER directly modify generated framework proxy files (look for auto-gen comment)
- Always run a build before tests relying on generated artifacts
- Keep preview examples in `examples/*-examples`; keep executable test apps and visual/perf suites in `testing/`
- Keep reusable block source in `blocks/*-blocks` and update the matching `blocks/*.json` manifest
- Keep props/events minimal & stable; prefer composition over config explosion
- Document new props/events via JSDoc – docs generator consumes them
- Add component documentation/Figma tags when a component should appear in registry-backed discovery
- Avoid bundling large third-party libs inside core components; integrate via external packages if needed

---

## 14. For AI / Automation Agents

Provide structured outputs:

- When adding components: ensure folder, TSX, SCSS, spec test scaffold
- Run `pnpm build` after modifications to regenerate wrappers before editing wrapper-adjacent helpers
- Treat `examples/`, `blocks/`, `testing/`, and `tooling/` as first-class workspaces, not package publishing targets
- When adding blocks or examples, update registry manifests/schemas and build `registry` to validate generated assets
- Validate no lint errors (`pnpm lint`) before committing
- Summarize changes referencing impacted packages & whether public APIs changed

---

## 15. References

- Stencil Docs: https://stenciljs.com/docs/introduction
- Changesets: https://github.com/changesets/changesets
- Playwright: https://playwright.dev/
- pnpm Workspaces: https://pnpm.io/workspaces

---

If something is unclear or you need deeper technical context, open an issue or start a discussion thread. Happy building! 🎉
