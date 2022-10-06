/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { exec } from 'child_process';
import crypto from 'crypto';
import { URL } from 'url';
import { existsSync, readFileSync } from 'fs';
import path from 'path';

const Reset = '\x1b[0m';
const FgGreen = '\x1b[32m';

const hashBuilder = crypto.createHash('sha256');

function isTrue(value) {
  return !!value && value !== '0' && value !== 'false';
}

function isCI() {
  return isTrue(process.env.CI);
}

async function getNpmRegistry() {
  return new Promise((r) => {
    exec(
      'npm config get registry',
      {
        cwd: process.env.INIT_CWD,
      },
      (_, stdout) => {
        const url = new URL(stdout);
        r(url.hostname);
      }
    );
  });
}

/**
 * @param {string} hash
 * @returns
 */
export async function isInternalArtifactory(hash) {
  const url = await getNpmRegistry();
  const hashValue = hashBuilder.update(url);
  const hashUrl = hashValue.digest('hex');

  return hashUrl === hash;
}

/**
 *
 * @param {any[]} dependencies
 * @return {boolean}
 */
function includesBrandTheme(dependencies) {
  if (dependencies) {
    return Object.keys(dependencies).includes('@siemens/ix-brand-theme');
  }

  return false;
}

/**
 * @param {string} hash
 * @returns
 */
export async function printIsInternalArtifactoryConfigured(hash) {
  const isInternal = await isInternalArtifactory(hash);

  if (!isCI() && isInternal) {
    const pkgPath = path.join(process.env.INIT_CWD, 'package.json');
    let isBrandThemeIsInstalled = false;

    if (existsSync(pkgPath)) {
      const pkg = JSON.parse(readFileSync(pkgPath).toString());
      isBrandThemeIsInstalled = includesBrandTheme(pkg.dependencies);
    }

    if (!isBrandThemeIsInstalled) {
      const brand = `

      ███████ ██ ███████ ███    ███ ███████ ███    ██ ███████     ██ ██   ██
      ██      ██ ██      ████  ████ ██      ████   ██ ██          ██  ██ ██
      ███████ ██ █████   ██ ████ ██ █████   ██ ██  ██ ███████     ██   ███
           ██ ██ ██      ██  ██  ██ ██      ██  ██ ██      ██     ██  ██ ██
      ███████ ██ ███████ ██      ██ ███████ ██   ████ ███████     ██ ██   ██


    `;

      console.log(brand);
      console.log(`${FgGreen}Thank you for installing @siemens/ix!`);
      console.log('');
      console.log(
        'If you want to install the Siemens corporate design, please follow this link https://code.siemens.com/siemens-ix/ix-brand-theme#getting-started'
      );
      console.log(Reset);
    }
  }
}

const hash =
  process.env.IHASH ??
  'e5033d1e9ea4a672f9f336f972abb0b9597d38e593b15ed8584341b52264aa99';

printIsInternalArtifactoryConfigured(hash);
