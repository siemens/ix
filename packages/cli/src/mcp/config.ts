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
import deepmerge from 'deepmerge';
import { Framework } from '../detect';

const overwriteMerge = (_: any[], sourceArray: any[]) => sourceArray;

export const initVSCodeMCPConfig = async (framework: Framework) => {
  const config = {
    configPath: '.vscode/mcp.json',
    config: {
      servers: {
        siemensix: {
          command: 'npx',
          args: [`./../../ix/packages/cli`, 'mcp', `run-${framework}`],
        },
      },
    },
  };

  const dirname = path.dirname(config.configPath);
  await fs.ensureDir(dirname);

  let existingConfig = {};
  try {
    const content = await fs.readFile(config.configPath, 'utf-8');
    existingConfig = JSON.parse(content);
  } catch {}

  const mergedConfig = deepmerge(
    existingConfig,
    config.config as Record<string, unknown>,
    { arrayMerge: overwriteMerge }
  );

  await fs.writeFile(
    config.configPath,
    JSON.stringify(mergedConfig, null, 2) + '\n',
    'utf-8'
  );

  return config.configPath;
};
