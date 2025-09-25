import fs from 'fs-extra';
import path from 'path';
import { getExampleNameFromRelativePath } from './util';
import { removeTypescriptHeaderComments } from '../utils/escape';

export async function collectAngularExamples(
  __componentUsageByComponentJson: string,
  __angularTestAppRoot: string,
  tag: string
) {
  const exampleUsage = await fs.readFile(
    __componentUsageByComponentJson,
    'utf-8'
  );

  const usage = JSON.parse(exampleUsage) as Record<string, string[]>;

  const examples = usage[tag];

  if (!examples) {
    console.log(`No examples found for ${tag}`);
    return [];
  }

  const markdownExamples: {
    exampleName: string;
    example: string;
  }[] = [];

  for (const relativeExamplePath of examples) {
    const exampleName = getExampleNameFromRelativePath(relativeExamplePath);

    if (
      fs.existsSync(path.join(__angularTestAppRoot, `${exampleName}.ts`)) ===
      false
    ) {
      console.warn(
        `Example file not found: ${path.join(
          __angularTestAppRoot,
          `${exampleName}.ts`
        )}`
      );
      continue;
    }

    const exampleMarkdown = [];

    const exampleTS = await fs.readFile(
      path.join(__angularTestAppRoot, `${exampleName}.ts`),
      'utf-8'
    );

    exampleMarkdown.push(`#### Typescript`);
    exampleMarkdown.push('```typescript', exampleTS, '```');

    if (fs.existsSync(path.join(__angularTestAppRoot, `${exampleName}.html`))) {
      const exampleHTML = await fs.readFile(
        path.join(__angularTestAppRoot, `${exampleName}.html`),
        'utf-8'
      );
      exampleMarkdown.push(`#### HTML`);
      exampleMarkdown.push('```html', exampleHTML, '```');
    }

    if (fs.existsSync(path.join(__angularTestAppRoot, `${exampleName}.css`))) {
      const exampleCSS = await fs.readFile(
        path.join(__angularTestAppRoot, `${exampleName}.css`),
        'utf-8'
      );
      exampleMarkdown.push(`#### CSS`);
      exampleMarkdown.push('```css', exampleCSS, '```');
    }

    const example = exampleMarkdown.join('\n');
    markdownExamples.push({
      exampleName,
      example: removeTypescriptHeaderComments(example).trim(),
    });
  }

  return markdownExamples
    .map(({ example, exampleName }) =>
      [`### Example: ${exampleName}`, example].join('\n')
    )
    .join('\n\n');
}
