import fs from 'fs-extra';
import {
  collectExamplesForTag,
  resolveExampleFile,
  readIfExists,
  sectionedExample,
} from './util';
import { removeTypescriptHeaderComments } from '../utils/escape';

export async function collectAngularExamples(
  __componentUsageByComponentJson: string,
  __angularTestAppRoot: string,
  tag: string
): Promise<string> {
  return collectExamplesForTag(
    __componentUsageByComponentJson,
    tag,
    async (exampleName) => {
      // Mandatory .ts file
      const tsFile = resolveExampleFile(
        __angularTestAppRoot,
        exampleName,
        'ts'
      );
      if (!fs.existsSync(tsFile)) {
        console.warn(`Example file not found: ${tsFile}`);
        return null;
      }
      const tsContent = await fs.readFile(tsFile, 'utf-8');

      const htmlContent = await readIfExists(
        resolveExampleFile(__angularTestAppRoot, exampleName, 'html')
      );

      const combined = sectionedExample([
        {
          heading: 'Component typescript',
          lang: 'typescript',
          code: tsContent,
        },
        { heading: 'Component template', lang: 'html', code: htmlContent },
      ]);

      return {
        exampleName,
        example: removeTypescriptHeaderComments(combined).trim(),
      };
    }
  );
}
