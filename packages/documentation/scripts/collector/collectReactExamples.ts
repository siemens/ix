import fs from 'fs-extra';
import path from 'path';
import { getExampleNameFromRelativePath } from './util';
import { removeTypescriptHeaderComments } from '../utils/escape';

export async function collectReactExamples(
  __componentUsageByComponentJson: string,
  __reactTestAppRoot: string,
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
      fs.existsSync(path.join(__reactTestAppRoot, `${exampleName}.tsx`)) ===
      false
    ) {
      console.warn(
        `Example file not found: ${path.join(
          __reactTestAppRoot,
          `${exampleName}.tsx`
        )}`
      );
      continue;
    }

    const example = await fs.readFile(
      path.join(__reactTestAppRoot, `${exampleName}.tsx`),
      'utf-8'
    );

    markdownExamples.push({
      exampleName,
      example: removeTypescriptHeaderComments(example).trim(),
    });
  }

  return markdownExamples
    .map(({ example, exampleName }) =>
      [`### Example: ${exampleName}`, '```tsx', example, '```'].join('\n')
    )
    .join('\n\n');
}
