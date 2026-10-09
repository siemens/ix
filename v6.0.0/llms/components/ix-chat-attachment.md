# ix-chat-attachment

> No component summary available.

- Web component: `<ix-chat-attachment>`
- React/Vue: `IxChatAttachment` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-chat-attachment>` (`IxModule` from `@siemens/ix-angular` or `IxChatAttachment` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/chat-attachment/guide.md

## Figma IDs

- 133528:33258

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

## Methods

- None

## Slots

- None

## Dependencies

- Renders: `ix-chip`, `ix-spinner`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- chat (angular, angular-standalone, html, react, vue)
- chat-input (angular, angular-standalone, html, react, vue)
- chat-user-message (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None
