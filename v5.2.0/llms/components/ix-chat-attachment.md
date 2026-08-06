# ix-chat-attachment

> No component summary available.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example source links are relative to this Markdown file.

- chat
  - angular:
    - `angular/chat.html`: [source](../../examples/angular-examples/src/preview-examples/chat.html)
    - `angular/chat.ts`: [source](../../examples/angular-examples/src/preview-examples/chat.ts)
  - angular-standalone:
    - `angular-standalone/chat.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/chat.html)
    - `angular-standalone/chat.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/chat.ts)
  - html:
    - `html/chat.html`: [source](../../examples/html-examples/src/preview-examples/chat.html)
  - react:
    - `react/chat.tsx`: [source](../../examples/react-examples/src/preview-examples/chat.tsx)
  - vue:
    - `vue/chat.vue`: [source](../../examples/vue-examples/src/preview-examples/chat.vue)
- chat-input
  - angular:
    - `angular/chat-input.html`: [source](../../examples/angular-examples/src/preview-examples/chat-input.html)
    - `angular/chat-input.ts`: [source](../../examples/angular-examples/src/preview-examples/chat-input.ts)
  - angular-standalone:
    - `angular-standalone/chat-input.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/chat-input.html)
    - `angular-standalone/chat-input.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/chat-input.ts)
  - html:
    - `html/chat-input.html`: [source](../../examples/html-examples/src/preview-examples/chat-input.html)
  - react:
    - `react/chat-input.tsx`: [source](../../examples/react-examples/src/preview-examples/chat-input.tsx)
  - vue:
    - `vue/chat-input.vue`: [source](../../examples/vue-examples/src/preview-examples/chat-input.vue)
- chat-user-message
  - angular:
    - `angular/chat-user-message.html`: [source](../../examples/angular-examples/src/preview-examples/chat-user-message.html)
    - `angular/chat-user-message.ts`: [source](../../examples/angular-examples/src/preview-examples/chat-user-message.ts)
  - angular-standalone:
    - `angular-standalone/chat-user-message.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/chat-user-message.html)
    - `angular-standalone/chat-user-message.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/chat-user-message.ts)
  - html:
    - `html/chat-user-message.html`: [source](../../examples/html-examples/src/preview-examples/chat-user-message.html)
  - react:
    - `react/chat-user-message.tsx`: [source](../../examples/react-examples/src/preview-examples/chat-user-message.tsx)
  - vue:
    - `vue/chat-user-message.vue`: [source](../../examples/vue-examples/src/preview-examples/chat-user-message.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `fileName`; attr: `file-name`; type: `string`; default: `''` - Name of the attached file.
- `hideRemoveButton`; attr: `hide-remove-button`; type: `boolean`; default: `false` - Hide the remove action.
- `icon`; attr: `icon`; type: `string`; default: `iconTxtDocument` - Icon displayed before the file name.
- `previewSupported`; attr: `preview-supported`; type: `boolean`; default: `false` - Enable preview interaction for default attachments.
- `removeAriaLabel`; attr: `remove-aria-label`; type: `string`; default: `'Remove attachment'` - Accessible label for the remove action.
- `status`; attr: `status`; type: `"default" | "failed" | "loading"`; default: `'default'` - Upload status of the attachment.

## Events

- `attachmentClick` - Event emitted when the attachment is clicked.
- `removeClick` - Event emitted when the remove action is clicked.

## Slots

- None
