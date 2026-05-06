/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function escapeMarkdown(markdown: string) {
  let replacedMarkdown = markdown;
  const replacemenets: [RegExp, string][] = [
    [/`/g, '\\`'],
    [/\*/g, '\\*'],
    [/#/g, '\\#'],
    [/\//g, '\\/'],
    [/\(/g, '\\('],
    [/\)/g, '\\)'],
    [/\[/g, '\\['],
    [/\]/g, '\\]'],
    [/</g, '&lt;'],
    [/>/g, '&gt;'],
    [/_/g, '\\_'],
    [/`/g, '\\`'],
    [/\|/g, '\uff5c'],
  ];

  replacemenets.forEach((replace) => {
    const [source, target] = replace;
    replacedMarkdown = markdown.replace(source, target);
  });

  return replacedMarkdown;
}

export function removeTypescriptHeaderComments(str: string) {
  return str.replaceAll(/\/\*[\s\S]*?\*\//g, '');
}

export function removeHTMLComments(str: string) {
  return str.replaceAll(/<!--[\s\S]*?-->/g, '');
}

export function parseJSDocsToMarkdown(str: string) {
  const linkRegex = /{\@link (.*?)}/g;
  const markdown = str.replaceAll(linkRegex, (_, url) => {
    return `[${url}](${url})`;
  });

  return markdown;
}

/**
 * Markdown (e.g. ReactMarkdown / CommonMark) collapses a single `\n` inside a
 * paragraph into a space. TypeDoc and Stencil keep `\n` between JSDoc `*`
 * lines. Map those single line breaks to paragraph breaks so multi-line
 * summaries render as separate blocks without relying on trailing periods.
 */
export function expandJsdocNewlinesForMarkdown(text: string): string {
  if (!text) {
    return text;
  }
  const paragraphBoundary = '\uE000';
  return text
    .replace(/\n{2,}/g, paragraphBoundary)
    .replace(/\n/g, '\n\n')
    .split(paragraphBoundary)
    .join('\n\n');
}

/**
 * Embed markdown in MDX as a JS string literal via JSON.stringify so paragraph
 * breaks stay as `\n` escapes on one line. Multi-line template literals can
 * lose a blank line when copies are edited or synced, which collapses `\n\n`
 * to `\n` and yields a single paragraph from react-markdown.
 */
export function serializeMarkdownForJsx(markdown: string | undefined): string {
  return JSON.stringify(markdown ?? '');
}

export function escapeBackticks(str: string) {
  return str.replaceAll(/`/g, '\\`');
}
