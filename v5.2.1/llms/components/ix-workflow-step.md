# ix-workflow-step

> A single step within a workflow step sequence.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- workflow
  - angular:
    - `angular/workflow.css`: [file](../../examples/angular/workflow.css)
    - `angular/workflow.ts`: [file](../../examples/angular/workflow.ts)
  - angular-standalone:
    - `angular-standalone/workflow.css`: [file](../../examples/angular-standalone/workflow.css)
    - `angular-standalone/workflow.ts`: [file](../../examples/angular-standalone/workflow.ts)
  - html:
    - `html/workflow.css`: [file](../../examples/html/workflow.css)
    - `html/workflow.html`: [file](../../examples/html/workflow.html)
  - react:
    - `react/workflow.scoped.css`: [file](../../examples/react/workflow.scoped.css)
    - `react/workflow.tsx`: [file](../../examples/react/workflow.tsx)
  - vue:
    - `vue/workflow.css`: [file](../../examples/vue/workflow.css)
    - `vue/workflow.vue`: [file](../../examples/vue/workflow.vue)
- workflow-vertical
  - angular:
    - `angular/workflow-vertical.ts`: [file](../../examples/angular/workflow-vertical.ts)
  - angular-standalone:
    - `angular-standalone/workflow-vertical.ts`: [file](../../examples/angular-standalone/workflow-vertical.ts)
  - html:
    - `html/workflow-vertical.html`: [file](../../examples/html/workflow-vertical.html)
  - react:
    - `react/workflow-vertical.tsx`: [file](../../examples/react/workflow-vertical.tsx)
  - vue:
    - `vue/workflow-vertical.vue`: [file](../../examples/vue/workflow-vertical.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `clickable`; attr: `clickable`; type: `boolean`; default: `false` - Activate navigation click
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Set disabled
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Set selected
- `status`; attr: `status`; type: `"done" | "error" | "open" | "success" | "warning"`; default: `'open'` - Set status
- `vertical`; attr: `vertical`; type: `boolean`; default: `false` - Select orientation

## Events

- None

## Slots

- `` - Workflow step content.
- `custom-icon` - Custom step icon.
