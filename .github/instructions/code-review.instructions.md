---
applyTo: '**'
excludeAgent: 'cloud-agent'
---

# GitHub Copilot Code Review Rules

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
- Consider changesets required for public API updates, component behavior changes, styling or theming changes, accessibility changes, and bug fixes that materially affect users.
- If a pull request does not include a changeset, verify whether the author clearly established that the change is internal-only. If not, call it out in the review.
- Prioritize findings that would matter to downstream consumers and release notes.
- Also mention packages inside a changeset only if they are relevant to the change. For example, if a PR only changes `@siemens/ix`, it may not be necessary to include the `@siemens/ix-react` package in the changeset summary.
- If the change is a `major` change, ensure that the changeset summary clearly communicates the breaking nature of the change and any necessary migration steps for consumers.
- If a GitHub issue is linked to the PR, include the `Fixes #<issue-number>` syntax in the changeset summary to automatically close the issue when the changeset is released.

## Accessibility

- Ensure that accessibility is tested with an component test using axe like the following:

```tsx
// From: <root>/packages/core/src/components/tabs/test/tabs.ct.ts
regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-tabs>
      <ix-tab-item>Item 1</ix-tab-item>
      <ix-tab-item>Item 2</ix-tab-item>
      <ix-tab-item>Item 3</ix-tab-item>
    </ix-tabs>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
```

- Ensure `<root>/testing/framework-tests/tests/working-with-axe.spec.ts` and `<root>/testing/framework-tests/tests/working.spec.ts` that the component change is covered by axe tests and that the test is passing. If not, add a test or fix the existing test.

## Storybook

- Create a story for any new component or significant variation of an existing component. This includes new states, themes, or interactions that are relevant for users.
- Ensure that all storybook accessibility tests are passing for the component. If not, add or fix tests as needed.

## Requirement linking

- Ensure that GitHub issue or Jira link (pattern `IX-<issue-number>`) is included in the pull request description or commit message.

## Component changes

### Adding new component, new property, new method or new event

- Ensure that each new component, property, method, or event has a JSDocs which contains a `@since` tag with the version number of the release in which it was added. For example, if a new component is added in version 4.2.0, the JSDocs should include `@since 4.2.0`.
- If the current version is `4.2.0` and a changeset exist with a `major` change then the `@since` tag should be `5.0.0` because the change will be released in next major release.
- If the current version is `4.2.0` and a changeset exist with a `minor` change then the `@since` tag should be `4.3.0` because the change will be released in next minor release.
- Suggest the correct version number for the `@since` tag based on the current version and the type of change (major, minor, patch) if it is missing or incorrect.
