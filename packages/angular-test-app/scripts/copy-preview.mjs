/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import path from 'path';
import fs from 'fs';
const __dirname = path.resolve();

const previewPath = path.join(
  __dirname,
  'node_modules',
  'html-test-app',
  'src',
  'preview-examples'
);

console.log('Copying preview styles to html-test-app...', previewPath);

const files = fs.readdirSync(previewPath).filter((f) => f.endsWith('.html'));

files.forEach((file) => {
  const fileName = file.replace('.html', '');

  const angularFile = path.join(
    __dirname,
    'src',
    'preview-examples',
    `${fileName}.ts`
  );

  if (!fs.existsSync(angularFile)) {
    console.error(`Angular file for ${file} not found`);
    return;
  }

  const tsFile = fs.readFileSync(angularFile, 'utf8');

  const regex = /styleUrls:\s*\[\s*['"]([^'"]+)['"]\s*\]/;
  const match = tsFile.match(regex);
  if (match) {
    fs.writeFileSync(
      angularFile,
      tsFile.replace(match[1], `./${fileName}.css`)
    );
  }
});

// const stylesPath = path.resolve(__dirname, 'src', 'preview-examples', 'styles');
// copyPreviewStyles(stylesPath);
