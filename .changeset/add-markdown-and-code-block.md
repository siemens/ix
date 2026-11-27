---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add the `ix-markdown` and `ix-code-block` components, including Angular, React and Vue wrappers.

`ix-markdown` renders Markdown (CommonMark and GitHub Flavored Markdown) with iX look and feel. Set the `markdown` property to render headings, paragraphs, lists, task lists, tables, block quotes, code, emphasis, strikethrough, images, links, thematic breaks and footnotes. It is built for AI chat output:

- **Streaming:** set `streaming` while the Markdown source grows. Partial content is shown immediately with unfinished syntax repaired, completed blocks keep their DOM nodes (and focus), updates are coalesced per animation frame, and a final reconcile runs when `streaming` turns `false`. The host sets `aria-busy` while streaming.
- **Tables:** tables scroll horizontally, honor column alignment and offer copy-as-CSV and download buttons once complete. Labels are localizable with `i18nCopyTable` and `i18nDownloadTable`; styling is adjustable via `--ix-markdown-table-*` custom properties.
- **Directives:** `:button[Label]{variant icon action}` (emits `actionClick`), `:pill[Label]`, `:icon{name}` and `:::callout{type heading}` render as iX components.
- **Options:** the `options` property takes one plain, shareable object with remark `plugins`, `components` that map Markdown node types or Directive names to a custom-element tag name or a factory (`MarkdownComponentFactory`, which can report actions through `emitAction`), `extensions` and `highlight`. The related types are exported from `@siemens/ix`.
- **Security:** rendering is safe by default. Raw HTML is shown as text (only `<br>` becomes a line break), links are limited to http(s), mailto and relative URLs and open in a new tab, images are limited to http(s) URLs, and Directives only pass allowlisted attributes. These rules also apply to plugin output. Content renders on the client only.

`ix-code-block` displays code with a header showing an optional filename, the language and a copy button with a temporary "Copied" state. Labels are localizable with `i18nCopy` and `i18nCopied`, and an optional `highlight(code, language)` function can return a DOM node to replace the plain code body.
