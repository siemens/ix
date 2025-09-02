/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { glob } from 'glob';
import { readFile, writeFile } from 'fs-extra';
import path from 'path';

/**
| v3 variant | ghost | outline | **v4 variant**   |
| ---------- | ----- | ------- | ---------------- |
| primary    | false | false   | primary          |
| primary    | false | true    | secondary        |
| primary    | true  | false   | tertiary         |
| secondary  | false | false   | subtle-primary   |
| secondary  | false | true    | subtle-secondary |
| secondary  | true  | false   | subtle-tertiary  |
| danger     | false | false   | danger-primary   |
| danger     | false | true    | danger-secondary |
| danger     | true  | false   | danger-tertiary  |
*/

export async function migrate(path: string) {
  const files = await glob(path);
  console.log(`Migrating ${files.length} files...`);

  for (const file of files) {
    const content = (await readFile(file, 'utf-8')).toString();
    let modifiedContent = content;
    let hasChanges = false;

    // Migration mapping based on the table
    const variantMapping = {
      // primary + ghost = tertiary
      'primary-ghost': 'tertiary',
      // primary + outline = secondary
      'primary-outline': 'secondary',
      // primary (no ghost/outline) = primary (already correct)
      primary: 'primary',

      // secondary + ghost = subtle-tertiary
      'secondary-ghost': 'subtle-tertiary',
      // secondary + outline = subtle-secondary
      'secondary-outline': 'subtle-secondary',
      // secondary (no ghost/outline) = subtle-primary
      secondary: 'subtle-primary',

      // danger + ghost = danger-tertiary
      'danger-ghost': 'danger-tertiary',
      // danger + outline = danger-secondary
      'danger-outline': 'danger-secondary',
      // danger (no ghost/outline) = danger-primary
      danger: 'danger-primary',
    };

    // Regex to find HTML elements with ghost or outline attributes
    // This matches elements like <ix-button ghost>, <ix-toggle-button outline variant="danger">, etc.
    const elementRegex = /<([\w-]+)([^>]*?)\s+(ghost|outline)([^>]*?)>/g;

    modifiedContent = modifiedContent.replace(
      elementRegex,
      (match, tagName, beforeAttrs, ghostOrOutline, afterAttrs) => {
        // Extract existing variant attribute, default to 'primary' if not found
        const variantMatch = (beforeAttrs + afterAttrs).match(
          /variant\s*=\s*["']([^"']+)["']/
        );
        const currentVariant = variantMatch ? variantMatch[1] : 'primary';

        // Create mapping key
        const mappingKey = `${currentVariant}-${ghostOrOutline}`;
        const newVariant = variantMapping[mappingKey] || currentVariant;

        // Remove ghost/outline attributes and update variant
        let newAttrs = (beforeAttrs + afterAttrs)
          .replace(/\s*ghost\s*/g, ' ')
          .replace(/\s*outline\s*/g, ' ')
          .replace(/variant\s*=\s*["'][^"']+["']/, `variant="${newVariant}"`);

        // If no variant attribute existed, add the new one
        if (!variantMatch) {
          newAttrs = ` variant="${newVariant}"` + newAttrs;
        }

        // Clean up extra spaces
        newAttrs = newAttrs.replace(/\s+/g, ' ').trim();

        hasChanges = true;
        console.log(
          `  Migrated: ${currentVariant} + ${ghostOrOutline} -> ${newVariant}`
        );

        return `<${tagName}${newAttrs ? ' ' + newAttrs : ''}>`;
      }
    );

    // Second pass: Handle variants without ghost/outline that need to be updated
    // This handles cases like variant="danger" -> variant="danger-primary"
    const variantOnlyRegex =
      /<([\w-]+)([^>]*?)variant\s*=\s*["'](secondary|danger)["']([^>]*?)>/g;

    modifiedContent = modifiedContent.replace(
      variantOnlyRegex,
      (match, tagName, beforeAttrs, variant, afterAttrs) => {
        // Check if this element already has ghost or outline (would have been handled in first pass)
        const fullAttrs = beforeAttrs + afterAttrs;
        if (fullAttrs.includes('ghost') || fullAttrs.includes('outline')) {
          return match; // Skip, already handled
        }

        // Map the old variant to new variant (without ghost/outline = false + false)
        const newVariant = variantMapping[variant];
        if (newVariant && newVariant !== variant) {
          hasChanges = true;
          console.log(
            `  Migrated standalone variant: ${variant} -> ${newVariant}`
          );

          return match.replace(
            /variant\s*=\s*["'][^"']+["']/,
            `variant="${newVariant}"`
          );
        }

        return match;
      }
    );

    if (hasChanges) {
      await writeFile(file, modifiedContent);
      console.log(`  ✓ Updated: ${file}`);
    }
  }
}
migrate(
  path.join(
    process.cwd(),
    'node_modules',
    'angular-test-app',
    'src',
    'preview-examples',
    '**',
    '*.ts'
  )
);

migrate(
  path.join(
    process.cwd(),
    'node_modules',
    'angular-standalone-test-app',
    'src',
    'preview-examples',
    '**',
    '*.ts'
  )
);
