/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import fs from 'fs';
import fse from 'fs-extra';
import fsp from 'fs/promises';
import path from 'path';

export async function writeAngularPreviews(
  staticPath: string,
  htmlPreviewPath: string,
  __dirname: string,
  generateMarkdown: (previewPath: any, type: any, code: any) => string
) {
  const angularPreviewSourceCodePath = path.join(staticPath, 'angular');
  fse.ensureDirSync(angularPreviewSourceCodePath);

  const webComponentPreviews = fs
    .readdirSync(htmlPreviewPath)
    .filter((name) => name.includes('.html'))
    .map((name) => name.replace('.html', ''));

  const angularPreviewPath = path.join(
    __dirname,
    '../angular-test-app/src/preview-examples'
  );

  const angularPreviews = fs.readdirSync(angularPreviewPath);
  const angularPreviewPaths = webComponentPreviews
    .filter((name) => {
      const exist = angularPreviews.includes(`${name}.ts`);

      if (!exist) {
        console.warn(
          `Angular preview for ${name} is missing in angular-test-app`
        );
      }

      return exist;
    })
    .map((name) => [name, path.join(angularPreviewPath, `${name}.ts`)]);

  await Promise.all(
    angularPreviewPaths.flatMap(([name, previewPath]) => {
      const writePath = path.join(
        __dirname,
        'docs',
        'auto-generated',
        'previews',
        'angular'
      );
      fse.ensureDirSync(writePath);

      const code = fs.readFileSync(previewPath).toString();
      const markdown = generateMarkdown(previewPath, 'typescript', code);
      return [
        fsp.writeFile(path.join(writePath, `${name}.md`), markdown),
        fsp.writeFile(
          path.join(angularPreviewSourceCodePath, `${name}.txt`),
          code
        ),
      ];
    })
  );
}
