import { glob } from 'glob';
import fs from 'fs-extra';

async function run() {
  const index = await glob('**/docs/**/index.mdx');
  const code = await glob('**/docs/**/code.mdx');
  const guide = await glob('**/docs/**/guide.md');

  const sidebar = await fs.readFile('sidebars.ts', 'utf-8');

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

  // console.log(guide);
  // guide.forEach(async (file) => {
  //   const content = await fs.readFile(file, 'utf-8');
  //   if (content.includes("doc-type: 'tab-item'")) {
  //     return;
  //   }

  //   if (/^# .* - Usage/g.test(content)) {
  //     return;
  //   }

  //   const indexFile = await fs.readFile(
  //     file.replace('guide.md', 'index.mdx'),
  //     'utf-8'
  //   );

  //   fs.writeFileSync(
  //     file,
  //     [
  //       '---',
  //       "doc-type: 'tab-item'",
  //       '---',
  //       content
  //         .replace(/---.*?---/s, '')
  //         .replace(/#\s(.)/gm, ' $1')
  //         .replace(
  //           /# Guidelines/g,
  //           `# ${indexFile.match(/title: '(.*)'/)[1]} - Usage`
  //         ),
  //     ].join('\n')
  //   );
  // });
}

run();
