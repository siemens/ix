/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import path from 'node:path';
import { glob } from 'glob';

interface ExampleFile {
  framework: string;
  filePath: string;
  extension: string;
}

interface ExampleMetadata {
  name: string;
  files: Map<string, ExampleFile[]>;
}

/**
 * Get all example files for each framework
 */
async function scanExamples(examplesDir: string): Promise<Map<string, ExampleMetadata>> {
  const examples = new Map<string, ExampleMetadata>();

  const frameworks = [
    { name: 'html', dir: 'html-examples', extensions: ['.html', '.css', '.js'] },
    { name: 'react', dir: 'react-examples', extensions: ['.tsx', '.scoped.css', '.css'] },
    { name: 'angular', dir: 'angular-examples', extensions: ['.ts', '.html', '.css'] },
    { name: 'angular-standalone', dir: 'angular-standalone-examples', extensions: ['.ts', '.html', '.css'] },
    { name: 'vue', dir: 'vue-examples', extensions: ['.vue', '.css'] },
  ];

  for (const framework of frameworks) {
    const examplesPath = path.join(examplesDir, framework.dir, 'src', 'preview-examples');

    if (!(await fs.pathExists(examplesPath))) {
      console.warn(`⚠️  Examples path not found: ${examplesPath}`);
      continue;
    }

    const files = await fs.readdir(examplesPath);

    for (const file of files) {
      // Skip utility files and global styles
      if (file === 'init.js' || file === 'utils.js' || file === 'global.css') {
        continue;
      }

      const ext = path.extname(file);
      const basename = path.basename(file, ext);

      // Handle scoped CSS files for React
      let exampleName = basename;
      if (basename.endsWith('.scoped')) {
        exampleName = basename.replace('.scoped', '');
      }

      if (!examples.has(exampleName)) {
        examples.set(exampleName, {
          name: exampleName,
          files: new Map(),
        });
      }

      const example = examples.get(exampleName)!;
      if (!example.files.has(framework.name)) {
        example.files.set(framework.name, []);
      }

      example.files.get(framework.name)!.push({
        framework: framework.name,
        filePath: path.join('examples', framework.dir, 'src', 'preview-examples', file),
        extension: ext,
      });
    }
  }

  return examples;
}

/**
 * Determine target filename based on extension and framework
 */
function getTargetFileName(file: ExampleFile, exampleName: string): string {
  const ext = file.extension;

  switch (file.framework) {
    case 'html':
      if (ext === '.html') return `${exampleName}.html`;
      if (ext === '.css') return `${exampleName}.css`;
      if (ext === '.js') return `${exampleName}.js`;
      break;
    case 'react':
      if (ext === '.tsx') return `${exampleName}.tsx`;
      if (ext === '.css') {
        if (file.filePath.includes('.scoped.css')) {
          return `${exampleName}.scoped.css`;
        }
        return `${exampleName}.css`;
      }
      break;
    case 'angular':
    case 'angular-standalone':
      if (ext === '.ts') return `${exampleName}.ts`;
      if (ext === '.html') return `${exampleName}.html`;
      if (ext === '.css') return `${exampleName}.css`;
      break;
    case 'vue':
      if (ext === '.vue') return `${exampleName}.vue`;
      if (ext === '.css') return `${exampleName}.css`;
      break;
  }

  return path.basename(file.filePath);
}

/**
 * Generate block JSON for a single example
 */
function generateBlockJson(example: ExampleMetadata): any {
  const block: any = {
    $schema: './../tooling/registry/schemas/example.schema.json',
    name: example.name,
    variants: {},
  };

  const dependencies = [
    { name: '@siemens/ix', version: '^4.0.0' },
    { name: '@siemens/ix-icons', version: '^3.3.0' },
  ];

  for (const [framework, files] of example.files.entries()) {
    // Skip if no files for this framework
    if (files.length === 0) continue;

    const variant: any = {
      files: [],
      dependencies: [...dependencies],
    };

    // Add framework-specific dependencies
    switch (framework) {
      case 'react':
        variant.dependencies.push({ name: '@siemens/ix-react', version: '^4.0.0' });
        break;
      case 'angular':
        variant.dependencies.push({ name: '@siemens/ix-angular', version: '^4.0.0' });
        break;
      case 'angular-standalone':
        variant.dependencies.push({ name: '@siemens/ix-angular', version: '^4.0.0' });
        break;
      case 'vue':
        variant.dependencies.push({ name: '@siemens/ix-vue', version: '^4.0.0' });
        break;
    }

    // Add files
    for (const file of files) {
      const targetFileName = getTargetFileName(file, example.name);
      variant.files.push({
        target: `${framework}/${targetFileName}`,
        source: file.filePath,
      });
    }

    // Map angular-standalone to angular in the variants
    const variantKey = framework === 'angular-standalone' ? 'angular-standalone' : framework;
    block.variants[variantKey] = variant;
  }

  return block;
}

/**
 * Generate all example block JSON files
 */
export async function generateExampleBlocks(outputDir: string, examplesDir: string): Promise<number> {
  console.log('🔍 Scanning examples...');
  const examples = await scanExamples(examplesDir);

  console.log(`📦 Found ${examples.size} unique examples`);

  await fs.ensureDir(outputDir);

  let count = 0;
  for (const [name, example] of examples.entries()) {
    const blockJson = generateBlockJson(example);

    // Only generate if at least one framework variant exists
    if (Object.keys(blockJson.variants).length > 0) {
      const outputPath = path.join(outputDir, `${name}-example.json`);
      await fs.writeJson(outputPath, blockJson, { spaces: 2 });
      count++;
    }
  }

  console.log(`✅ Generated ${count} example block definitions`);
  return count;
}
