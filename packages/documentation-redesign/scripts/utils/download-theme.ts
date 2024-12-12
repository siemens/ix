/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import axios from 'axios';
import fs, { ensureDirSync } from 'fs-extra';
import { rimrafSync } from 'rimraf';
import path from 'path';
import { extract } from 'tar/extract';
import zlib from 'zlib';

const pkgRoot = path.join(__dirname, '..');
const __tgzFile = path.join(pkgRoot, '.build.temp', 'theme.tgz');
const __buildTemp = path.join(__tgzFile, '..');

const version = '2.2.0';
const token = process.env.CSC;
const ci = process.env.CI;

export async function downloadTheme(targetPath: string) {
  if (fs.existsSync(__buildTemp)) {
    rimrafSync(__buildTemp);
  }

  if (!ci) {
    throw new Error('No CI! Skip download theme.');
  }

  if (!token) {
    throw new Error('No CSC! Skip download theme.');
  }

  ensureDirSync(__buildTemp);
  const response = await axios.get(
    `https://code.siemens.com/api/v4/projects/249177/packages/npm/@siemens/ix-brand-theme/-/@siemens/ix-brand-theme-${version}.tgz`,
    {
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const fileData = Buffer.from(response.data, 'binary');
  await fs.writeFile(__tgzFile, fileData);
  await unpack(__tgzFile, targetPath);
}

async function unpack(file: string, targetPath: string) {
  return new Promise((resolve) =>
    fs
      .createReadStream(file)
      .pipe(zlib.createGunzip())
      .pipe(
        extract({
          cwd: targetPath,
        })
      )
      .on('finish', resolve)
  );
}
