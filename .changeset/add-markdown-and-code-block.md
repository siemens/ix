---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Add the `ix-markdown` component to render Markdown (CommonMark and GitHub Flavored Markdown) with iX look and feel. Set the `markdown` property to render headings, paragraphs, lists, emphasis, strong, strikethrough, block quotes, inline code, images and links. Rendering is safe by default and not configurable: raw HTML is shown as text (only `<br>` becomes a line break), links are limited to http(s), mailto and relative URLs and open in a new tab, and images are limited to http(s) URLs. Content renders on the client only.

Add the `ix-code-block` component to display code with a header showing an optional filename, the language and a copy button with a temporary "Copied" state. Labels can be localized with `i18nCopy` and `i18nCopied`, and an optional `highlight(code, language)` function can return a DOM node to replace the plain code body.

Both components include Angular, React and Vue framework wrappers.
