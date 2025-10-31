import fs from 'fs-extra';
import path from 'path';
import { removeHTMLComments } from '../utils/escape';
import { getExampleNameFromRelativePath } from './util';

export async function collectHTMLExamples(
  __componentUsageByComponentJson: string,
  __htmlTestAppRoot: string,
  tag: string
): Promise<string> {
  const exampleUsage = await fs.readFile(
    __componentUsageByComponentJson,
    'utf-8'
  );

  const usage = JSON.parse(exampleUsage) as Record<string, string[]>;

  const examples = usage[tag];

  if (!examples) {
    console.log(`No examples found for ${tag}`);
    return '';
  }

  const markdownExamples: {
    exampleName: string;
    example: string;
  }[] = [];

  for (const relativeExamplePath of examples) {
    const exampleName = getExampleNameFromRelativePath(relativeExamplePath);
    const example = await fs.readFile(
      path.join(__htmlTestAppRoot, relativeExamplePath),
      'utf-8'
    );
    if (exampleName) {
      markdownExamples.push({
        exampleName,
        example: removeHTMLComments(example).trim(),
      });
    }
  }

  return markdownExamples
    .map(({ example, exampleName }) =>
      [`### Example: ${exampleName}`, '```html', example, '```'].join('\n')
    )
    .join('\n\n');
}
