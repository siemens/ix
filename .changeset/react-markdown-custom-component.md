---
'@siemens/ix-react': minor
---

Add `createMarkdownComponent` to register a React component as a Custom component of `IxMarkdown`. The component receives the `MarkdownComponentContext` as the `ctx` prop, is mounted in its own React root, re-rendered while its block is open and unmounted when it disappears. React context is not inherited.
