/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// import './buttons.spec.ts';
// import './breadcrumb.spec.ts';

import { glob } from 'glob';
import path from 'node:path';
import fs from 'node:fs/promises';
import { test, expect } from '@playwright/test';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const htmlPreviewPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'html-test-app',
  'src',
  'preview-examples'
);

async function resolveTestIds() {
  const files = await glob(path.join(htmlPreviewPath, '*.html'));
  return files.map((file) => path.basename(file, '.html'));
}

const testIds = await resolveTestIds();

for (const testId of testIds.filter((id) => id.includes('avatar'))) {
  test(testId, async ({ page }) => {
    await page.goto('/preview/' + testId);

    await expect(page.locator('body')).toMatchAriaSnapshot({
      name: `${testId}.aria-snapshot.txt`,
    });
  });
}
