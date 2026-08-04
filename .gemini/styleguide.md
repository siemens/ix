# Siemens Industrial Experience (IX) Review Style Guide

Use this style guide when reviewing pull requests for additional checks. These checks are in addition to the standard code review guidelines and are focused on ensuring that changes are properly documented, accessible, and aligned with release management practices.

## Pull Request title and description

## Title

Follow the rule `<type>[optional <scope>]: <description>`

Examples are:

- `fix(core): correct button color in dark theme`
- `feat(core/select): add feature X to component select`

### Commit message with ! to draw attention to breaking change

- `feat!: correct button color in dark theme`
- `feat(core/select)!: add feature X to component select`

### Allowed types without scope

- `chore`
- `docs`
- `refactor`
- `test`

## Description

- Check that the pull request description explains the user-facing impact, motivation, and important implementation details.
- If the description is insufficient for reviewers or future maintainers to understand the effect of the change, request that it be expanded.

## Changesets

- Treat a missing changeset as a review issue when a pull request includes user-facing or consumer-relevant changes.
- Consider a changeset required for public API updates, component behavior changes, styling or theming changes, accessibility changes, and bug fixes that materially affect users.
- If a pull request does not include a changeset, verify whether the author clearly established that the change is internal-only. If not, call it out in the review.
- Mention packages in the changeset only when they are relevant to the change. For example, if a pull request only changes `@siemens/ix`, do not require unrelated packages in the changeset summary.
- If the change is major, ensure that the changeset summary clearly describes the breaking nature of the change and the migration steps consumers need.
- If a GitHub issue is linked to the pull request, ensure the changeset summary includes `Fixes #<issue-number>` when that issue should close on release.

## Accessibility

- For component changes, check that accessibility coverage exists with an axe-based component test. Prefer the existing pattern used in `packages/core/src/components/tabs/test/tabs.ct.ts`.
- Ensure the relevant framework accessibility coverage is still present in `testing/framework-tests/tests/working-with-axe.spec.ts` and `testing/framework-tests/tests/working.spec.ts` when the change affects component behavior that those tests should cover.
- If an accessibility-relevant change lacks appropriate automated coverage, raise it as a review finding.

## Storybook

- Require a story for any new component or significant variation of an existing component, including new user-visible states, themes, or interactions.
- Check that storybook accessibility coverage remains valid for the affected component. If a story or accessibility coverage is missing for a user-visible change, raise it in the review.

## Requirement Linking

- Check that the pull request description or commit message includes a GitHub issue reference or Jira reference matching `IX-<issue-number>` when the work is tied to a tracked requirement.

## Review Priorities

- Focus first on correctness, regressions, accessibility, release impact, and missing validation.
- Prefer review comments that are concrete and actionable.
- When a rule does not apply because the change is internal-only, state that explicitly rather than assuming it.

## Component changes

### Adding new component, new property, new method or new event

- Ensure that each new component, property, method, or event has a JSDocs which contains a `@since` tag with the version number of the release in which it was added. For example, if a new component is added in version 4.2.0, the JSDocs should include `@since 4.2.0`.
- If the current version is `4.2.0` and a changeset exist with a `major` change then the `@since` tag should be `5.0.0` because the change will be released in next major release.
- If the current version is `4.2.0` and a changeset exist with a `minor` change then the `@since` tag should be `4.3.0` because the change will be released in next minor release.
- Suggest the correct version number for the `@since` tag based on the current version and the type of change (major, minor, patch) if it is missing or incorrect.
