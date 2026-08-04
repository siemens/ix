import fs from 'fs-extra';
import {
  collectExamplesForTag,
  resolveExampleFile,
} from './util';
import { removeTypescriptHeaderComments } from '../utils/escape';

export async function collectReactExamples(
  __componentUsageByComponentJson: string,
  __reactTestAppRoot: string,
  tag: string
): Promise<string> {
  return collectExamplesForTag(
    __componentUsageByComponentJson,
    tag,
    async (exampleName) => {
      const tsxFile = resolveExampleFile(
        __reactTestAppRoot,
        exampleName,
        'tsx'
      );
      if (!fs.existsSync(tsxFile)) {
        console.warn(`Example file not found: ${tsxFile}`);
        return null;
      }
      const content = await fs.readFile(tsxFile, 'utf-8');
      return {
        exampleName,
        example: ['```tsx', removeTypescriptHeaderComments(content).trim(), '```'].join('\n'),
      };
    }
  );
}
