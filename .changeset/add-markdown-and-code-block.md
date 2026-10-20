---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add the `ix-markdown` component to render Markdown (CommonMark and GitHub Flavored Markdown) with iX look and feel. Set the `markdown` property to render headings, paragraphs, lists, emphasis, strong, strikethrough, block quotes, inline code, images and links. Rendering is safe by default and not configurable: raw HTML is shown as text (only `<br>` becomes a line break), links are limited to http(s), mailto and relative URLs and open in a new tab, and images are limited to http(s) URLs. Content renders on the client only.

Add the `ix-code-block` component to display code with a header showing an optional filename, the language and a copy button with a temporary "Copied" state. Labels can be localized with `i18nCopy` and `i18nCopied`, and an optional `highlight(code, language)` function can return a DOM node to replace the plain code body.

Add streaming support to `ix-markdown`: set `streaming` while the Markdown source grows to show partial content immediately (the host gets `aria-busy="true"`). Unfinished syntax in the last block is repaired for display, completed blocks keep their DOM nodes, updates are coalesced to one render per animation frame, and a final reconcile runs when `streaming` turns `false`.

Both components include Angular, React and Vue framework wrappers.

Render GFM tables in `ix-markdown` with iX table styling inside a horizontal scroll container, honoring column alignment. Completed tables offer copy-as-CSV and download-as-`table.csv` buttons (hidden while a table is still streaming); labels can be localized with `i18nCopyTable` and `i18nDownloadTable`. Table styling is adjustable via `--ix-markdown-table-*` custom properties.

`ix-markdown` renders GFM task list items as read-only `ix-checkbox`, thematic breaks as `ix-divider`, and footnotes as superscript links to a footnotes section at the end of the view with back-references. Footnote definitions that arrive after their reference are resolved at the latest when `streaming` turns `false`.

Add `options` to `ix-markdown` to configure it with one plain, shareable object: remark `plugins`, `components` that map Markdown node types or Directive names to a custom-element tag name or a factory (`MarkdownComponentFactory`), `extensions` and `highlight`. Factory components are mounted once, updated in place while their block is open and destroyed when it disappears or the view disconnects. Custom components can report actions through `emitAction`, which fires the `actionClick` event. The security rules still apply to plugin output. The related types are exported from `@siemens/ix`.
