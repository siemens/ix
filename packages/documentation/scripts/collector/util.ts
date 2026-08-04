/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs-extra';
import path from 'node:path';

export function getExampleNameFromRelativePath(relativeExamplePath: string) {
  const lastSegment = relativeExamplePath.split('/').pop();
  if (!lastSegment) {
    throw new Error(`Invalid example path: ${relativeExamplePath}`);
  }
  return lastSegment.replace('.html', '');
}

/*
 * Generic helpers to de-duplicate logic across framework example collectors.
 */
export type BuildExampleFn = (
  exampleName: string,
  relativeExamplePath: string
) => Promise<{ exampleName: string; example: string } | null>;

/**
 * Read and parse the usage JSON file which maps component tags to arrays of example paths.
 */
export async function readUsageJson(
  componentUsageJsonPath: string
): Promise<Record<string, string[]>> {
  const exampleUsage = await fs.readFile(componentUsageJsonPath, 'utf-8');
  return JSON.parse(exampleUsage) as Record<string, string[]>;
}

/**
 * Collect examples for a tag using a provided build function.
 * The build function is responsible for locating files and returning a markdown body.
 */
export async function collectExamplesForTag(
  usageJsonPath: string,
  tag: string,
  buildExample: BuildExampleFn
): Promise<string> {
  const usage = await readUsageJson(usageJsonPath);
  const examples = usage[tag];

  if (!examples) {
    console.log(`No examples found for ${tag}`);
    return '';
  }

  const markdown: string[] = [];

  for (const relativeExamplePath of examples) {
    const exampleName = getExampleNameFromRelativePath(relativeExamplePath);
    const built = await buildExample(exampleName, relativeExamplePath);
    if (!built) continue; // build function logged reason (e.g., file not found)
    markdown.push(
      [`### Example: ${built.exampleName}`, built.example].join('\n')
    );
  }

  return markdown.join('\n\n');
}

/**
 * Helper to read file content if it exists; returns null when missing.
 */
export async function readIfExists(filePath: string): Promise<string | null> {
  if (!fs.existsSync(filePath)) return null;
  return fs.readFile(filePath, 'utf-8');
}

/**
 * Compose fenced code blocks conveniently.
 */
export function fenced(lang: string, code: string): string {
  return ['```' + lang, code, '```'].join('\n');
}

/**
 * Build an example made of multiple named sections (e.g., Typescript / HTML / CSS)
 */
export function sectionedExample(
  sections: Array<{
    heading: string;
    lang: string;
    code: string | null;
  }>
): string {
  return sections
    .filter((s) => s.code)
    .map((s) =>
      [`#### ${s.heading}`, fenced(s.lang, s.code as string)].join('\n')
    )
    .join('\n');
}

/**
 * Resolve a file by base name + extension inside a root directory.
 */
export function resolveExampleFile(
  root: string,
  exampleBaseName: string,
  extension: string
): string {
  return path.join(root, `${exampleBaseName}.${extension}`);
}
