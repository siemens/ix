import fs from 'fs-extra';
import path from 'path';
import { getExampleNameFromRelativePath } from './util';
import { removeHTMLComments } from '../utils/escape';

export async function collectVueExamples(
  __componentUsageByComponentJson: string,
  __vueTestAppRoot: string,
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

    if (
      fs.existsSync(path.join(__vueTestAppRoot, `${exampleName}.vue`)) === false
    ) {
      console.warn(
        `Example file not found: ${path.join(
          __vueTestAppRoot,
          `${exampleName}.vue`
        )}`
      );
      continue;
    }

    const example = await fs.readFile(
      path.join(__vueTestAppRoot, `${exampleName}.vue`),
      'utf-8'
    );

    markdownExamples.push({
      exampleName,
      example: removeHTMLComments(example).trim(),
    });
  }

  return markdownExamples
    .map(({ example, exampleName }) =>
      [`### Example: ${exampleName}`, '```tsx', example, '```'].join('\n')
    )
    .join('\n\n');
}
