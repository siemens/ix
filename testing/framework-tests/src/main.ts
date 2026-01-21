/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { resolveTestIds } from './utils';
import path from 'node:path';
import fs from 'fs/promises';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

async function main() {
  const testIds = await resolveTestIds();
  console.log('Resolved Test IDs:', testIds);

  await fs.writeFile(
    path.join(__dirname, '..', 'tests', 'test-ids.ts'),
    `export const testIds = ${JSON.stringify(testIds, null, 2)};`,
    'utf-8'
  );
}

main().catch((err) => {
  console.error('Error in main execution:', err);
  process.exit(1);
});
