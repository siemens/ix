---
name: create-changeset
description: 'Create IX changesets from a diff, changed file list, or PR summary. Use for selecting affected packages, choosing patch/minor/major, drafting .changeset markdown, adding release-note text, and confirming when a change is internal-only in the Siemens IX monorepo.'
argument-hint: 'Describe the diff, changed files, or PR summary to create or skip a changeset'
user-invocable: true
---

# Create Changeset

## What This Skill Produces

- A decision on whether a changeset is required.
- The affected package list.
- The appropriate release level for each package.
- A ready-to-write `.changeset/*.md` draft, or an explicit internal-only justification.
- For major breaking changes, a reminder to update the matching `BREAKING_CHANGES/v*.md` file with migration details.
- Follow-up checks for `@since`, accessibility coverage, storybook coverage, and linked issues when relevant.

## When to Use

- A change is ready for release-note evaluation.
- You need to author a new `.changeset` entry from code changes.
- A review found that a consumer-visible PR is missing a changeset.
- You want a release-note-ready summary instead of a low-level implementation summary.
- You need to confirm that a change is internal-only and does not need a changeset.

## Inputs To Gather

- Changed files, diff, or a concise PR summary.
- Use the diff against `main` by default unless the user explicitly requests a different comparison base or range.
- Any linked GitHub issue or Jira ticket.
- Whether the change adds, removes, or modifies public API.
- Whether consumer-visible behavior, styling, theming, accessibility, or usage documentation changed.

## Decision Rules

A changeset is required when the change is relevant for end users or downstream consumers. Treat these as changeset-worthy unless the user clearly established that the change is internal-only:

- Public API additions, removals, or behavior changes.
- Component behavior changes.
- Styling or theming changes that affect rendered output.
- Accessibility changes.
- Bug fixes that materially affect users.
- Documentation changes that alter usage expectations.
- Design token or theme changes.
- Generated wrapper changes when the wrapper API or consumer experience changes.

A changeset is usually not required when the change is clearly internal-only and has no consumer impact, for example:

- Refactors with unchanged behavior.
- Test-only changes.
- Tooling, CI, or build-only updates.
- Documentation edits with no usage impact.

If impact is unclear, prefer adding a changeset or state exactly why one is not needed.

## Release Level Guidance

- `patch`: bug fixes, non-breaking styling fixes, accessibility fixes, or behavior corrections that do not add new API surface.
- `minor`: new components, new props, methods, events, additive behavior, or new documented capabilities that are backward compatible.
- `major`: breaking API changes, removals, incompatible behavior changes, or migrations consumers must perform.

When multiple packages are affected, choose the level per package based on consumer impact, not on the number of modified files.

## Package Selection Guidance

- Use `@siemens/ix` for core component, styling, token, theme, and behavior changes in `packages/core`.
- Include `@siemens/ix-react`, `@siemens/ix-angular`, or `@siemens/ix-vue` only when the wrapper package has a consumer-visible API or behavior change.
- Include `@siemens/ix-aggrid` or `@siemens/ix-echarts` only when those package outputs or public usage change.
- Do not include unaffected wrapper packages only because generated files changed.

## Procedure

1. Inspect the diff against `main` by default, unless the user explicitly requests a different comparison target, and summarize the consumer-visible effect in one or two sentences.
2. Classify the change as API, behavior, styling or theming, accessibility, documentation affecting usage, bug fix, or internal-only.
3. Decide whether a downstream consumer would notice the change in release notes.
4. If not, stop and produce an internal-only justification instead of inventing a changeset.
5. If yes or unclear, identify the affected packages.
6. Create a separate changeset file for each affected library part so each package-level change can be reviewed independently before later being combined into a single changelog entry.
7. Choose `patch`, `minor`, or `major` for each affected package.
8. Write the summary in release-note language that describes the outcome for consumers.
9. Include `Fixes #<issue-number>` when the change resolves a linked GitHub issue.
10. For breaking changes, add the migration expectation directly in the summary.
11. If the release level is `major` and the change is breaking, also add or update a detailed migration note in the matching `BREAKING_CHANGES/v*.md` file for the target major version.
12. Ensure the changeset summary mentions the breaking behavior at a high level, while `BREAKING_CHANGES/v*.md` contains the fuller explanation, impact, and migration guidance.
13. Create a unique file under `.changeset/` with a short descriptive or generated unique name ending in `.md`.
14. Use this file shape:

```md
---
'@siemens/ix': patch
---

Adjust the affected component so the consumer-visible behavior is applied consistently.
```

15. If multiple packages are affected, prefer separate changeset files per library part instead of combining them into one frontmatter block, unless the user explicitly asks for a combined file.
16. If a new component, prop, method, or event was added, verify the related JSDoc `@since` tags against the next release implied by the chosen release level.
17. If the change affects component UI or interaction, check for axe coverage and storybook coverage.

## File Authoring Notes

- Any unique `.md` filename under `.changeset/` is acceptable.
- Default to comparing against `main` when deriving the change unless the user requests another diff.
- Prefer concise summaries focused on outcome, not implementation details.
- Create one changeset file per affected library part by default.
- For `major` breaking changes, update both the changeset and the related `BREAKING_CHANGES/v*.md` file.
- Avoid listing packages that changed only indirectly through generation.
- Do not create a changeset for internal-only work just to satisfy process.

## Output Format

When using this skill, return results in this structure:

1. Changeset required: yes or no.
2. Reason: one short explanation tied to consumer impact.
3. Affected packages: explicit package list or `none`.
4. Release level: `patch`, `minor`, `major`, or `none`.
5. Draft changeset: proposed `.changeset` content or `not needed`.
6. Follow-up checks: mention issue linking, `@since`, accessibility coverage, storybook coverage, and `BREAKING_CHANGES/v*.md` updates for major breaking changes when relevant.

## Example Draft

```md
Changeset required: yes
Reason: The fix changes the rendered component behavior that downstream consumers see.
Affected packages: @siemens/ix
Release level: patch
Draft changeset:

---

## '@siemens/ix': patch

Fix the affected component so the updated behavior is applied consistently for consumers.

Follow-up checks: Add `Fixes #1234` if applicable. Verify accessibility and storybook coverage for the updated state.
```

## Example Prompts

- `Create a changeset for this PR. I changed a core component and its accessibility test.`
- `Review these changed files and write the .changeset entry if one is needed.`
- `I fixed a theming bug in packages/core and updated documentation. Create the changeset.`
- `Tell me if this diff is internal-only or create the changeset draft for me.`
