import { glob } from 'glob';
import fs from 'fs-extra';

async function run() {
  const index = await glob('**/docs/**/index.mdx');
  const code = await glob('**/docs/**/code.mdx');
  const guide = await glob('**/docs/**/guide.mdx');

  // index.forEach(async (file) => {
  //   const content = await fs.readFile(file, 'utf-8');

  //   const hasSingleTabFeature = content.includes('no_single_tab');
  //   fs.writeFile(
  //     file,
  //     content
  //       .replace(/import.*$/gms, '')
  //       .replace(/toc_min_heading_level.*\n/g, '')
  //       .replace(/toc_max_heading_level.*\n/g, '')
  //       .replace(/component-tabs.*\n/g, '')
  //       .replace(
  //         /doc-type: 'component'/g,
  //         `doc-type: "${hasSingleTabFeature ? 'banner' : 'tabs'}"`
  //       )
  //       .replace(/no_single_tab.*\n/g, '')
  //   );
  // });

  code.forEach(async (file) => {
    const content = await fs.readFile(file, 'utf-8');
    if (content.includes("doc-type: 'tab-item'")) {
      return;
    }

    console.log(
      file,
      [
        '---',
        "doc-type: 'tab-item'",
        '---',
        content
          .replace(/#\s(.)/gm, ' $1')
          .replace(/# Development/g, `# $COMPONENT_NAME$ - Code`),
      ].join('\n')
    );
  });
}

run();
