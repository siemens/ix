---
'@siemens/ix-angular': minor
---

Add `createMarkdownComponent` to turn an Angular component into a Markdown Custom component factory for the `components` option of `ix-markdown`. Call it in an injection context so dependency injection keeps working inside Markdown. Fields of the component context (`name`, `attributes`, `text`, `markdown`, `node`, `emitAction`) that match inputs of the component are set as inputs and updated in place. Available for module and standalone usage.
