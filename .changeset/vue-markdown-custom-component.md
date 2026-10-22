---
'@siemens/ix-vue': minor
---

Add `createMarkdownComponent` to register a Vue component as a Custom component of `IxMarkdown`. The component receives the `MarkdownComponentContext` fields as props, is updated while its block is open and unmounted when it disappears. Call it inside `setup()` (or pass the app context) so plugins, provide/inject, router and i18n keep working.
