/*
 * COPYRIGHT (c) Siemens AG 2018-2023 ALL RIGHTS RESERVED.
 */
export function escapeMarkdown(markdown: string) {
  let replacedMarkdown = markdown;
  const replacemenets: [RegExp, string][] = [
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
    replacedMarkdown = markdown.replaceAll(source, target);
  });

  return replacedMarkdown;
}
