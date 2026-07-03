<!--
SPDX-FileCopyrightText: 2026 Siemens AG

SPDX-License-Identifier: MIT
-->

# AGENTS.md

This guide is for humans and AI agents developing inside the Siemens IX monorepo.

## Agent operating principles

- Act as a senior maintainer: inspect existing patterns before changing code, keep changes scoped, and prefer correctness over speed.
- Change source files, not generated artifacts. If generated output is affected, update the source and run the appropriate build/generation step.
- Preserve unrelated user or maintainer changes in the working tree. Do not revert, reformat, or rewrite files outside the requested scope.
- Use the smallest targeted validation that proves the change, then escalate only when needed.
- Prefer explicit, type-safe fixes over broad fallbacks, silent returns, or catch-all error handling.
- Update tests, documentation, examples, and changesets whenever the user-facing behavior, API, styling, accessibility, or package output changes.

## Source of truth and precedence

Use these resources together (in this order when conflicts appear):

1. `CONTRIBUTING.md`
2. `ARCHITECTURE.md`
3. `.github/copilot-instructions.md`
4. `.github/instructions/*.instructions.md`

## Repository architecture (must-know)

- `packages/core` is the source of truth (Stencil Web Components).
- `packages/react`, `packages/angular`, `packages/vue` are wrapper packages generated from Stencil output targets.
- Do not hand-edit generated proxy files (look for auto-generated comments).
- Theme integrations for third-party libraries live in `packages/aggrid` and `packages/echarts`.

## Environment and package manager

- Use the package manager declared in `package.json`: `pnpm@10.17.0`.
- Use Node.js `22.19.0`; Volta is configured for this version.
- Install dependencies from the repository root with `pnpm install`.
- Do not introduce new package managers, lockfiles, formatters, linters, or test runners.
- Add dependencies only when they are required for the implementation, and keep workspace dependencies as `workspace:*` where applicable.

## Development rules

- Prefer changing `packages/core` first for component behavior, API, styling, accessibility, and docs metadata.
- Keep component structure consistent: `<component>.tsx`, `<component>.scss`, tests in `test/`.
- Use SPDX headers for new source files.
- Use design tokens/CSS custom properties instead of hard-coded theme values.
- Keep accessibility parity across frameworks.
- Reuse existing helpers, utilities, tokens, test fixtures, and component patterns before adding new abstractions.
- Avoid arbitrary waits, global side effects, and behavior changes that are not explicitly required.
- For breaking changes, provide migration guidance and update `BREAKING_CHANGES.md`.

## Package-specific guidance

| Package area | Edit guidance |
| --- | --- |
| `packages/core` | Source of truth for Web Components, styles, accessibility, docs metadata, and generated wrapper input. |
| `packages/react`, `packages/angular`, `packages/vue` | Do not edit generated proxy files. Only edit deliberate hand-written helpers, examples, or package-specific integration code. |
| `packages/aggrid`, `packages/echarts` | Keep integrations aligned with IX design tokens and theme classes. Validate visual/theming impact. |
| `packages/documentation` | Update docs generation logic only when documentation output or example extraction changes. |
| `*-test-app` packages | Use for framework examples, previews, and documentation snippets. Keep examples consumer-realistic. |

## Local workflow

```bash
pnpm install
pnpm storybook
pnpm build
pnpm lint
pnpm test
```

Targeted commands:

- Build single package: `pnpm build --filter @siemens/ix`
- Core component tests (watch): `pnpm --filter @siemens/ix test.ct --watch`
- Run visual regression (after build): `pnpm visual-regression`
- Core unit tests: `pnpm --filter @siemens/ix test.spec`
- Core component tests: `pnpm --filter @siemens/ix test.ct`
- Package lint: `pnpm lint --filter <package-name>`
- Package tests: `pnpm test --filter <package-name>`

## Testing expectations

