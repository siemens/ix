import fs from 'fs-extra';
import { collectExamplesForTag, resolveExampleFile } from './util';
import { removeHTMLComments } from '../utils/escape';

export async function collectVueExamples(
  __componentUsageByComponentJson: string,
  __vueTestAppRoot: string,
  tag: string
): Promise<string> {
  return collectExamplesForTag(
    __componentUsageByComponentJson,
    tag,
    async (exampleName) => {
      const vueFile = resolveExampleFile(
        __vueTestAppRoot,
        exampleName,
        'vue'
      );
      if (!fs.existsSync(vueFile)) {
        console.warn(`Example file not found: ${vueFile}`);
        return null;
      }
      const content = await fs.readFile(vueFile, 'utf-8');
      return {
        exampleName,
        example: ['```tsx', removeHTMLComments(content).trim(), '```'].join('\n'),
      };
    }
  );
}
