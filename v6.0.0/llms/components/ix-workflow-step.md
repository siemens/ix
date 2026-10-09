# ix-workflow-step

> A single step within a workflow step sequence.

- Web component: `<ix-workflow-step>`
- React/Vue: `IxWorkflowStep` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-workflow-step>` (`IxModule` from `@siemens/ix-angular` or `IxWorkflowStep` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/workflow/code.md

## Figma IDs

- None

## Properties

- `clickable`; attr: `clickable`; type: `boolean`; default: `false` - Activate navigation click
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Set disabled
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Set selected
- `status`; attr: `status`; type: `"done" | "error" | "open" | "success" | "warning"`; default: `'open'` - Set status
- `vertical`; attr: `vertical`; type: `boolean`; default: `false` - Select orientation

## Events

- None

## Methods

- None

## Slots

- `` - Workflow step content.
- `custom-icon` - Custom step icon.

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
