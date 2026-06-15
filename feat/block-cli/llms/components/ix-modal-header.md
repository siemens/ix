# ix-modal-header

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/modal/guide.md

## Figma IDs

- None

## Related examples

- modal
  - html: [../../examples/html-examples/src/preview-examples/modal.html](../../examples/html-examples/src/preview-examples/modal.html)
  - react: [../../examples/react-examples/src/preview-examples/modal.tsx](../../examples/react-examples/src/preview-examples/modal.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/modal.vue](../../examples/vue-examples/src/preview-examples/modal.vue)
- modal-close
  - angular: [../../examples/angular-examples/src/preview-examples/modal-close.html](../../examples/angular-examples/src/preview-examples/modal-close.html), [../../examples/angular-examples/src/preview-examples/modal-close.ts](../../examples/angular-examples/src/preview-examples/modal-close.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/modal-close.html](../../examples/angular-standalone-examples/src/preview-examples/modal-close.html), [../../examples/angular-standalone-examples/src/preview-examples/modal-close.ts](../../examples/angular-standalone-examples/src/preview-examples/modal-close.ts)
  - html: [../../examples/html-examples/src/preview-examples/modal-close.html](../../examples/html-examples/src/preview-examples/modal-close.html)
  - react: [../../examples/react-examples/src/preview-examples/modal-close.tsx](../../examples/react-examples/src/preview-examples/modal-close.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/modal-close.vue](../../examples/vue-examples/src/preview-examples/modal-close.vue)
- modal-form-ix-button-submit
  - angular: [../../examples/angular-examples/src/preview-examples/modal-form-ix-button-submit.html](../../examples/angular-examples/src/preview-examples/modal-form-ix-button-submit.html), [../../examples/angular-examples/src/preview-examples/modal-form-ix-button-submit.ts](../../examples/angular-examples/src/preview-examples/modal-form-ix-button-submit.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/modal-form-ix-button-submit.html](../../examples/angular-standalone-examples/src/preview-examples/modal-form-ix-button-submit.html), [../../examples/angular-standalone-examples/src/preview-examples/modal-form-ix-button-submit.ts](../../examples/angular-standalone-examples/src/preview-examples/modal-form-ix-button-submit.ts)
  - html: [../../examples/html-examples/src/preview-examples/modal-form-ix-button-submit.html](../../examples/html-examples/src/preview-examples/modal-form-ix-button-submit.html)
  - react: [../../examples/react-examples/src/preview-examples/modal-form-ix-button-submit.tsx](../../examples/react-examples/src/preview-examples/modal-form-ix-button-submit.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/modal-form-ix-button-submit.vue](../../examples/vue-examples/src/preview-examples/modal-form-ix-button-submit.vue)
- modal-non-blocking
  - angular: [../../examples/angular-examples/src/preview-examples/modal-non-blocking.ts](../../examples/angular-examples/src/preview-examples/modal-non-blocking.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/modal-non-blocking.ts](../../examples/angular-standalone-examples/src/preview-examples/modal-non-blocking.ts)
  - html: [../../examples/html-examples/src/preview-examples/modal-non-blocking.html](../../examples/html-examples/src/preview-examples/modal-non-blocking.html)
  - react: [../../examples/react-examples/src/preview-examples/modal-non-blocking.tsx](../../examples/react-examples/src/preview-examples/modal-non-blocking.tsx)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close modal'` - ARIA label for the close icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `hideClose`; attr: `hide-close`; type: `boolean`; default: `false` - Hide the close button
- `icon`; attr: `icon`; type: `string | undefined` - Icon of the header
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color

## Events

- `closeClick` - Emits when the close icon is clicked and closes the modal Can be prevented, in which case only the event is triggered, and the modal remains open

## Slots

- None
