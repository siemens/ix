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

interface ExampleFile {
  framework: string;
  filePath: string;
  extension: string;
}

interface ExampleMetadata {
  name: string;
  files: Map<string, ExampleFile[]>;
}

function assertSafePublicPath(publicPath: string): void {
  if (
    !publicPath ||
    publicPath.includes('\\') ||
    publicPath.includes('\0') ||
    publicPath.includes(':') ||
    publicPath.includes('?') ||
    publicPath.includes('#') ||
    publicPath.includes('%') ||
    path.posix.isAbsolute(publicPath) ||
    /^[a-zA-Z]:/.test(publicPath) ||
    publicPath
      .split('/')
      .some((segment) => !segment || segment === '.' || segment === '..')
  ) {
    throw new Error(
      `Invalid canonical example path '${publicPath}'. Expected a safe framework-prefixed relative path.`
    );
  }
}

function assertNoCanonicalPathConflicts(publicPaths: string[]): void {
  const sortedPaths = [...publicPaths].sort();
  for (let index = 1; index < sortedPaths.length; index++) {
    const previousPath = sortedPaths[index - 1];
    const currentPath = sortedPaths[index];
    if (
      currentPath === previousPath ||
      currentPath.startsWith(`${previousPath}/`)
    ) {
      throw new Error(
        `Conflicting public example paths '${previousPath}' and '${currentPath}'.`
      );
    }
  }
}

async function assertNoSymlinks(
  root: string,
  candidate: string
): Promise<void> {
  const rootStat = await fs.lstat(root);
  if (rootStat.isSymbolicLink()) {
    throw new Error(
      `Cannot materialize example through symbolic link '${root}'.`
    );
  }

  const relative = path.relative(root, candidate);
  let current = root;

  for (const segment of relative.split(path.sep).filter(Boolean)) {
    current = path.join(current, segment);
    const stat = await fs.lstat(current).catch((error: unknown) => {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
      throw error;
    });
    if (stat?.isSymbolicLink()) {
      throw new Error(
        `Cannot materialize example through symbolic link '${current}'.`
      );
    }
  }
}

async function assertMaterializableExampleFile(
  examplesDir: string,
  outputDir: string,
  publicPath: string,
  sourcePath: string
): Promise<boolean> {
  const destination = path.join(outputDir, publicPath);
  const relativeDestination = path.relative(outputDir, destination);
  if (
    relativeDestination === '' ||
    relativeDestination.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relativeDestination)
  ) {
    throw new Error(
      `Example public path escapes the output directory: ${publicPath}`
    );
  }
  assertSafePublicPath(publicPath);
  await assertNoSymlinks(outputDir, destination);

  const source = path.join(examplesDir, sourcePath);
  const sourceStat = await fs.lstat(source);
  if (!sourceStat.isFile()) {
    throw new Error(`Example source is not a regular file: ${sourcePath}`);
  }

  const destinationStat = await fs
    .lstat(destination)
    .catch((error: unknown) => {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
      throw error;
    });
  if (!destinationStat) {
    return false;
  }
  if (!destinationStat.isFile()) {
    throw new Error(
      `Cannot materialize example '${sourcePath}': already exists at canonical public path '${publicPath}'.`
    );
  }

  const [sourceContent, existingContent] = await Promise.all([
    fs.readFile(source),
    fs.readFile(destination),
  ]);
  if (Buffer.compare(sourceContent, existingContent) !== 0) {
    throw new Error(
      `Cannot materialize example '${sourcePath}': already exists at canonical public path '${publicPath}'.`
    );
  }

  return true;
}

/**
 * Get all example files for each framework
 */
