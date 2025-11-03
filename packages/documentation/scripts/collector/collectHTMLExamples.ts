import fs from 'fs-extra';
import path from 'node:path';
import { removeHTMLComments } from '../utils/escape';
import { collectExamplesForTag } from './util';

export async function collectHTMLExamples(
  __componentUsageByComponentJson: string,
  __htmlTestAppRoot: string,
  tag: string
): Promise<string> {
  return collectExamplesForTag(
    __componentUsageByComponentJson,
    tag,
    async (exampleName, relativeExamplePath) => {
      const filePath = path.join(__htmlTestAppRoot, relativeExamplePath);
      if (!fs.existsSync(filePath)) {
        console.warn(`Example file not found: ${filePath}`);
        return null;
      }
      const content = await fs.readFile(filePath, 'utf-8');
      return {
        exampleName,
        example: ['```html', removeHTMLComments(content).trim(), '```'].join(
          '\n'
        ),
      };
    }
  );
}
