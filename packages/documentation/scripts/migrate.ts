import { glob } from 'glob';
import fs from 'fs-extra';

async function run() {
  const index = await glob('**/docs/**/index.mdx');
  const code = await glob('**/docs/**/code.mdx');
  const guide = await glob('**/docs/**/guide.mdx');

  console.log(index);

  index.forEach(async (file) => {
    const content = await fs.readFile(file, 'utf-8');
    console.log(
      content
        .replace(/import.*$/gms, '')
        .replace(/toc_min_heading_level.*\n/g, '')
        .replace(/toc_max_heading_level.*\n/g, '')
        .replace(/component-tabs.*\n/g, '')
        .replace(/doc-type: 'component'/g, 'doc-type: "tabs"')
    );
  });
}

run();
