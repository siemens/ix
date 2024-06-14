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
import rimraf from 'rimraf';
import path from 'path';
import tar from 'tar';
import zlib from 'zlib';

const pkgRoot = path.join(__dirname, '..');

const version = '2.2.0-beta.0';
const token = process.env.CSC;
const ci = process.env.CI;

(async () => {
  const file = path.join(pkgRoot, '.build-temp', 'theme.tgz');
  rimraf.sync(path.join(file, '..'));

  if (!ci) {
    console.log('No CI! Skip download theme.');
    process.exit(0);
  }

  if (!token) {
    console.error('No CSC! Skip download theme.');
    process.exit(0);
  }

  ensureDirSync(path.join(file, '..'));
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
  await fs.writeFile(file, fileData);
  await unpack(file);
})();

async function unpack(file: string) {
  return new Promise((resolve) =>
    fs
      .createReadStream(file)
      .pipe(zlib.createGunzip())
      .pipe(
        tar.extract({
          cwd: path.join(file, '..'),
        })
      )
      .on('finish', resolve)
  );
}
