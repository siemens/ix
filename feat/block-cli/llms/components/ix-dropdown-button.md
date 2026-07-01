# ix-dropdown-button

> Button that opens an attached dropdown menu.

## Documentation

- https://ix.siemens.io//docs/components/dropdown-button/guide.md

## Figma IDs

- 294:1198

## Related examples

Example source links are relative to this Markdown file.

- application-app-switch
  - angular:
    - `angular/application-app-switch.html`: [source](../../examples/angular-examples/src/preview-examples/application-app-switch.html)
    - `angular/application-app-switch.ts`: [source](../../examples/angular-examples/src/preview-examples/application-app-switch.ts)
  - angular-standalone:
    - `angular-standalone/application-app-switch.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-app-switch.html)
    - `angular-standalone/application-app-switch.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-app-switch.ts)
  - html:
    - `html/application-app-switch.html`: [source](../../examples/html-examples/src/preview-examples/application-app-switch.html)
  - react:
    - `react/application-app-switch.tsx`: [source](../../examples/react-examples/src/preview-examples/application-app-switch.tsx)
  - vue:
    - `vue/application-app-switch.vue`: [source](../../examples/vue-examples/src/preview-examples/application-app-switch.vue)
- application-breakpoints
  - angular:
    - `angular/application-breakpoints.html`: [source](../../examples/angular-examples/src/preview-examples/application-breakpoints.html)
    - `angular/application-breakpoints.ts`: [source](../../examples/angular-examples/src/preview-examples/application-breakpoints.ts)
  - angular-standalone:
    - `angular-standalone/application-breakpoints.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-breakpoints.html)
    - `angular-standalone/application-breakpoints.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-breakpoints.ts)
  - html:
    - `html/application-breakpoints.html`: [source](../../examples/html-examples/src/preview-examples/application-breakpoints.html)
  - react:
    - `react/application-breakpoints.tsx`: [source](../../examples/react-examples/src/preview-examples/application-breakpoints.tsx)
  - vue:
    - `vue/application-breakpoints.vue`: [source](../../examples/vue-examples/src/preview-examples/application-breakpoints.vue)
- application-header
  - angular:
    - `angular/application-header.html`: [source](../../examples/angular-examples/src/preview-examples/application-header.html)
    - `angular/application-header.ts`: [source](../../examples/angular-examples/src/preview-examples/application-header.ts)
  - angular-standalone:
    - `angular-standalone/application-header.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-header.html)
    - `angular-standalone/application-header.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-header.ts)
  - html:
    - `html/application-header.html`: [source](../../examples/html-examples/src/preview-examples/application-header.html)
  - react:
    - `react/application-header.tsx`: [source](../../examples/react-examples/src/preview-examples/application-header.tsx)
  - vue:
    - `vue/application-header.vue`: [source](../../examples/vue-examples/src/preview-examples/application-header.vue)
- dropdown-button
  - angular:
    - `angular/dropdown-button.css`: [source](../../examples/angular-examples/src/preview-examples/dropdown-button.css)
    - `angular/dropdown-button.ts`: [source](../../examples/angular-examples/src/preview-examples/dropdown-button.ts)
  - angular-standalone:
    - `angular-standalone/dropdown-button.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown-button.css)
    - `angular-standalone/dropdown-button.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown-button.ts)
  - html:
    - `html/dropdown-button.css`: [source](../../examples/html-examples/src/preview-examples/dropdown-button.css)
    - `html/dropdown-button.html`: [source](../../examples/html-examples/src/preview-examples/dropdown-button.html)
  - react:
    - `react/dropdown-button.scoped.css`: [source](../../examples/react-examples/src/preview-examples/dropdown-button.scoped.css)
    - `react/dropdown-button.tsx`: [source](../../examples/react-examples/src/preview-examples/dropdown-button.tsx)
  - vue:
    - `vue/dropdown-button.css`: [source](../../examples/vue-examples/src/preview-examples/dropdown-button.css)
    - `vue/dropdown-button.vue`: [source](../../examples/vue-examples/src/preview-examples/dropdown-button.vue)
- dropdown-button-icon
  - angular:
    - `angular/dropdown-button-icon.css`: [source](../../examples/angular-examples/src/preview-examples/dropdown-button-icon.css)
    - `angular/dropdown-button-icon.ts`: [source](../../examples/angular-examples/src/preview-examples/dropdown-button-icon.ts)
  - angular-standalone:
    - `angular-standalone/dropdown-button-icon.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown-button-icon.css)
    - `angular-standalone/dropdown-button-icon.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown-button-icon.ts)
  - html:
    - `html/dropdown-button-icon.css`: [source](../../examples/html-examples/src/preview-examples/dropdown-button-icon.css)
    - `html/dropdown-button-icon.html`: [source](../../examples/html-examples/src/preview-examples/dropdown-button-icon.html)
  - react:
    - `react/dropdown-button-icon.scoped.css`: [source](../../examples/react-examples/src/preview-examples/dropdown-button-icon.scoped.css)
    - `react/dropdown-button-icon.tsx`: [source](../../examples/react-examples/src/preview-examples/dropdown-button-icon.tsx)
  - vue:
    - `vue/dropdown-button-icon.css`: [source](../../examples/vue-examples/src/preview-examples/dropdown-button-icon.css)
    - `vue/dropdown-button-icon.vue`: [source](../../examples/vue-examples/src/preview-examples/dropdown-button-icon.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelDropdownButton`; attr: `aria-label-dropdown-button`; type: `string | undefined` - ARIA label for the dropdown button Will be set as aria-label on the nested HTML button element
- `closeBehavior`; attr: `close-behavior`; type: `"both" | "inside" | "outside" | boolean`; default: `'both'` - Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable button
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `focusCheckedItem`; attr: `focus-checked-item`; type: `boolean`; default: `false` - If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
- `icon`; attr: `icon`; type: `string | undefined` - Button icon
- `label`; attr: `label`; type: `null | string | undefined` - Set label
- `placement`; attr: `placement`; type: `"bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined` - Placement of the dropdown
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'primary'` - Button variant

## Events

- `showChange` - Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
- `showChanged` - Fire event after visibility of dropdown has changed

## Slots

- None