- Build before tests when compiled artifacts, generated wrappers, styles, or visual/component tests depend on build output.
- `packages/core` is the main place for component tests. Core component tests live at `packages/core/src/components/<component>/test/<component>.ct.ts`.
- Use core component tests for component behavior, interaction, keyboard handling, accessibility, slots, events, and state changes.
- Include accessibility coverage (`makeAxeBuilder`) and a basic hydration/render test in component test files.
- Add or update unit tests for pure logic changes, component tests for interaction/accessibility changes, and visual tests only for meaningful UI or theme changes.
- Prefer Playwright locators, user-visible assertions, and deterministic waits over implementation-detail selectors and timeouts.

## Visual regression testing

- Visual regression tests live in `testing/visual-testing`.
- Visual regression tests run inside a Docker container so screenshots are operating-system agnostic and less affected by local fonts, browsers, or rendering differences.
- Visual regression tests are slow. Keep them focused on visual contracts, not every behavior or edge case.
- For a new feature, prefer one representative screenshot that covers the intended visual state instead of creating a separate screenshot for every feature branch, state, or testcase.
- Use component tests in `packages/core` for exhaustive behavior coverage, and visual regression only to protect layout, theme, density, color, spacing, and screenshot-visible regressions.
- For UI/theming changes, run relevant visual regression tests after `pnpm build --filter !documentation`; Docker must be available.

## Documentation and examples

- Component documentation is maintained in the separate `siemens/ix-docs` repository.
- In this repository, update component JSDoc, metadata inputs, Storybook stories, or test-app examples when public usage changes.
- If a change requires user-facing documentation updates, call out the needed `siemens/ix-docs` follow-up in the PR.
- Keep docs and examples aligned across Web Components, Angular, React, and Vue when the behavior is framework-visible.
- Do not document generated implementation details as public API.
- Ensure examples use supported imports, current component names, and realistic consumer code.

## Changesets and release impact

- Any user-facing change needs a changeset in `.changeset/`.
- This includes API changes, behavior changes, styling/theming updates, accessibility changes, and meaningful bug fixes.
- If a change is internal-only, state that clearly in PR description/review context.
- For breaking changes, update `BREAKING_CHANGES.md` and provide migration notes.
- Choose affected packages based on what consumers install or observe, not only where source files changed.
- Use `patch` for bug fixes and compatible styling/accessibility fixes, `minor` for new backwards-compatible APIs/features, and `major` for breaking API or behavior changes.
- Keep changeset summaries consumer-focused: describe what changed and why it matters, not internal implementation details.

## PR and commit expectations

- PR title format: `<type>[optional <scope>]: <description>` (for example: `fix(core): correct button color`).
- Link requirement context in PR description/commit message (GitHub issue or `IX-<number>`).
- Explain user-facing impact and implementation details clearly.
- Mention validation performed and any intentionally skipped validation with a reason.
- Call out generated files, migration notes, and release impact when relevant.

## Component-test conventions (core)

- Use `regressionTest` from `@utils/test` (not plain Playwright `test`).
- Use Playwright locators (including for Shadow DOM assertions).
- Avoid arbitrary timeouts (`waitForTimeout`).
- Register icons via mount config; do not fetch static SVG files directly in tests.

## Security and contribution hygiene

- Do not report security issues publicly in GitHub issues; follow `SECURITY.md` / `CONTRIBUTING.md` private reporting path.
- Keep changes scoped and package-aware.
- Do not edit unrelated files while implementing a focused change.
- Never commit secrets, credentials, private tokens, local environment files, or machine-specific paths.
- Treat public APIs, accessibility behavior, theming tokens, and generated package output as consumer contracts.
- Do not add telemetry, network calls, or dependency downloads without a clear project-approved reason.

## Quick execution checklist

1. Confirm target package(s) and whether `core` is the correct edit point.
2. Inspect nearby existing patterns, tests, docs, and package scripts.
3. Implement changes in source (not generated output).
4. Update tests, examples, docs, and generated inputs as needed.
5. Run the smallest meaningful build/test/lint commands; run visual regression for relevant UI/theme changes.
6. Add/update a changeset if the change is user-facing.
7. Ensure PR summary includes impact, linked requirement, validation, affected packages, and migration notes if breaking.
