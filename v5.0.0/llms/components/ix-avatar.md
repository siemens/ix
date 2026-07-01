# ix-avatar

> Displays a user's profile image, initials, or a placeholder icon.

## Documentation

- https://ix.siemens.io//docs/components/avatar/guide.md

## Figma IDs

- 308:1151

## Related examples

Example source links are relative to this Markdown file.

- application-advanced
  - angular:
    - `angular/application-advanced.html`: [source](../../examples/angular-examples/src/preview-examples/application-advanced.html)
    - `angular/application-advanced.ts`: [source](../../examples/angular-examples/src/preview-examples/application-advanced.ts)
  - angular-standalone:
    - `angular-standalone/application-advanced.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-advanced.html)
    - `angular-standalone/application-advanced.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-advanced.ts)
  - html:
    - `html/application-advanced.html`: [source](../../examples/html-examples/src/preview-examples/application-advanced.html)
  - react:
    - `react/application-advanced.tsx`: [source](../../examples/react-examples/src/preview-examples/application-advanced.tsx)
  - vue:
    - `vue/application-advanced.vue`: [source](../../examples/vue-examples/src/preview-examples/application-advanced.vue)
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
- avatar
  - angular:
    - `angular/avatar.ts`: [source](../../examples/angular-examples/src/preview-examples/avatar.ts)
  - angular-standalone:
    - `angular-standalone/avatar.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/avatar.ts)
  - html:
    - `html/avatar.html`: [source](../../examples/html-examples/src/preview-examples/avatar.html)
  - react:
    - `react/avatar.tsx`: [source](../../examples/react-examples/src/preview-examples/avatar.tsx)
  - vue:
    - `vue/avatar.vue`: [source](../../examples/vue-examples/src/preview-examples/avatar.vue)
- avatar-image
  - angular:
    - `angular/avatar-image.ts`: [source](../../examples/angular-examples/src/preview-examples/avatar-image.ts)
  - angular-standalone:
    - `angular-standalone/avatar-image.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/avatar-image.ts)
  - html:
    - `html/avatar-image.html`: [source](../../examples/html-examples/src/preview-examples/avatar-image.html)
  - react:
    - `react/avatar-image.tsx`: [source](../../examples/react-examples/src/preview-examples/avatar-image.tsx)
  - vue:
    - `vue/avatar-image.vue`: [source](../../examples/vue-examples/src/preview-examples/avatar-image.vue)
- avatar-initials
  - angular:
    - `angular/avatar-initials.ts`: [source](../../examples/angular-examples/src/preview-examples/avatar-initials.ts)
  - angular-standalone:
    - `angular-standalone/avatar-initials.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/avatar-initials.ts)
  - html:
    - `html/avatar-initials.html`: [source](../../examples/html-examples/src/preview-examples/avatar-initials.html)
  - react:
    - `react/avatar-initials.tsx`: [source](../../examples/react-examples/src/preview-examples/avatar-initials.tsx)
  - vue:
    - `vue/avatar-initials.vue`: [source](../../examples/vue-examples/src/preview-examples/avatar-initials.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelTooltip`; attr: `aria-label-tooltip`; type: `string | undefined` - aria-label for the tooltip
- `extra`; attr: `extra`; type: `string | undefined` - Optional description text that will be displayed underneath the username. Note: Only working if avatar is part of the ix-application-header
- `image`; attr: `image`; type: `string | undefined` - Display an avatar image
- `initials`; attr: `initials`; type: `string | undefined` - Display the initials of the user. Will be overwritten by image
- `tooltipText`; attr: `tooltip-text`; type: `string | undefined` - Text to display in a tooltip when hovering over the avatar
- `username`; attr: `username`; type: `string | undefined` - If set an info card displaying the username will be placed inside the dropdown. Note: Only working if avatar is part of the ix-application-header

## Events

- None

## Slots

- None
