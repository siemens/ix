# ix-workflow-steps

> Displays the steps of a workflow and the user's progress through them.

- Web component: `<ix-workflow-steps>`
- React/Vue: `IxWorkflowSteps` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-workflow-steps>` (`IxModule` from `@siemens/ix-angular` or `IxWorkflowSteps` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/workflow/code.md

## Figma IDs

- None

## Properties

- `clickable`; attr: `clickable`; type: `boolean`; default: `false` - Activate navigation click
- `selectedIndex`; attr: `selected-index`; type: `number`; default: `0` - Activate navigation click
- `vertical`; attr: `vertical`; type: `boolean`; default: `false` - Select orientation

## Events

- `stepSelected` - On step selected event

## Methods

- None

## Slots

- `` - Workflow steps.

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- workflow (angular, angular-standalone, html, react, vue)
- workflow-vertical (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
