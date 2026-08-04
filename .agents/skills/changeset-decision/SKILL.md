---
name: changeset-decision
description: 'Decide whether IX changes need a changeset, which packages to include, and draft the changeset summary. Use for pull requests, code reviews, component changes, styling or theming updates, accessibility changes, public API changes, behavior changes, and internal-only change classification in the Siemens IX monorepo.'
argument-hint: 'Describe the changed files or change summary to evaluate changeset requirements and draft the changeset'
user-invocable: true
---

# Changeset Decision

## When to Use

- Determine whether a change in the IX monorepo requires a changeset.
- Review a pull request for missing or incomplete changesets.
- Decide whether a change is user-facing or internal-only.
- Choose which packages belong in the changeset.
- Draft the changeset summary and package entries.
- Check whether linked issues or release details should appear in the changeset summary.

## Decision Criteria

A changeset is required when the change is relevant for end users or downstream consumers. Treat the following as requiring a changeset unless the user explicitly established the change is internal-only:

- Public API changes.
- Component behavior changes.
- Styling or theming changes.
- Accessibility changes.
- Bug fixes that materially affect users.
- Documentation changes that affect usage expectations.
- Design token or theme changes.
- Generated wrapper changes when consumer behavior or API usage changes.

A changeset is usually not required when the change is clearly internal-only and has no consumer impact, for example:

- Refactors with unchanged behavior.
- Test-only updates.
- Tooling or CI changes.
- Internal build configuration changes.
- Documentation edits with no usage impact.

If impact is unclear, prefer adding a changeset or explicitly state why one is not needed.

## Procedure

1. Inspect the changed files and summarize the effective user impact, not just the implementation detail.
2. Classify the change as one of: public API, behavior, styling or theming, accessibility, documentation affecting usage, bug fix, or internal-only.
3. Decide whether downstream consumers would notice the change in release notes.
4. If yes or unclear, require a changeset.
5. If no, state that the change is internal-only and explain why.
6. If a changeset is required, identify the affected packages.
7. Include only relevant packages in the changeset. Do not add wrapper packages unless the wrapper surface or consumer experience is affected.
8. Draft the changeset with the affected package entries and a concise summary focused on consumer impact.
9. If the work is linked to a GitHub issue, include `Fixes #<issue-number>` in the changeset summary.
10. If the change is breaking, make sure the summary clearly explains the break and any migration steps.
11. If the change introduces a new component, property, method, or event, verify that JSDoc includes an `@since` tag aligned with the expected release type.
12. Mention accessibility coverage and storybook coverage when the change affects component behavior, UI states, or user interaction.

## Package Selection Guidance

- Use `@siemens/ix` for core component, styling, theme, token, and behavior changes in `packages/core`.
- Include framework wrappers only when the wrapper package itself exposes a consumer-visible change.
- Include `@siemens/ix-aggrid` or `@siemens/ix-echarts` only when their package behavior, theme output, or public usage changes.
- Avoid adding unaffected packages only because generated files changed.

## Review Output Format

When evaluating a change, report the result in this structure:

1. Changeset required: yes or no.
2. Reason: one short explanation tied to consumer impact.
3. Affected packages: explicit package list or `none`.
4. Draft changeset: either a proposed changeset block or `not needed`.
5. Changeset notes: required summary details such as issue link, breaking-change migration note, or internal-only justification.
6. Follow-up checks: mention `@since`, accessibility coverage, or storybook coverage when relevant.

## Drafting Guidance

- Write the summary in release-note language, describing the consumer-visible outcome.
- Keep the summary specific to the affected packages.
- If the change is internal-only, do not invent a changeset; explain why none is needed.
- If the package list is uncertain, say so and explain which repository surfaces need confirmation.

## Example Draft Output

```md
Changeset required: yes
Reason: The component styling change affects the rendered appearance for consumers.
Affected packages: @siemens/ix
Draft changeset:

---

## '@siemens/ix': patch

Adjust component styling so the updated visual state is applied consistently.

Changeset notes: Add `Fixes #1234` if this work resolves the linked issue.
Follow-up checks: Verify component accessibility coverage and storybook coverage for the new visual state.
```

## Examples

- `Use the changeset-decision skill for this PR. I changed a core component SCSS file and updated a React example.`
- `Determine whether my accessibility fix in tabs needs a changeset and which package to include.`
- `Review these changed files and tell me if this is internal-only or release-note worthy.`
- `Review my diff and draft the changeset I should add for this bug fix.`

## Repo Rules Captured By This Skill

- Missing changesets are review issues for user-facing or consumer-relevant changes.
- If no changeset is added, the review should explicitly confirm the change is internal-only.
- New component APIs should be checked for correct `@since` tags based on the expected release version.