async function scanExamples(
  examplesDir: string
): Promise<Map<string, ExampleMetadata>> {
  const examples = new Map<string, ExampleMetadata>();

  const frameworks = [
    {
      name: 'html',
      dir: 'html-examples',
      extensions: ['.html', '.css', '.js'],
    },
    {
      name: 'react',
      dir: 'react-examples',
      extensions: ['.tsx', '.scoped.css', '.css'],
    },
    {
      name: 'angular',
      dir: 'angular-examples',
      extensions: ['.ts', '.html', '.css'],
    },
    {
      name: 'angular-standalone',
      dir: 'angular-standalone-examples',
      extensions: ['.ts', '.html', '.css'],
    },
    { name: 'vue', dir: 'vue-examples', extensions: ['.vue', '.css'] },
  ];

  for (const framework of frameworks) {
    const examplesPath = path.join(
      examplesDir,
      framework.dir,
      'src',
      'preview-examples'
    );

    if (!(await fs.pathExists(examplesPath))) {
      console.warn(`⚠️  Examples path not found: ${examplesPath}`);
      continue;
    }

    const files = (await fs.readdir(examplesPath)).sort();

    for (const file of files) {
      if (file === 'init.js' || file === 'utils.js' || file === 'global.css') {
        continue;
      }

      const ext = path.extname(file);
      const basename = path.basename(file, ext);

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
        filePath: path.join(framework.dir, 'src', 'preview-examples', file),
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
    $schema: '../schemas/example.schema.json',
    name: example.name,
    variants: {},
  };

  for (const [framework, files] of example.files.entries()) {
    if (files.length === 0) continue;

    const variant: any = {
      files: [],
    };

    for (const file of files) {
      const targetFileName = getTargetFileName(file, example.name);
      variant.files.push({
        path: `${framework}/${targetFileName}`,
      });
    }

    const variantKey =
      framework === 'angular-standalone' ? 'angular-standalone' : framework;
    block.variants[variantKey] = variant;
  }

  return block;
}

async function materializeExampleFile(
  examplesDir: string,
  outputDir: string,
  publicPath: string,
  sourcePath: string
): Promise<void> {
  const alreadyMaterialized = await assertMaterializableExampleFile(
    examplesDir,
    outputDir,
    publicPath,
    sourcePath
  );
  if (alreadyMaterialized) {
    return;
  }

  const destination = path.join(outputDir, publicPath);
  await fs.copy(path.join(examplesDir, sourcePath), destination, {
    dereference: true,
  });
}

/**
 * Generate all example block JSON files
 */
export async function generateExampleBlocks(
  outputDir: string,
  examplesDir: string
): Promise<number> {
  console.log('🔍 Scanning examples...');
  const examples = await scanExamples(examplesDir);

  console.log(`📦 Found ${examples.size} unique examples`);

  await fs.ensureDir(outputDir);

  const materializedFiles = new Map<string, string>();
  const generatedExamples = [...examples.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([name, example]) => ({
      name,
      example,
      blockJson: generateBlockJson(example),
    }));

  for (const { name, example, blockJson } of generatedExamples) {
    if (Object.keys(blockJson.variants).length > 0) {
      for (const [framework, files] of example.files.entries()) {
        for (const file of files) {
          const targetFileName = getTargetFileName(file, name);
          const publicPath = `${framework}/${targetFileName}`;
          assertSafePublicPath(publicPath);
          const previousSource = materializedFiles.get(publicPath);
          if (previousSource !== undefined) {
            throw new Error(
              `Duplicate public example path '${publicPath}' for '${previousSource}' and '${file.filePath}'.`
            );
          }
          materializedFiles.set(publicPath, file.filePath);
        }
      }
    }
  }

  assertNoCanonicalPathConflicts([...materializedFiles.keys()]);
  await Promise.all(
    [...materializedFiles.entries()].map(([publicPath, sourcePath]) =>
      assertMaterializableExampleFile(
        examplesDir,
        outputDir,
        publicPath,
        sourcePath
      )
    )
  );
  await Promise.all(
    [...materializedFiles.entries()].map(async ([publicPath, sourcePath]) => {
      await materializeExampleFile(
        examplesDir,
        outputDir,
        publicPath,
        sourcePath
      );
    })
  );

  let count = 0;
  for (const { name, blockJson } of generatedExamples) {
    if (Object.keys(blockJson.variants).length > 0) {
      const outputPath = path.join(outputDir, `${name}.json`);
      await fs.writeJson(outputPath, blockJson, { spaces: 2 });
      count++;
    }
  }

  console.log(`✅ Generated ${count} example block definitions`);
  return count;
}
