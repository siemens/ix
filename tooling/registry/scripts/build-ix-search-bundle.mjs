#!/usr/bin/env node
/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { execFileSync } from 'node:child_process';
import {
  chmodSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  realpathSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import process from 'node:process';

const packageDirectory = path.resolve(import.meta.dirname, '..');
const outputDirectory = path.resolve(
  packageDirectory,
  process.env.IX_SEARCH_OUT_DIR ?? '../../skills/ix'
);
const bundlePath = path.join(outputDirectory, 'scripts', 'search.mjs');
const thirdPartyLicensesPath = path.join(
  outputDirectory,
  'THIRD_PARTY_LICENSES.md'
);
const require = createRequire(import.meta.url);

function readPackageMetadata(packageRoot) {
  return JSON.parse(
    readFileSync(path.join(packageRoot, 'package.json'), 'utf8')
  );
}

function resolveMiniSearchPackage() {
  const modulePath = realpathSync(require.resolve('minisearch'));
  let directory = path.dirname(modulePath);

  while (true) {
    const packageJsonPath = path.join(directory, 'package.json');
    if (existsSync(packageJsonPath)) {
      const metadata = readPackageMetadata(directory);
      if (metadata.name === 'minisearch') {
        return { metadata, root: directory };
      }
    }

    const parentDirectory = path.dirname(directory);
    if (parentDirectory === directory) break;
    directory = parentDirectory;
  }

  throw new Error(
    `Could not locate the MiniSearch package root from '${modulePath}'`
  );
}

function resolveLicenseFile(packageRoot) {
  const preferredNames = ['license', 'license.txt', 'license.md'];
  const licenseNames = readdirSync(packageRoot)
    .filter((name) => /^license(?:\.[^.]+)?$/i.test(name))
    .filter((name) => statSync(path.join(packageRoot, name)).isFile())
    .sort((left, right) => {
      const leftPreference = preferredNames.indexOf(left.toLowerCase());
      const rightPreference = preferredNames.indexOf(right.toLowerCase());
      if (leftPreference !== -1 || rightPreference !== -1) {
        return (
          (leftPreference === -1 ? preferredNames.length : leftPreference) -
          (rightPreference === -1 ? preferredNames.length : rightPreference)
        );
      }
      return left < right ? -1 : left > right ? 1 : 0;
    });

  const licenseName = licenseNames[0];
  if (!licenseName) {
    throw new Error(
      `Could not locate the MiniSearch license in '${packageRoot}'`
    );
  }
  return path.join(packageRoot, licenseName);
}

function normalizeLineEndings(value) {
  return value.replace(/\r\n?/g, '\n');
}

function thirdPartyLicenseNotice(metadata, licenseText) {
  const normalizedLicenseText = normalizeLineEndings(licenseText);
  const licenseWithTrailingNewline = normalizedLicenseText.endsWith('\n')
    ? normalizedLicenseText
    : `${normalizedLicenseText}\n`;

  return `# Third-party licenses

<!-- GENERATED FILE - DO NOT EDIT. -->

## MiniSearch ${metadata.version}

Package: ${metadata.name}
Version: ${metadata.version}
License: ${metadata.license}

\`\`\`text
${licenseWithTrailingNewline}\`\`\`
`;
}

const { metadata, root: miniSearchRoot } = resolveMiniSearchPackage();
if (
  typeof metadata.version !== 'string' ||
  typeof metadata.license !== 'string'
) {
  throw new Error(
    'The installed MiniSearch package has incomplete version or license metadata'
  );
}

execFileSync(
  process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm',
  ['exec', 'tsdown', '--config', 'tsdown.ix-search.config.ts'],
  {
    cwd: packageDirectory,
    env: process.env,
    stdio: 'inherit',
  }
);

mkdirSync(outputDirectory, { recursive: true });
chmodSync(bundlePath, 0o755);
writeFileSync(
  thirdPartyLicensesPath,
  thirdPartyLicenseNotice(
    metadata,
    readFileSync(resolveLicenseFile(miniSearchRoot), 'utf8')
  )
);
