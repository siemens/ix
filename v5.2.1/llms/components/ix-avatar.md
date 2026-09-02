# ix-avatar

> Displays a user's profile image, initials, or a placeholder icon.

## Documentation

- https://ix.siemens.io//docs/components/avatar/guide.md

## Figma IDs

- 308:1151

## Related examples

Example file links are relative to this Markdown file.

- avatar
  - angular:
    - `angular/avatar.ts`: [file](../../examples/angular/avatar.ts)
  - angular-standalone:
    - `angular-standalone/avatar.ts`: [file](../../examples/angular-standalone/avatar.ts)
  - html:
    - `html/avatar.html`: [file](../../examples/html/avatar.html)
  - react:
    - `react/avatar.tsx`: [file](../../examples/react/avatar.tsx)
  - vue:
    - `vue/avatar.vue`: [file](../../examples/vue/avatar.vue)
- avatar-image
  - angular:
    - `angular/avatar-image.ts`: [file](../../examples/angular/avatar-image.ts)
  - angular-standalone:
    - `angular-standalone/avatar-image.ts`: [file](../../examples/angular-standalone/avatar-image.ts)
  - html:
    - `html/avatar-image.html`: [file](../../examples/html/avatar-image.html)
  - react:
    - `react/avatar-image.tsx`: [file](../../examples/react/avatar-image.tsx)
  - vue:
    - `vue/avatar-image.vue`: [file](../../examples/vue/avatar-image.vue)
- avatar-initials
  - angular:
    - `angular/avatar-initials.ts`: [file](../../examples/angular/avatar-initials.ts)
  - angular-standalone:
    - `angular-standalone/avatar-initials.ts`: [file](../../examples/angular-standalone/avatar-initials.ts)
  - html:
    - `html/avatar-initials.html`: [file](../../examples/html/avatar-initials.html)
  - react:
    - `react/avatar-initials.tsx`: [file](../../examples/react/avatar-initials.tsx)
  - vue:
    - `vue/avatar-initials.vue`: [file](../../examples/vue/avatar-initials.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

- `` - Dropdown content displayed below the avatar.
